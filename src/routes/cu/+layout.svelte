<script>
	import { fade, fly, scale } from 'svelte/transition';
	import { goto } from '$app/navigation';

	let comps = [
		{
			name: 'Navbar',
			path: '/cu/navbar'
		},
		{
			name: 'Hero',
			path: '/cu/hero'
		},
		{
			name: 'Products Card',
			path: '/cu/products'
		},
		{
			name: 'Cards',
			path: '/cu/card'
		},
		{
			name: 'Grid',
			path: '/cu/grids'
		}
	];

	export let data;
	$: ({ pathname } = data);
</script>

<div class="parent relative">
	<div class="div1 md:fixed md:top-20 md:w-[19%]">
		<ol>
			{#each comps as item, index}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li
					class="hover:bg-sky-300 rounded-md ease-out transition-all"
					on:click={() => goto(item.path)}
				>
					<a class="mx-4 my-3 text-slate-900 font-mono" href={item.path}>{index + 1}. {item.name}</a
					>
				</li>
			{/each}
		</ol>
	</div>
	<div class="div2 md:max-w-full">
		{#key pathname}
			<div in:scale={{ duration: 300 }}>
				<slot />
			</div>
		{/key}
	</div>
</div>

<style>
	.parent {
		display: grid;
		grid-template-columns: 1fr 4fr;
		grid-template-rows: repeat(5, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		height: 90.9vh;
	}

	.div1 {
		background: lightcyan;
		grid-area: 1 / 1 / 6 / 2;
		border: 2px solid black;
		margin: 10px;
		border-radius: 8px;
		padding: 10px;
		height: fit-content;
		min-height: 200px;
	}
	.div2 {
		margin: 90px 10px;
		border: 2px solid black;
		border-radius: 8px;
		padding: 15px 15px 30px 15px;
		grid-area: 1 / 2 / 6 / 3;
		height: fit-content;
		min-height: 300px;
	}
	@media (max-width: 768px) {
		.parent {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: repeat(4, 1fr);
			grid-column-gap: 0px;
			grid-row-gap: 0px;
			place-items: center;
		}

		.div1 {
			min-height: 120px;
			height: fit-content;
			grid-area: 1 / 1 / 2 / 2;
			width: 90vw;
			margin: 15px auto;
		}
		.div2 {
			height: max-content;
			max-width: 95vw;
			margin: 10px auto;
			grid-area: 2 / 1 / 5 / 2;
		}
	}
</style>
