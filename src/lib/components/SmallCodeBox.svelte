<script>
	import { Copy, CopyCheck, CheckCircle } from 'lucide-svelte';
	import { scale } from 'svelte/transition';
	import { copy } from 'svelte-copy';
	export let copiedText = '';
	let isHover = false;
	let isActive = true;
	export let isBorder = false;
</script>

<main
	class="{isBorder
		? ' my-2 '
		: ' '} hover:border-slate-900 border border-slate-400 md:max-w-[70%] rounded-md px-2 py-4 relative hover:bg-base-200 transition-all duration-300"
	on:mouseenter={() => (isHover = true)}
	on:mouseleave={() => (isHover = false)}
>
	{#if isHover}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="absolute top-3 right-3 transition-all duration-100 active:scale-75"
			transition:scale
			use:copy={copiedText}
			on:click={() => {
				isActive = false;
				setTimeout(() => {
					isActive = true;
				}, 1000);
			}}
		>
			{#if isActive}
				<Copy />
			{:else}
				<!-- <CopyCheck /> -->
				<CheckCircle color="#1094f9" />
			{/if}
		</div>
	{/if}
	<code class="p-0 text-lg">
		<slot />
	</code>
</main>
