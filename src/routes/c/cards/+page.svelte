<script>
	import Card1 from '$lib/c/cards/Card1.svelte';
	import Card2 from '$lib/c/cards/Card2.svelte';
	import Card3 from '$lib/c/cards/Card3.svelte';
</script>

<div>
	<h1>Cards</h1>
	<div class="flex justify-center">
		<div class="not-prose">
			<Card3 />
			<Card1 />
			<Card2 />
		</div>
	</div>
</div>

<style>
	h1 {
		margin: 0;
	}
</style>
