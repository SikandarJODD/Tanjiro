<script>
	import Card1 from '$lib/c/cards/Card1.svelte';
	import Card2 from '$lib/c/cards/Card2.svelte';
	import Card3 from '$lib/c/cards/Card3.svelte';
	import Card4 from '$lib/c/cards/Card4.svelte';
	import Card5 from '$lib/c/cards/Card5.svelte';
	import Card6 from '$lib/c/cards/Card6.svelte';
	import Card7 from '$lib/c/cards/Card7.svelte';
	import Card8 from '$lib/c/cards/Card8.svelte';
	import Card9 from '$lib/c/cards/Card9.svelte';

</script>

<div>
	<h1>Cards</h1>
	<div class="flex justify-center">
		<div class="not-prose">
			<Card4/>
			<Card3 />
			<Card1 />
			<Card2 />
			<Card5/>
			<Card6/>
			<Card7/>
			<Card8/>
			<Card9/>
		</div>
	</div>
</div>

<style>
	h1 {
		margin: 0;
	}
</style>
