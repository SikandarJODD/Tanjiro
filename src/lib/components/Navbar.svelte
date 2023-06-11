<script>
	import { fade, scale } from 'svelte/transition';
	
	let navs = [
		{
			name: 'Home',
			link: '/'
		},
		{
			name: 'Components',
			link: '/c'
		},
		{
			name: 'Custom',
			link: '/cu'
		},
		{
			name: 'about',
			link: '/a'
		}
	];

	/*
    {x > 40
		? 'md:border-2 backdrop-blur-sm rounded-md bg-[#FFFF00A5] border-black w-[80%] mx-auto sticky top-10 '
		: ' border-b-2 border-slate-900'} 
    */
</script>

<div class="navbar md:pl-32 border-b-2 backdrop-blur-sm bg-[#85FFB470] border-slate-800 z-20">
	<div class="navbar-start">
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 border-2 border-gray-950"
			>
				{#each navs as nav}
					<li>
						<a href={nav.link} class="capitalize font-semibold">{nav.name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<a
			class="btn btn-ghost normal-case text-xl font-mono border-2 border-gray-700 hover:bg-yellow-300 hover:border-gray-900"
			href="/">Svelte-Components</a
		>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			{#each navs as nav}
				<li>
					<a
						href={nav.link}
						class="btn btn-sm mx-1 capitalize border-2 border-gray-600 hover:btn-outline"
						>{nav.name}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
