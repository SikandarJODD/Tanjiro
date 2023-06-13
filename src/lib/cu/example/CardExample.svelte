<script>
	import { onMount } from 'svelte';
	import Typed from 'typed.js';
	onMount(() => {
		const options = {
			strings: ['Welcome to Svelte Components', 'Building a SaaS Product '],
			typeSpeed: 40,
			cursorChar: '',
			loop: false,
			backSpeed: 30,
			backDelay: 1000
		};
		const typed = new Typed('.typed', options);
		const opt = {
			strings: ['Aditya', 'Vivek'],
			typeSpeed: 40,
			cursorChar: '',
			loop: false,
			backSpeed: 30,
			backDelay: 1000,
			startDelay: 6000
		};
		const type = new Typed('.typed_sub', opt);
		const typed_text = new Typed('.typed_text', {
			strings: [
				'Senior Developer, Building Web Applications using Sveltekit Supabase Prisma',
				'I Love being alone and A cup of Coffee'
			],
			typeSpeed: 40,
			cursorChar: '',
			loop: false,
			backSpeed: 30,
			backDelay: 1000,
			startDelay: 8000
		});
	});
</script>

<main class="porse">
	<div class="box flex justify-center not-prose">
		<div class="shad_ex group">
			<a
				href="/cu"
				class="group-hover:bg-gradient-to-r group-hover:from-sky-200 group-hover:to-green-200 relative block overflow-hidden rounded-lg p-4 sm:p-6 lg:p-8 border-2 border-slate-900 shad_ex"
			>
				<!-- <span
				class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
				/> -->

				<div class="sm:flex sm:justify-between sm:gap-4">
					<div>
						<h3 class="text-lg font-bold text-gray-900 sm:text-xl typed" />

						<p class="mt-1 text-xs font-medium text-gray-600">By <span class="typed_sub" /></p>
					</div>

					<div class="hidden sm:block sm:shrink-0">
						<img
							alt="Paul Clapton"
							src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
							class="h-16 w-16 rounded-lg object-cover shadow-sm transition-all ease-in-out duration-200
							group-hover:border-2 group-hover:border-slate-800"
						/>
					</div>
				</div>

				<div class="mt-4">
					<p class="max-w-[40ch] text-sm text-gray-700 typed_text" />
				</div>

				<dl class="mt-6 flex gap-4 sm:gap-6">
					<div class="flex flex-col-reverse">
						<dt class="text-sm font-medium text-gray-600">Published</dt>
						<dd class="text-xs text-gray-500">13st June, 2023</dd>
					</div>
				</dl>
			</a>
		</div>
	</div>
</main>

<style>
	.shad_ex {
		position: relative;
		background: white;
		border-radius: 10px;
		transition: all 0.5s ease;
	}

	.shad_ex::before {
		content: '';
		position: absolute;
		top: 10px;
		left: 10px;
		background: rgb(234, 255, 11);
		height: 100%;
		width: 100%;
		z-index: -1;
		border-radius: 10px;
		border: 2px solid black;
	}
</style>