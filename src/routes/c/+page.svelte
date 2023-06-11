<script>
</script>

<div
	class="porse md:prose-h2:text-3xl prose-h2:m-0 prose-rose prose-p:text-gray-700 prose-li:text-gray-700"
>
	<h1>Svelte Components Usage :</h1>
	<h2>Install SvelteKit</h2>
	<div class="mockup-code hidden md:block w-[60%] mx-auto mt-4">
		<pre class="text-green-400"><code>npm create svelte@latest folder</code></pre>
		<pre class="text-green-400"><code>cd folder</code></pre>
		<pre class="text-green-400"><code>npm i</code></pre>
		<pre class="text-green-400"><code>npx svelte-add@latest tailwindcss</code></pre>
		<pre class="text-green-400"><code>npm i -D daisyui</code></pre>
		<pre class="text-warning"><code
				>module.exports ={`{
        plugins: [require("daisyui")],
  }`}</code
			></pre>
	</div>
	<ol class="md:hidden bg-gray-200 py-3 rounded-md border-2 border-gray-800">
		<li>npm create svelte@latest folder</li>
		<li>cd folder</li>
		<li>npm i</li>
		<li>npx svelte-add@latest tailwindcss</li>
		<li>npx i -D daisyui</li>
	</ol>
	<h3>Now You Can use the Componenets</h3>
	<p>Checkout <a href="/cu">Custom Components</a></p>
</div>

<style>
	pre {
		margin: 0;
		padding: 4px 10px;
	}
</style>
