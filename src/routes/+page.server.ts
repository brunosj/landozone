export const prerender = false;

import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';
import { PUBLIC_CONTACT_EMAIL } from '$env/static/public';
import { verifyTurnstileToken } from '$lib/server/turnstile';

const resend = new Resend(RESEND_API_KEY);

export const actions = {
	default: async ({ request, getClientAddress }) => {
		try {
			const formData = await request.formData();
			const name = String(formData.get('name') ?? '').trim();
			const email = String(formData.get('email') ?? '').trim();
			const message = String(formData.get('message') ?? '').trim();
			const honeypot = String(formData.get('_gotcha') ?? '').trim();
			const turnstileToken = String(formData.get('cf-turnstile-response') ?? '').trim();

			if (honeypot) {
				return { success: true };
			}

			if (!email) {
				return fail(400, { email, missing: true });
			}

			const captchaOk = await verifyTurnstileToken(turnstileToken, getClientAddress());
			if (!captchaOk) {
				return fail(400, { email, captcha: true });
			}

			const { error } = await resend.emails.send({
				from: `landozone <${PUBLIC_CONTACT_EMAIL}>`,
				to: [PUBLIC_CONTACT_EMAIL],
				replyTo: email,
				subject: 'landozone - contact form submission',
				text: [`Name: ${name || '(not provided)'}`, `Email: ${email}`, '', message || '(empty message)'].join(
					'\n'
				)
			});

			if (error) {
				console.error('Resend error:', error);
				return { success: false, message: 'Email sending failed' };
			}

			return {
				success: true,
				status: 200,
				body: {
					message: 'Email sent successfully'
				}
			};
		} catch (error) {
			console.error('Error sending email:', error);
			return fail(500, {
				error: 'Internal server error'
			});
		}
	}
};
