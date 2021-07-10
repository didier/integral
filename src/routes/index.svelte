<script>
	import Example from '$lib/_demo/Example.svelte'
	import { Tab, Tabs, Modal } from '$lib/index'

	let showModal = false
</script>

<header>
	<h1>Integral: Unstyled, accessible Svelte components</h1>
</header>
<main>
	<Example title="Tabs">
		<p>Fully accessible, using the correct <code>aria</code> roles.</p>
		<main>
			<Tabs>
				<Tab title="One">I'm the first tab, so I'm being shown by default.</Tab>
				<Tab title="Two">Hey! I'm number two, now back to you!</Tab>
				<Tab title="Three">Number three, look at me!</Tab>
				<Tab title="Four">Four. What's more?</Tab>
			</Tabs>
		</main>
	</Example>
	<Example title="Modal">
		<p>Fully accessible, using the correct <code>aria</code> roles.</p>
		<main>
			<button on:click={() => (showModal = !showModal)}>Open modal</button>
			<Modal bind:open={showModal} title="Title">
				<h2 class="m-0">Hello world</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dicta aperiam temporibus
					consectetur minus, sequi quo fuga doloribus illo adipisci, fugiat quia tempora assumenda
					deleniti dolor quis saepe quasi perspiciatis, aspernatur eius ad hic accusantium quae! Quo
					optio voluptas dicta!
				</p>
				<button>Test</button>
			</Modal>
			<Modal bind:open={showModal} title="Title">
				<h2 class="m-0">Hello world</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi dicta aperiam temporibus
					consectetur minus, sequi quo fuga doloribus illo adipisci, fugiat quia tempora assumenda
					deleniti dolor quis saepe quasi perspiciatis, aspernatur eius ad hic accusantium quae! Quo
					optio voluptas dicta!
				</p>
			</Modal>
		</main>
	</Example>
</main>

<style>
	header {
		padding: var(--integral-padding-x) 0;
	}
</style>
