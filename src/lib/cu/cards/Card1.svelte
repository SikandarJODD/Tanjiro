<script>
	let title = '';
	let mainName = '';
	let content = '';
	let imgLink = '';

	$: {
		if (content.length > 160) {
			content = content.slice(0, 160);
		}
	}
	// https://i.pravatar.cc/100
</script>

<div class="box flex justify-center not-prose">
	<div
		class="smallbox md:w-[50%] border-2 border-slate-900 flex justify-start m-5 rounded-lg p-5 flex-col"
	>
		<div class="flex">
			<div class="flex align-middle items-center my-1">
				<label for="name" class="text-md font-bold md:mr-3"> Title </label>
				<input
					type="text"
					placeholder="Type here"
					class="input input-success input-bordered input-md w-4/5 font-bold"
					bind:value={title}
				/>
			</div>
			<div class="flex align-middle items-center my-1">
				<label for="name" class="text-md font-bold md:mr-3"> Name </label>
				<input
					type="text"
					placeholder="Type here"
					class="input input-success input-bordered input-md font-bold w-4/5"
					bind:value={mainName}
				/>
			</div>
		</div>
		<div class="flex align-middle items-center my-2">
			<label for="name" class="text-md font-bold md:mr-3"> Content : </label>
			<textarea
				class="textarea textarea-accent font-semibold textarea-lg w-full max-w-xs text-[1rem] py-1 px-2"
				placeholder="Bio"
				bind:value={content}
			/>
		</div>
		<div class="flex align-middle items-center my-1">
			<label for="name" class="text-md font-bold md:mr-3"> Img Link : </label>
			<input
				type="text"
				placeholder="Type here"
				class="input input-success input-bordered input-md w-4/5 font-bold"
				bind:value={imgLink}
			/>
		</div>
	</div>
	<div class="smallbox m-5">
		<div
			class="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 border"
		>
			<div class="flex justify-center -mt-16 md:justify-end">
				<img
					class="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
					alt="Testimonial avatar"
					src={imgLink.length === 0
						? 'https://i.pinimg.com/564x/72/16/65/721665044fd39130fbea0ff26001833f.jpg'
						: imgLink}
				/>
			</div>

			<h2 class="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
				{title.length === 0 ? 'Frontend Developer' : title}
			</h2>

			<p class="mt-2 text-sm text-gray-600 dark:text-gray-200">
				{content.length === 0
					? 'I Love Building Websites, reading books and being alone.'
					: content}
			</p>

			<div class="flex justify-end mt-4">
				<a
					href="#"
					class="text-lg font-medium text-blue-600 dark:text-blue-300"
					tabindex="0"
					role="link">{mainName.length === 0 ? 'Aditya Sathe' : mainName}</a
				>
			</div>
		</div>
	</div>
</div>
