<script>
	import { copy } from 'svelte-copy';
	let btnText = `Copy Code`;
	let btnCode = `<div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border-2 border-slate-600">
        <div class="relative mx-4 mt-5 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-gray-400">
          <img
            src="https://i.pinimg.com/564x/27/3c/a4/273ca4a88159bbb88d18c70a351691f4.jpg"
            alt="img-blur-shadow"
          />
        </div>
        <div class="p-6">
          <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            UI/UX Review Check
          </h5>
          <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            The place is close to Barceloneta Beach and bus stop just 2 min by walk
            and near to "Naviglio" where you can enjoy the main night life in
            Barcelona.
          </p>
        </div>
        <div class="p-6 pt-0">
          <button
            class="select-none rounded-lg bg-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Read More
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
		class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border-2 border-slate-600"
	>
		<div
			class="relative mx-4 mt-5 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-gray-400"
		>
			<img
				src="https://i.pinimg.com/564x/27/3c/a4/273ca4a88159bbb88d18c70a351691f4.jpg"
				alt="img-blur-shadow"
			/>
		</div>
		<div class="p-6">
			<h5
				class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
			>
				UI/UX Review Check
			</h5>
			<p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
				The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to
				"Naviglio" where you can enjoy the main night life in Barcelona.
			</p>
		</div>
		<div class="p-6 pt-0">
			<button
				class="select-none rounded-lg bg-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
				type="button"
				data-ripple-light="true"
			>
				Read More
			</button>
		</div>
	</div>
</div>
