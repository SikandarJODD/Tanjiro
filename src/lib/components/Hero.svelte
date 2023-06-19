<script>
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
</script>

<div class="hero min-h-screen bg_wonder">
	<div class="hero-content text-center">
		<div class="md:max-w-2xl">
			<h1 class="text-5xl font-bold" in:scale >
				<span class="md:bg-gray-50 md:border-2 border-slate-700 rounded-lg md:p-2">Copy-Paste</span>
				Components
			</h1>
			<p class="py-6 text-lg">Daisy UI + Tailwind CSS components for Building Website</p>
			<a href="/cu" class="btn btn-outline border-2 hover:bg-emerald-300 hover:text-gray-800"
				>Customs</a
			>
			<a href="/c" class="btn btn-outline border-2 hover:bg-yellow-300 hover:text-gray-800"
				>Components</a
			>
		</div>
	</div>
</div>

<style>
	.bg_wonder {
		background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
	}
</style>
