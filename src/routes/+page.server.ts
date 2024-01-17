export const prerender = false;

import { fail } from '@sveltejs/kit';
import { SECRET_WEB3FORMS_KEY } from '$env/static/private';
import { PUBLIC_WEB3FORMS_URL } from '$env/static/public';

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const name = formData.get('name');
			const email = formData.get('email');
			const message = formData.get('message');

			if (!email) {
				console.log('Email is missing');
				return fail(400, { email, missing: true });
			}

			const web3FormsUrl = PUBLIC_WEB3FORMS_URL;
			const accessKey = SECRET_WEB3FORMS_KEY;

			const web3FormsData = {
				access_key: accessKey,
				name: name,
				email: email,
				message: message
			};

			const response = await fetch(web3FormsUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(web3FormsData)
			});

			if (response.ok) {
				const result = await response.json();
				if (result.success) {
					return {
						success: true,
						status: 200,
						body: {
							message: 'Email sent successfully'
						}
					};
				} else {
					return { success: false, message: 'Email sending failed' };
				}
			} else {
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
