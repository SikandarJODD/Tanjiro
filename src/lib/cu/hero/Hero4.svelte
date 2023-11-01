<script>
	import { copy } from 'svelte-copy';
	let mainTitle = '';
	let subtitle = '';
	let btnText = '';
	let btnCode = 'Copy Code';
	$: copyCode = `
    <div class="hero min-h-screen bg-base-200">
		<div class="hero-content flex-col lg:flex-row-reverse">
            <!-- svelte-ignore a11y-missing-attribute -->
			<div class="text-center lg:text-left w-3/5">
				<h1 class="text-5xl font-bold">
					${mainTitle.length === 0 ? 'Login Now!' : mainTitle}
				</h1>
				<p class="py-6">
					${
						subtitle.length === 0
							? 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.'
							: subtitle
					}
				</p>
			</div>
			<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
				<form class="card-body">
				  <div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
					  <span class="label-text">Email</span>
					</label>
					<input type="email" placeholder="email" class="input input-bordered" required />
				  </div>
				  <div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
					  <span class="label-text">Password</span>
					</label>
					<input type="password" placeholder="password" class="input input-bordered" required />
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
					  <!-- svelte-ignore a11y-invalid-attribute -->
					  <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
					</label>
				  </div>
				  <div class="form-control mt-6">
					<button class="btn btn-primary">
						${btnText.length === 0 ? 'Login' : btnText}
					</button>
				  </div>
				</form>
			</div>
		</div>
	</div>
    `;
</script>

<div class="prose p-3 m-1 md:border-2 md:border-slate-600 rounded-xl max-w-full">
	<button
		class="btn btn-outline btn-sm capitalize"
		use:copy={copyCode}
		on:click={() => {
			btnCode = 'Copied';
			setTimeout(() => {
				btnCode = 'Copy Code';
			}, 1200);
		}}>{btnCode}</button
	>
	<div class="flex flex-col md:flex-row flex-wrap">
		<label for="title" class="font-bold m-1">
			Sign Up Title :
			<input
				type="text"
				placeholder="Type here"
				class="input input-bordered input-sm w-full max-w-xs input-info"
				bind:value={mainTitle}
			/>
		</label>
		<label for="title" class="font-bold m-1">
			Sign Up Subtitle :
			<input
				type="text"
				placeholder="Type here"
				class="input input-bordered input-sm w-full max-w-xs input-info"
				bind:value={subtitle}
			/>
		</label>
		<label for="title" class="font-bold m-1">
			Sign Up Button :
			<input
				type="text"
				placeholder="Type here"
				class="input input-bordered input-sm w-full max-w-xs input-info"
				bind:value={btnText}
			/>
		</label>
	</div>
</div>

<div class="not-prose">
	<div class="hero min-h-screen bg-base-200">
		<div class="hero min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 relative overflow-hidden">
			<!-- svelte-ignore a11y-missing-attribute -->
            <div class="absolute top-4 right-4">
                <button class="btn btn-primary">Sign In</button>
            </div>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left w-3/5">
                    <h1 class="text-5xl font-bold text-white">
                        {mainTitle.length === 0 ? 'Sign Up Now!' : mainTitle}
                    </h1>
                    <p class="py-6 text-white">
                        {subtitle.length === 0
                            ? 'Join our community today. Experience the ease of connecting with others.'
                            : subtitle}
                    </p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form class="card-body">
                        <div class="form-control">
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" class="input input-bordered" required />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">
                                {btnText.length === 0 ? 'Sign Up' : btnText}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
		</div>
	</div>
</div>
