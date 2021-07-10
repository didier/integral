<script>
	import { onMount, setContext } from 'svelte'
	import { writable } from 'svelte/store'

	/**
	 * The ID of the currently show tab
	 */
	export let current = 0

	/**
	 * CSS Classes to apply to the `Tabs` component
	 */
	let classes = ''
	export { classes as class }
	let currentTabId = writable(current)

	$: $currentTabId = current
	$: updateProps($currentTabId)

	function updateProps(value) {
		current = value
	}

	setContext('current', currentTabId)

	let titles = []

	setContext('tab-titles', {
		register(id, title) {
			titles = [...titles, { id, title }]
		},
		updateTitle(id, title) {
			const tabIndex = titles.findIndex((title) => title.id === id)
			titles[tabIndex].title = title
		},
		unregister(id) {
			const index = titles.findIndex((title) => title.id === id)
			if (index > -1) {
				titles = [...titles.splice(index, 1)]
			}
		},
		get() {
			return titles
		}
	})

	let tabs
	onMount(() => {
		tabs = container.querySelectorAll('[role="tab"]')
	})

	function useArrowKeys(e) {
		if (e.keyCode === 39 || e.keyCode === 37) {
			if (e.keyCode === 39) {
				current++

				// If we're at the end, go to the start
				if (current >= titles.length) {
					current = 0
				}

				// Move left
			} else if (e.keyCode === 37) {
				current--

				// If we're at the start, move to the end
				if (current < 0) {
					current = titles.length - 1
				}
			}

			tabs[current].focus()
		}
	}

	let container
</script>

<section class={classes} bind:this={container}>
	<header>
		<menu role="tablist" aria-label="tabs group">
			{#each titles as { id, title }}
				<button
					on:click={() => ($currentTabId = id)}
					role="tab"
					aria-controls="panel-{id}"
					id="tab-{id}"
					on:keydown={useArrowKeys}
					tabindex={$currentTabId === id ? 0 : -1}
					aria-selected={$currentTabId === id}>{title}</button
				>
			{/each}
		</menu>
	</header>
	<main>
		<slot {current} />
	</main>
</section>

<style>
	menu[role='tablist'] {
		/* overflow: hidden; */
		padding: 0;
		margin: 0;
		position: relative;
		margin: 0 0 -2px 0;
		text-indent: 0;
		list-style-type: none;
		display: flex;

		button {
			&:first-child {
				border-radius: 4px 0 0 0;
			}

			&:last-child {
				border-radius: 0 4px 0 0;
			}
			z-index: 1;
			text-decoration: none;
			min-width: unset;
			border-radius: 0;

			&[aria-selected='true'] {
				border: 1px solid transparent;
				/* margin-top: -4px; */
				/* padding-bottom: 4px; */
				background: var(--integral-active-color);
				box-shadow: none;
				border-bottom: 0;
				/* position: relative; */
				/* z-index: 8; */
			}

			&:disabled {
				opacity: 0.6;
			}
		}
	}
</style>
