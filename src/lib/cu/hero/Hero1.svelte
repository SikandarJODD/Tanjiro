<script>
	import { copy } from 'svelte-copy';
	let mainTitle = '';
	let subtitle = '';
	let src = '';
	let btnText = '';
	let isBtn = false;
	$: isBtnCode = isBtn
		? `<button class="btn btn-primary capitalize">
						${btnText.length === 0 ? 'Get Started' : btnText}
					</button>`
		: '';
	let btnCode = 'Copy Code';
	$: copyCode = `
    <div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img
				src=${src.length === 0
					? 'https://i.pinimg.com/564x/e4/79/3c/e4793c6a10e123fc71751f62ee51434f.jpg'
					: src}
				class="w-fit md:w-96 rounded-lg shadow-md md:shadow-lg md:shadow-gray-400 md:mx-10"
			/>
			<div>
				<h1 class="text-3xl md:text-5xl font-bold text-slate-800">
					${mainTitle.length === 0 ? 'Life is Simple' : mainTitle}
				</h1>
				<p class="py-6">
					${
						subtitle.length === 0
							? 'When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.'
							: subtitle
					}
				</p>
				${isBtnCode}
			</div>
		</div>
	</div>
    `;
</script>

<div class="prose p-3 m-1 md:border-2 md:border-slate-600 rounded-xl max-w-full">
	<button
		class="btn btn-outline btn-sm capitalize"
        use:copy={copyCode}
		on:click={() => {
			btnCode = 'Copied';
			setTimeout(() => {
				btnCode = 'Copy Code';
			}, 1200);
		}}>{btnCode}</button
	>
	<div class="flex flex-col md:flex-row flex-wrap">
		<label for="title" class="font-bold m-1">
			Title :
			<input
				type="text"
				placeholder="Type here"
				class="input input-bordered input-sm w-full max-w-xs input-info"
				bind:value={mainTitle}
			/>
		</label>
		<label for="title" class="font-bold m-1">
			Subtitle :
			<input
				type="text"
				placeholder="Type here"
				class="input input-bordered input-sm w-full max-w-xs input-info"
				bind:value={subtitle}
			/>
		</label>
		<label for="title" class="font-bold m-1">
			Button :
			<input
				type="text"
				placeholder="Type here"
				class="input input-bordered input-sm w-full max-w-xs input-info"
				bind:value={btnText}
			/>
		</label>
		<label for="title" class="font-bold m-1">
			Image URL:
			<input
				type="text"
				placeholder="Type here"
				class="input input-bordered input-sm w-full max-w-xs input-info"
				bind:value={src}
			/>
		</label>
	</div>
	<div class="font-normal block">
		<div class="form-control w-fit">
			<label class="cursor-pointer label">
				<input type="checkbox" bind:checked={isBtn} class="checkbox checkbox-info" />
				<span class="label-text ml-2">Button</span>
			</label>
		</div>
	</div>
</div>
<div class="not-prose">
	<div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row">
			<!-- svelte-ignore a11y-missing-attribute -->
			<img
				src={src.length === 0
					? 'https://i.pinimg.com/564x/e4/79/3c/e4793c6a10e123fc71751f62ee51434f.jpg'
					: src}
				class="w-fit md:w-96 rounded-lg shadow-md md:shadow-lg md:shadow-gray-400 md:mx-10"
			/>
			<div>
				<h1 class="text-3xl md:text-5xl font-bold text-slate-800">
					{mainTitle.length === 0 ? 'Life is Simple' : mainTitle}
				</h1>
				<p class="py-6">
					{subtitle.length === 0
						? 'When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.'
						: subtitle}
				</p>
				{#if isBtn}
					<button class="btn btn-primary capitalize">
						{btnText.length === 0 ? 'Get Started' : btnText}
					</button>
				{/if}
			</div>
		</div>
	</div>
</div>
