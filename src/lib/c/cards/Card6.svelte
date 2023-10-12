<script>
	import { copy } from 'svelte-copy';
	let btnText = `Copy Code`;
	let btnCode = `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
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

	<div class="card" style="width: 24rem;">
        <img src="https://unblast.com/wp-content/uploads/2020/04/Graphic-Designer-Vector-Illustration-1536x1152.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Submit</a>
        </div>
      </div>
			
</div>
