<script>
	import CodeBox from '$lib/CodeBox.svelte';
	import NavCom from '$lib/navbar/NavCom.svelte';
	import { navbars } from '../../../store';
</script>

<main>
	<h1>Navbar Component</h1>
	{#each $navbars as item, index}
		<h2>{index + 1}. {item.title}</h2>
		<CodeBox copyCode={item.code}>
			<svelte:component this={item.componenet} />
		</CodeBox>
	{/each}
</main>
