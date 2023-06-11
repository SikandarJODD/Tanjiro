<script>
	let comps = [
		{
			name: 'Navbar',
			path: '/c/navbar'
		},
		{
			name: 'Hero',
			path: '/c/hero'
		},
		{
			name: 'Card',
			path: '/c/card'
		},
		
	];
</script>

<main class="border-slate-800  py-10 flex justify-center align-middle text-center">
	<div class="container border-2 p-3 border-slate-800 bg-yellow-200 rounded-xl flex flex-wrap m-10 justify-center">
		{#each comps as item}
			<a
				href={item.path}
				class="btn btn-outline border-black shad border-2 hover:border-black hover:bg-green-300 hover:text-slate-800 mx-2 my-3 font-bold"
				>{item.name}</a
			>
		{/each}
	</div>
</main>

<style>
	.shad:hover {
        transform: translate(-4px,-4px);
		box-shadow: 3px 3px rgb(0, 6, 22);
	}
</style>
