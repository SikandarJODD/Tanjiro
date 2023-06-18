<script>
	import { goto } from '$app/navigation';
	import { scale, fade, fly } from 'svelte/transition';

	let comps = [
		{
			name: 'Navbar',
			path: '/c/navbar'
		},
		{
			name: 'Cards',
			path: '/c/cards'
		}
	];

	export let data;
	$: ({ pathname } = data);
</script>

<div class="parent relative">
	<div class="div1 md:sticky md:top-20 md:w-[97%]">
		<ol>
			{#each comps as item, index}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li class="hover:bg-sky-200 rounded-md" on:click={() => goto(item.path)}>
					<a class="mx-4 my-3 text-slate-900 font-mono" href={item.path}>{index + 1}. {item.name}</a
					>
				</li>
			{/each}
		</ol>
	</div>
	<div class="div2 prose md:max-w-full">
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
		margin: 10px;
		border: 2px solid black;
		border-radius: 8px;
		padding: 15px;
		grid-area: 1 / 2 / 6 / 3;
		height: fit-content;
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
		}
		.div2 {
			height: max-content;
			max-width: 90vw;
			grid-area: 2 / 1 / 5 / 2;
		}
	}
</style>
