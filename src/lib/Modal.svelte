<script>
	import { onMount } from 'svelte'

	import { fade } from 'svelte/transition'

	export let open = false
	export let title = ''

	let modal

	$: if (open) {
		modal.showModal()
		modal.focus()
	} else {
		if (modal?.open) {
			modal.close()
		}
	}

	onMount(() => {
		modal.addEventListener('close', () => (open = false))
	})
</script>

<dialog {open} bind:this={modal} transition:fade>
	<header>
		<p>{title}</p>

		<button on:click={() => (open = false)} type="reset" aria-label="Close modal">&cross;</button>
	</header>
	<main>
		<slot />
	</main>
</dialog>

<output aria-live="polite" />

<style>
	dialog {
		max-width: 65ch;
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 99999999999999;
		border: none;
		border-radius: 4px;
		opacity: 0;
		animation: appear 0.3s forwards;

		&::backdrop {
			color: red;
			height: 100%;
			width: 100%;
			background: rgba(0, 0, 0, 0.5);
		}

		header,
		main {
			padding: var(--integral-padding-y);
		}

		header {
			background: var(--integral-border-color);
			display: grid;
			/* grid-auto-flow: column; */
			grid-template-columns: 1fr auto;
			justify-items: space-between;
			align-items: center;
		}
	}

	@keyframes appear {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
</style>
