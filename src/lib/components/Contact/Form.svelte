<script lang="ts">
	import { enhance } from '$app/forms';
	import { elasticOut, cubicInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	let form: HTMLFormElement;

	interface SpinParams {
		delay: number;
		duration: number;
	}

	interface SvelteNode extends Element {}

	let action_result: any = $state();
	let success = $state(false);
	let message_type = 'error';

	const handle_result = (result: any) => {
		console.log(result);
		if (result.data.success === true) {
			success = true;
		} else if (result.data.success === false) {
			action_result = 'failure';
			message_type = 'error';
		}
	};

	export const spin = (node: SvelteNode, { delay, duration }: SpinParams) => {
		return {
			delay,
			duration,
			css: (t: any) => {
				const eased = elasticOut(t);
				return `
          transform: scale(${eased}) rotate(${eased * 360}deg);
          `;
			}
		};
	};
</script>

<section>
	<div class="container">
		<form
			method="POST"
			action="/"
			use:enhance={() => {
				return ({ update, result }) => {
					handle_result(result);
					update({ reset: false });
				};
			}}>
			<div class="field">
				<label for="name" class="font-semibold"> Name </label>
				<input type="text" name="name" class="form-input" />
			</div>
			<div class="field">
				<label for="email" class="font-semibold"> Email</label>
				<input type="email" name="email" class="form-input" value={form?.email ?? ''} required />
			</div>

			<div class="field">
				<label for="message" class="font-semibold"> Message</label>
				<div>
					<textarea name="message" class="form-input message"></textarea>
				</div>
			</div>
			<div>
				{#if form?.missing}<p class="error-message">The email field is required</p>{/if}

				{#if success}
					<p class="success-message">Thanks! Your email has been sent</p>
				{:else if action_result === 'failure'}
					<p class="error-message">There was an error. Please send a message per email.</p>
				{:else}
					<button type="submit" style="--border-color: #00cfa1; --text-hover-color: #14151d">
						<span class="button-content"> Submit</span>
					</button>
				{/if}
			</div>

			<div class="absolute hidden">
				<input type="text" name="_gotcha" />
			</div>
		</form>
	</div>
</section>

<style>
	section {
		width: 100%;
		margin: 2rem auto;
		border-radius: 12px;
		background-color: var(--color-gray);
	}

	label {
		color: var(--color-lightgray);
	}

	form {
		width: 90%;
		margin: auto;
	}

	form > * + * {
		margin-top: 1.5rem;
	}

	.field > * + * {
		margin-top: 0.75rem;
	}

	.container {
		border-radius: 8px;
		padding: 3rem 0rem;
		margin: auto;
	}

	.form-input {
		box-sizing: border-box;
		color: var(--color-white);
		font-size: 1rem;
		width: 100%;
		border: transparent;
		border-radius: 4px;
		background-color: var(--color-black);
		padding: 0.5rem 1rem;
		transition: border-color 0.3s ease-in-out;
		outline: none;
		height: 2rem;
	}

	.form-input:focus {
		/* border-color: var(--color-primary); */
		box-shadow: 0 0 0 3px var(--color-primary);
	}

	.message {
		padding-bottom: 5rem;
		font-family: 'Rubik Variable', sans-serif;
	}

	.error-message {
		color: #ff0000;
	}

	.success-message {
		color: var(--color-primary);
	}

	.hidden {
		display: none !important;
		height: 0;
		width: 0;
	}

	.absolute {
		position: absolute;
	}

	button {
		position: relative;
		width: 30%;
		/* height: 1.5rem; */
		padding: 0.4rem 0.4rem;
		border-radius: 2px;
		background-color: var(--color-black);
		border: solid 0.5px var(--color-white);
		border-bottom: transparent;
		color: var(--color-white);
		z-index: 20;
		transition: all 0.3s ease-in-out;
		cursor: pointer;
	}

	button:after {
		transition: all 0.3s ease-in-out;
		content: '';
		position: absolute;
		bottom: 0;
		z-index: -1;
		height: 10%;
		width: 100%;
		left: 0%;
		right: 0;
		opacity: 1;
		border-radius: 0px 0px 2px 2px;
		background: linear-gradient(
			65deg,
			var(--border-color) 0%,
			var(--border-color) 100%,
			rgba(255, 209, 0, 0) 100%
		);
	}

	button:hover:after {
		height: 100%;
		border-radius: 2px;
	}

	button:hover {
		color: var(--text-hover-color);
		border: none;
		transition: all 0.3s ease-in-out;
	}

	.button-content {
		/* display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between; */
		font-size: 0.6rem;
		text-transform: uppercase;
		letter-spacing: 0.6px;
		font-family: 'IBM Plex Mono', sans-serif;
		font-weight: 500;
		margin: auto;
	}

	@media (min-width: 55em) {
		section {
			margin: 3rem auto;
			width: 100%;
		}

		button {
			width: 20%;
		}

		form {
			width: 100%;
		}

		.container {
			width: 80%;
		}

		.button-content {
			font-size: 0.7rem;
		}

		.message {
			padding-bottom: 10rem;
		}
	}

	@media (min-width: 75em) {
		section {
			margin: 3rem auto;
			width: 100%;
		}
	}
</style>
