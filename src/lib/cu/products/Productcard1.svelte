<script>
	import { copy } from 'svelte-copy';
	let checkRupees = false;
	let s = 0;
	let bgdesign = [
		{
			id: 0,
			name: 'black',
			bgclass: 'bg-black',
			border: 'black',
			radioclass: 'radio'
		},
		{
			id: 1,
			name: 'blue',
			bgclass: `bg-[#1C63FC]`,
			border: 'blue-500',
			radioclass: 'radio radio-info'
		},
		{
			id: 2,
			name: 'green',
			bgclass: 'bg-green-500',
			border: 'green-500',
			radioclass: 'radio radio-success'
		},
		{
			id: 3,
			name: 'indigo',
			bgclass: 'bg-indigo-500',
			border: 'indigo-500',
			radioclass: 'radio radio-primary'
		}
	];
	let inputTitles = [
		{
			pgtitle: '',
			subtitle: '',
			prize: ''
		},
		{
			pgtitle: '',
			subtitle: '',
			prize: ''
		},
		{
			pgtitle: '',
			subtitle: '',
			prize: ''
		}
	];
	$: copyCode = `
    <section aria-labelledby="pricing-two" id="pricing-two" class="bg-gray-100">
		<div class="relative items-center w-full px-8 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
			<div class="">
				<div class="items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
					<div class="mx-auto space-y-4 lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0">
						<div class="flex flex-col h-full bg-white rounded-3xl shadow-lg">
							<div class="px-6 py-8 sm:p-10 sm:pb-6">
								<div class="grid items-center justify-center w-full grid-cols-1 text-left">
									<div>
										<h2 class="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
											${inputTitles[0].pgtitle.length === 0 ? 'Basic' : inputTitles[0].pgtitle}
										</h2>
										<p class="mt-2 text-sm text-gray-500">
											${inputTitles[0].subtitle.length === 0 ? 'Suitable to grow steadily' : inputTitles[0].subtitle}
										</p>
									</div>
									<div class="mt-6">
										<p>
											<span class="text-5xl font-light tracking-tight text-black">
												${checkRupees ? '₹' : '$'}{inputTitles[0].prize.length === 0
													? '15'
													: inputTitles[0].prize}
											</span>
											<span class="text-base font-medium text-gray-500"> /mo </span>
										</p>
									</div>
								</div>
							</div>
							<div class="flex px-6 pb-8 sm:px-8">
								<a
									href="#"
									class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 ${
										bgdesign[s].bgclass
									} border-2 border-${
		bgdesign[s].border
	} rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
									aria-describedby="tier-company"
								>
									Get started
								</a>
							</div>
						</div>
						<div class="flex flex-col h-full bg-white rounded-3xl shadow-lg">
							<div class="px-6 py-8 sm:p-10 sm:pb-6">
								<div class="grid items-center justify-center w-full grid-cols-1 text-left">
									<div>
										<h2 class="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
											${inputTitles[1].pgtitle.length === 0 ? 'Standard' : inputTitles[1].pgtitle}
										</h2>
										<p class="mt-2 text-sm text-gray-500">
											${inputTitles[1].subtitle.length === 0 ? 'Suitable to grow steadily.' : inputTitles[1].subtitle}
										</p>
									</div>
									<div class="mt-6">
										<p>
											<span class="text-5xl font-light tracking-tight text-black">
												${checkRupees ? '₹' : '$'}
												${inputTitles[1].prize.length === 0 ? '25' : inputTitles[1].prize}
											</span>
											<span class="text-base font-medium text-gray-500"> /mo </span>
										</p>
									</div>
								</div>
							</div>
							<div class="flex px-6 pb-8 sm:px-8">
								<a
									href="#"
									class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 ${
										bgdesign[s].bgclass
									} border-2 border-${
		bgdesign[s].border
	} rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
									aria-describedby="tier-company"
								>
									Get started
								</a>
							</div>
						</div>
						<div class="flex flex-col h-full ${bgdesign[s].bgclass} rounded-3xl">
							<div class="px-6 py-8 sm:p-10 sm:pb-6">
								<div class="grid items-center justify-center w-full grid-cols-1 text-left">
									<div>
										<h2 class="text-lg font-medium tracking-tighter text-white lg:text-3xl">
											${inputTitles[2].pgtitle.length === 0 ? 'Premium' : inputTitles[2].pgtitle}
										</h2>
										<p class="mt-2 text-sm text-gray-100">
											${inputTitles[2].subtitle.length === 0 ? 'Suitable to grow steadily.' : inputTitles[2].subtitle}
										</p>
									</div>
									<div class="mt-6">
										<p>
											<span class="text-5xl font-light tracking-tight text-white">
												${checkRupees ? '₹' : '$'}
												${inputTitles[2].prize.length === 0 ? '35' : inputTitles[2].prize}
											</span>
											<span class="text-base font-medium text-white"> /mo </span>
										</p>
									</div>
								</div>
							</div>
							<div class="flex px-6 pb-8 sm:px-8">
								<a
									href="#"
									class="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white"
									aria-describedby="tier-starter"
								>
									Get started
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    `;
	let copybtn = 'copy';
</script>

<div class="not-prose flex flex-wrap border-2 border-slate-600 w-fit p-2 rounded-lg">
	{#each inputTitles as item}
		<div class="box flex flex-col m-2">
			<div class="flex items-center">
				<label for="title">Title</label>
				<input
					type="text"
					placeholder="Type Title"
					class="input input-bordered input-sm w-full max-w-xs my-1 mx-2"
					bind:value={item.pgtitle}
				/>
			</div>
			<div class="flex items-center">
				<label for="subtitle">Subtitle</label>
				<input
					type="text"
					placeholder="Type Subtitle"
					class="input input-bordered input-sm w-full max-w-xs my-1 mx-2"
					bind:value={item.subtitle}
				/>
			</div>
			<div class="flex items-center">
				<label for="subtitle">Prize </label>
				<input
					type="text"
					placeholder="Type Subtitle"
					class="input input-bordered input-sm w-full max-w-xs my-1 mx-2"
					bind:value={item.prize}
				/>
			</div>
		</div>
	{/each}
</div>
<div class="not-prose flex flex-wrap">
	<div class="form-control">
		<label class="cursor-pointer label w-fit">
			<input type="checkbox" bind:checked={checkRupees} class="checkbox checkbox-success" />
			<span class="label-text text-gray-800 ml-3">Rupees</span>
		</label>
	</div>
	<div class="flex flex-wrap">
		{#each bgdesign as item}
			<div class="form-control">
				<label class="cursor-pointer label w-fit">
					<input type="radio" value={item.id} class={item.radioclass} bind:group={s} />
					<span class="label-text text-gray-800 ml-3">{item.name}</span>
				</label>
			</div>
		{/each}
	</div>
</div>
<div>
	<button
		class="btn btn-outline btn-sm m-3 capitalize"
		use:copy={copyCode}
		on:click={() => {
			copybtn = 'copied';
			setTimeout(() => {
				copybtn = 'copy';
			}, 1000);
		}}>{copybtn}</button
	>
</div>
<div class="not-prose">
	<section aria-labelledby="pricing-two" id="pricing-two" class="bg-gray-100">
		<div class="relative items-center w-full  py-9 mx-auto md:px-12 lg:px-16 max-w-7xl">
			<div class="">
				<div class="items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
					<div class="mx-auto space-y-4 lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0">
						<div class="flex flex-col h-full bg-white rounded-3xl shadow-lg">
							<div class="px-6 py-8 sm:p-10 sm:pb-6">
								<div class="grid items-center justify-center w-full grid-cols-1 text-left">
									<div>
										<h2 class="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
											{inputTitles[0].pgtitle.length === 0 ? 'Basic' : inputTitles[0].pgtitle}
										</h2>
										<p class="mt-2 text-sm text-gray-500">
											{inputTitles[0].subtitle.length === 0
												? 'Suitable to grow steadily'
												: inputTitles[0].subtitle}
										</p>
									</div>
									<div class="mt-6">
										<p>
											<span class="text-5xl font-light tracking-tight text-black">
												{checkRupees ? '₹' : '$'}{inputTitles[0].prize.length === 0
													? '15'
													: inputTitles[0].prize}
											</span>
											<span class="text-base font-medium text-gray-500"> /mo </span>
										</p>
									</div>
								</div>
							</div>
							<div class="flex px-6 pb-8 sm:px-8">
								<a
									href="#"
									class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 {bgdesign[
										s
									].bgclass} border-2 border-{bgdesign[s]
										.border} rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
									aria-describedby="tier-company"
								>
									Get started
								</a>
							</div>
						</div>
						<div class="flex flex-col h-full bg-white rounded-3xl shadow-lg">
							<div class="px-6 py-8 sm:p-10 sm:pb-6">
								<div class="grid items-center justify-center w-full grid-cols-1 text-left">
									<div>
										<h2 class="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
											{inputTitles[1].pgtitle.length === 0 ? 'Standard' : inputTitles[1].pgtitle}
										</h2>
										<p class="mt-2 text-sm text-gray-500">
											{inputTitles[1].subtitle.length === 0
												? 'Suitable to grow steadily.'
												: inputTitles[1].subtitle}
										</p>
									</div>
									<div class="mt-6">
										<p>
											<span class="text-5xl font-light tracking-tight text-black">
												{checkRupees ? '₹' : '$'}
												{inputTitles[1].prize.length === 0 ? '25' : inputTitles[1].prize}
											</span>
											<span class="text-base font-medium text-gray-500"> /mo </span>
										</p>
									</div>
								</div>
							</div>
							<div class="flex px-6 pb-8 sm:px-8">
								<a
									href="#"
									class="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 {bgdesign[
										s
									].bgclass} border-2 border-{bgdesign[s]
										.border} rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
									aria-describedby="tier-company"
								>
									Get started
								</a>
							</div>
						</div>
						<div class="flex flex-col h-full {bgdesign[s].bgclass} rounded-3xl">
							<div class="px-6 py-8 sm:p-10 sm:pb-6">
								<div class="grid items-center justify-center w-full grid-cols-1 text-left">
									<div>
										<h2 class="text-lg font-medium tracking-tighter text-white lg:text-3xl">
											{inputTitles[2].pgtitle.length === 0 ? 'Premium' : inputTitles[2].pgtitle}
										</h2>
										<p class="mt-2 text-sm text-gray-100">
											{inputTitles[2].subtitle.length === 0
												? 'Suitable to grow steadily.'
												: inputTitles[2].subtitle}
										</p>
									</div>
									<div class="mt-6">
										<p>
											<span class="text-5xl font-light tracking-tight text-white">
												{checkRupees ? '₹' : '$'}
												{inputTitles[2].prize.length === 0 ? '35' : inputTitles[2].prize}
											</span>
											<span class="text-base font-medium text-white"> /mo </span>
										</p>
									</div>
								</div>
							</div>
							<div class="flex px-6 pb-8 sm:px-8">
								<a
									href="#"
									class="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white"
									aria-describedby="tier-starter"
								>
									Get started
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
