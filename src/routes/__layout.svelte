<script>
	import '../app.postcss'
</script>

<div>
	<slot />
</div>

<style>
	div {
		max-width: 65ch;
		width: 100%;
		padding: var(--integral-padding-x);
		margin: 0 auto;
		box-sizing: content-box;
	}
</style>
