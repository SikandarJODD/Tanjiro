<script>
	import { fade, scale, fly } from 'svelte/transition';
	import SmallCodeBox from './SmallCodeBox.svelte';
	let smCodes = [
		{
			title: 'Svelte',
			code: [
				'npm create vite@latest my-app --template svelte',
				'cd my-app',
				'npm install',
				'npm run dev -- --open'
			],
			isBorder: false
		},
		{
			title: 'SvelteKit',
			code: [
				'npm create svelte@latest my-app',
				'cd my-app',
				'npm install',
				'npm run dev -- --open'
			],
			isBorder: false
		},
		{
			title: 'Tailwind',
			code: ['npx svelte-add@latest tailwindcss'],
			isBorder: false
		},
		{
			title: 'Tailwind + Daisy UI',
			code: ['npx svelte-add@latest tailwindcss --daisyui'],
			isBorder: false
		},
		{
			title: 'Supabase',
			code: ['npx apply supabase-community/svelte-supabase'],
			isBorder: false
		},
		{
			title: 'Prisma + TypeScript',
			code: [
				'npm install typescript ts-node @types/node --save-dev',
				'npx tsc --init',
				'npm install prisma --save-dev',
				'npx prisma init --datasource-provider sqlite',
				'npx prisma migrate dev --name init',
				'npm install @prisma/client'
			],
			isBorder: false
		},
		{
			title: 'Existing : Prisma + TypeScript',
			code: [
				'npm install prisma --save-dev',
				'npx prisma',
				'npx prisma init --datasource-provider sqlite',
				'npx prisma migrate dev --name init',
				'npm install @prisma/client',
				'npx prisma generate'
			],
			isBorder: false
		}
	];
</script>

<main>
	{#each smCodes as item}
		<div class="my-5">
			<div class="flex align-middle items-center mb-4">
				<h2>{item.title}</h2>
				<button
					class="btn btn-sm capitalize btn-outline mx-3"
					on:click={() => {
						if (item.isBorder) {
							item.isBorder = false;
						} else {
							item.isBorder = true;
						}
					}}>Seperate</button
				>
			</div>
			{#if item.isBorder === false}
				<!-- content here -->
				<div in:fly={{ duration: 300, x: 100, delay: 100 }}>
					<SmallCodeBox copiedText={item.code.map((n) => n).join('\t \n')} isBorder={item.isBorder}>
						{#each item.code as code}
							<div>
								<code>{code}</code>
							</div>
						{/each}
					</SmallCodeBox>
				</div>
			{:else}
				<div in:fly={{ duration: 300, x: 100, delay: 100 }}>
					{#each item.code as code}
						<SmallCodeBox copiedText={code} isBorder={item.isBorder}>
							<div>
								<code>{code}</code>
							</div>
						</SmallCodeBox>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</main>

<style>
	h2 {
		margin: 0px 4px;
	}
</style>
