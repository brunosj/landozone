export const prerender = false;

import { fail } from '@sveltejs/kit';
import { SECRET_BREVO_API_KEY } from '$env/static/private';
import { PUBLIC_BREVO_URL } from '$env/static/public';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const message = formData.get('message');

		// console.log('Received form data:', { name, email, message });

		if (!email) {
			console.log('Email is missing');
			return fail(400, { email, missing: true });
		}

		const apiKey = SECRET_BREVO_API_KEY;
		const url = PUBLIC_BREVO_URL;

		const emailData = {
			sender: {
				name: name,
				email: email
			},
			to: [
				{
					email: 'contact@landozone.net',
					name: 'landozone | contact'
				}
			],
			htmlContent: `<html><head></head><body><p>Hello,</p>${message}</body></html>`
		};

		// console.log('Sending email with data:', emailData);

		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					accept: 'application/json',
					'api-key': apiKey,
					'content-type': 'application/json'
				},
				body: JSON.stringify(emailData)
			});

			// console.log('Email response:', response);

			if (response.status === 200) {
				return {
					status: 200,
					body: {
						message: 'Email sent successfully'
						// messageId: info.messageId
					}
				};
			} else {
				// console.log('Email sending failed. Response:', response);
				return { success: false, message: 'Email sending failed' };
			}
		} catch (error) {
			console.error('Error sending email:', error);
			return fail(500, {
				error: 'Internal server error'
			});
		}
	}
};
