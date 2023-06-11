<script>
	import CopyIcon from './copy.png';
	let visible = false;
	import { fade, scale } from 'svelte/transition';
	import { copy } from 'svelte-copy';
	export let copyCode = 'Hello';
</script>

<div
	class="relative"
	on:mouseenter={() => (visible = true)}
	on:mouseleave={() => (visible = false)}
>
	{#if visible}
		<img
			transition:scale
			src={CopyIcon}
			class="absolute w-6 -top-5 right-2 duration-150 transition-all active:scale-75"
			alt="code"
			use:copy={copyCode}
		/>
	{/if}
	<div
		class="not-prose px-3 pb-32 pt-10 md:p-9 box border-2 border-slate-800 rounded-md overflow-hidden"
	>
		<slot />
	</div>
</div>

<style></style>
