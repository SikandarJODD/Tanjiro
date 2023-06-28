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
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
	/*
    {x > 40
		? 'md:border-2 backdrop-blur-sm rounded-md bg-[#FFFF00A5] border-black w-[80%] mx-auto sticky top-10 '
		: ' border-b-2 border-slate-900'} 
    */
	let isCheckToggle = false;
</script>

<div
	class="navbar md:pl-32 border-b-2 backdrop-blur-sm bg-primary border-slate-800 z-20 top-0 fixed"
>
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
		<a class=" rounded-md px-3 py-2 normal-case text-xl font-mono border-2 border-secondary " href="/">Cu</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			{#each navs as nav}
				<li>
					<a href={nav.link} class=" mx-1 capitalize px-3 py-2 text-[1.04rem] text-info">{nav.name} </a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="navbar-end hidden md:flex">
		<button data-set-theme={isCheckToggle ? 'lofi' : 'dark'} data-act-class="ACTIVECLASS">
			<input type="checkbox" class="toggle toggle-info" bind:checked={isCheckToggle} />
		</button>
	</div>
</div>

<style>
	.box_sqr {
		font-weight: bold;
		transition: all 0.2s ease;
	}
	.box_sqr:hover {
		transition: all 0.2s ease;
		box-shadow: 3px 3px #02375f;
		transform: translate(-3px, -3px);
	}
</style>
