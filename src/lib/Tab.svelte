<script>
	import { getContext, onDestroy } from 'svelte'

	/**
	 * The title of the Tab. This will be shown in the clickable tab button.
	 */
	export let title

	/**
	 * CSS Classes to apply to the `Tab` component
	 */
	let classes = ''
	export { classes as class }

	let currentTabId = getContext('current')

	const tabs = getContext('tab-titles')

	/**
	 * Sets this Tab's ID
	 */
	const id = tabs.get().length

	$: tabs.updateTitle(id, title)

	tabs.register(id, title)

	// Clean up tab
	onDestroy(() => {
		tabs.unregister(id)
	})
</script>

<article
	role="tabpanel"
	tabindex="0"
	aria-labelledby="tab-{id}"
	id="panel-{id}"
	hidden={id !== $currentTabId}
	class={classes}
>
	<slot />
</article>

<style>
	article[role='tabpanel'] {
		padding: 14px;
		clear: both;
		background: var(--integral-bg);
		border: var(--integral-border);
		position: relative;
		z-index: 2;
		margin-bottom: 0.5rem;
	}
</style>
