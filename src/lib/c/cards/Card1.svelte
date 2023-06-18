<script>
	import { copy } from 'svelte-copy';
	let btnText = `Copy Code`;
	let btnCode = `<div
	class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border-2 border-gray-700"
>
	<div
		class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg shadow-gray-400"
	>
		<!-- svelte-ignore a11y-missing-attribute -->
		<img
			src="https://i.pinimg.com/564x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg"
			class="h-full w-full object-cover"
		/>
	</div>
	<div class="p-6">
		<div class="mb-2 flex items-center justify-between">
			<p
				class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
			>
				Classic Product
			</p>
			<p
				class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
			>
				$95.00
			</p>
		</div>
		<p
			class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75"
		>
			With plenty of talk and listen time, voice-activated Siri access, and an available wireless
			charging case.
		</p>
	</div>
	<div class="p-6 pt-0">
		<button
			class="block w-full select-none rounded-lg bg-gray-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
			type="button"
		>
			Add to Cart
		</button>
	</div>
</div>`;
</script>

<div class="mb-8">
	<div>
		<button
			class="btn btn-sm btn-outline my-2 mx-1 capitalize"
			use:copy={btnCode}
			on:click={() => {
				btnText = `Copied!`;
				setTimeout(() => {
					btnText = `Copy Code`;
				}, 1200);
			}}>{btnText}</button
		>
		<button class="btn btn-sm btn-neutral mx-1 my-2 capitalize">Tailwind </button>
	</div>

	<div
		class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border-2 border-gray-700"
	>
		<div
			class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg shadow-gray-400"
		>
			<!-- svelte-ignore a11y-missing-attribute -->
			<img
				src="https://i.pinimg.com/564x/8c/db/e1/8cdbe123010c380e20f264a8fdd57938.jpg"
				class="h-full w-full object-cover"
			/>
		</div>
		<div class="p-6">
			<div class="mb-2 flex items-center justify-between">
				<p
					class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
				>
					Classic Product
				</p>
				<p
					class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
				>
					$95.00
				</p>
			</div>
			<p
				class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75"
			>
				With plenty of talk and listen time, voice-activated Siri access, and an available wireless
				charging case.
			</p>
		</div>
		<div class="p-6 pt-0">
			<button
				class="block w-full select-none rounded-lg bg-gray-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
				type="button"
			>
				Add to Cart
			</button>
		</div>
	</div>
</div>
