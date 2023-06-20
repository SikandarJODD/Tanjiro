<script>
	import { scale, fade } from 'svelte/transition';
</script>

<div class="bg-green-400 px-4 py-3 text-gray-900">
	<p class="text-center text-sm font-medium">
		Enjoy Cu ❤️️
		<a
			href="https://github.com/SikandarJODD/tanjiro"
			target="_blank"
			class="inline-block underline"
		>
			Give us Star on Github</a
		>
	</p>
</div>

<div class="bg-white" in:scale>
	<div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<div class=" rounded-full">
				<img
					src="https://media.licdn.com/dms/image/C4D03AQGP1dNhTLkZrA/profile-displayphoto-shrink_400_400/0/1662137583464?e=1692835200&v=beta&t=pt5aAnMxmxxA7qyM7f9LXkFlYx20HYptKJ7ZCoK238Y"
					alt=""
					class="rounded-full h-52 w-52 mx-auto border-2 p-2 border-green-500 hover:scale-110 transition duration-300 ease-in-out mb-4"
				/>
			</div>
			<p
				class="mt-1 text-xl font-extrabold text-gray-700 sm:text-5xl sm:tracking-tight lg:text-5xl"
			>
				Developed By <span
					class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-sky-600"
					>Sikandar.S.Bhide</span
				>
			</p>
			<p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
				<span
					class="border-2 border-slate-600 rounded-md p-1 bg-yellow-300 text-slate-800 font-bold"
					>Cu</span
				> is a collection of UI components for SvelteKit and TailwindCSS.
			</p>
		</div>
	</div>
</div>
