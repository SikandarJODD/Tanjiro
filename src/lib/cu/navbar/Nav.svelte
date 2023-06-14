<script>
	let site_name = '';
	let nv = '';
	let navs = [
		{
			name: 'Home',
			href: '/'
		}
	];
	let navUpdate = () => {
		navs = [...navs, { name: nv.toLowerCase(), href: `/${nv.toLowerCase()}` }];
		nv = '';
	};
	$: console.log(navs);
	let titleBold = false;
	let titleBorder = false;
	let showbtn = true;

	// Menus
	let allMenuBold = false;
	let firstMenuBold = false;
	let allMenuBorder = false;
</script>

<div class="not-prose">
	<div>
		<label for="name" class="font-bold text-gray-700">Name : </label>
		<input
			type="text"
			placeholder="Type here"
			class="input input-bordered input-success input-sm max-w-xs"
			bind:value={nv}
		/>
		<button class="btn btn-sm btn-outline capitalize mx-2" on:click={navUpdate}>Update</button>
	</div>
	<div class="box m-2">
		{#each navs as item}
			<div class="btn btn-outline btn-sm capitalize gap-1 m-1">
				{item.name}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<svg
					on:click={() => {
						navs = navs.filter((nav) => nav.name !== item.name);
					}}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-4 h-4 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/></svg
				>
			</div>
		{/each}
	</div>
</div>
<div class="not-prose md:my-2 border-2 px-3 py-2 rounded-xl border-slate-500">
	<h3 class="font-bold text-gray-900">Title</h3>
	<div class="flex align-middle items-center">
		<input
			type="text"
			placeholder="Type here"
			class="input input-bordered input-success input-sm max-w-xs"
			bind:value={site_name}
		/>
		<div class="form-control w-fit md:mx-2">
			<label class="label cursor-pointer">
				<input type="checkbox" class="checkbox checkbox-success" bind:checked={titleBold} />
				<span class="label-text ml-1">Bold</span>
			</label>
		</div>
		<div class="form-control w-fit md:mx-2">
			<label class="label cursor-pointer">
				<input type="checkbox" class="checkbox checkbox-success" bind:checked={titleBorder} />
				<span class="label-text ml-1">Border</span>
			</label>
		</div>
		<div class="form-control w-fit md:mx-2">
			<label class="label cursor-pointer">
				<input type="checkbox" class="checkbox checkbox-success" bind:checked={showbtn} />
				<span class="label-text ml-1">Show Button</span>
			</label>
		</div>
	</div>
</div>
<div class="not-prose md:my-2 border-2 px-3 py-2 rounded-xl border-slate-500">
	<h3 class="font-bold text-gray-900">Menus :</h3>
	<div class="flex align-middle items-center">
		<div class="form-control w-fit md:mx-2">
			<label class="label cursor-pointer">
				<input type="checkbox" class="checkbox checkbox-success" bind:checked={firstMenuBold} />
				<span class="label-text ml-1">First Bold</span>
			</label>
		</div>
		<div class="form-control w-fit md:mx-2">
			<label class="label cursor-pointer">
				<input type="checkbox" class="checkbox checkbox-success" bind:checked={allMenuBold} />
				<span class="label-text ml-1">All Bold</span>
			</label>
		</div>
		<div class="form-control w-fit md:mx-2">
			<label class="label cursor-pointer">
				<input type="checkbox" class="checkbox checkbox-success" bind:checked={allMenuBorder} />
				<span class="label-text ml-1">Border</span>
			</label>
		</div>
	</div>
</div>
<div class="not-prose border-2 border-slate-600 bg-slate-300 rounded-xl md:p-4">
	<div class="navbar bg-base-100">
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
					class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				>
					{#each navs as item}
						<li><a href={item.href} class="capitalize">{item.name}</a></li>
					{/each}
				</ul>
			</div>
			<a
				class=" btn btn-outline normal-case text-xl text-gray-800 {titleBold
					? 'font-bold'
					: ''} {titleBorder ? 'border-2 border-slate-800 hover:border-slate-800' : 'border-none'} "
				href="/">{site_name.length === 0 ? 'Title' : site_name}</a
			>
			<!-- {@html updated} -->
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1  ">
				{#each navs as item}
					<li class="{firstMenuBold ? 'first:font-bold' : ''}">
						<a
							href={item.href}
							class="capitalize mx-1 {allMenuBold ? 'font-bold ' : ''} {allMenuBorder
								? 'border-2 hover:border-2 hover:bg-slate-700 border-slate-700'
								: ''}  mbox">{item.name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
		{#if showbtn}
			<div class="navbar-end">
				<a class="btn">Button</a>
			</div>
		{/if}
	</div>
</div>
<style>
	.mbox:hover{
		background: lightgreen;
	}
</style>