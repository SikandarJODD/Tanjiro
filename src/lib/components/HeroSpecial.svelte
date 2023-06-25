<script>
	import { CheckCircle, BadgeCheck } from 'lucide-svelte';
</script>

<div class="relative isolate px-6 lg:px-8">
	<div
		class="absolute inset-x-0 -z-10 transform-gpu overflow-hidden max-h-[90vh] blur-3xl"
		aria-hidden="true"
	>
		<div
			class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		/>
	</div>
	<div class="mx-auto max-w-2xl py-24 sm:py-48 max-h-[90vh]">
		<div class="hidden sm:mb-8 sm:flex sm:justify-center">
			<div
				class="relative rounded-full px-3 py-1 text-sm leading-7 text-gray-600 ring-1 ring-gray-900/20 hover:ring-gray-900/40 shadow-md"
			>
				Latest Updates on Components <a href="/c/i" class="font-semibold text-indigo-600"
					><span class="absolute inset-0" aria-hidden="true" /> Installation Part
					<span aria-hidden="true">&rarr;</span></a
				>
			</div>
		</div>
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Svelte Components</h1>
			<h1 class="text-4xl font-bold tracking-tight sm:text-6xl md:mt-4 text-[#0368FF]">
				Tailwind CSS & Daisy UI
			</h1>
			<p class="mt-6 text-md md:text-xl font-thin leading-tight text-gray-700">
				This is a collection of Svelte Components that are built with Tailwind CSS and Daisy UI. You
				can use these components in your Svelte projects.
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<!-- <a
					href="#"
					class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Get started</a
				>
				<a href="#" class="text-sm font-semibold leading-6 text-gray-900"
					>Learn more <span aria-hidden="true">→</span></a
				> -->
				<a href="/c" class="flex">
					<button class="btn btn-outline btn-md temt-sm md:text-lg capitalize">
						<BadgeCheck />
						Components</button
					>
				</a>
				<a href="/cu" class="flex">
					<button class="btn btn-md text-sm md:text-lg capitalize btn-outline">
						<CheckCircle />
						Custom
					</button>
				</a>
			</div>
		</div>
	</div>
</div>
