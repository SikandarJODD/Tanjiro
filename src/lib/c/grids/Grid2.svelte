<script>
	let btnText = 'Copy Code';
	let code = `
    <div class="parent">
		<div class="div1 box">
			<img
				src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=450&dpr=1"
				class="small"
				alt=""
			/>
		</div>
		<div class="div2 box">
			<img
				src="https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&w=900&h=450&dpr=1"
				class="large"
				alt=""
			/>
		</div>
		<div class="div3 box">
			<img
				src="https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				class="large"
				alt=""
			/>
		</div>
		<div class="div4 box">
			<img src="https://i.pinimg.com/564x/54/34/93/5434930190590e20d474be9c3e011c37.jpg" alt="" />
		</div>
	</div>
    <style>
	.parent {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		grid-gap: 10px;
	}

	.div1 {
		grid-area: 1 / 1 / 3 / 2;
	}
	.div2 {
		grid-area: 1 / 2 / 3 / 4;
	}
	.div3 {
		grid-area: 3 / 1 / 5 / 3;
	}
	.div4 {
		grid-area: 3 / 3 / 5 / 4;
	}
	.box {
		/* border: 1px solid black; */
		border-radius: 20px;
		overflow: hidden;
	}
	img {
		width: 100%;
		object-fit: fit;
		height: 350px;
	}
</style>
    `;
</script>

<main class="border-2 px-10 py-5 border-slate-700 rounded-xl">
	<button class="btn btn-sm btn-outline capitalize mb-4"
    on:click={()=>{
        btnText = 'Copied!';
        setTimeout(()=>{
            btnText = 'Copy Code';
        }, 1000)
    }}
     >{btnText}</button>
	<div class="parent">
		<div class="div1 box">
			<img
				src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=450&dpr=1"
				class="small"
				alt=""
			/>
		</div>
		<div class="div2 box">
			<img
				src="https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&w=900&h=450&dpr=1"
				class="large"
				alt=""
			/>
		</div>
		<div class="div3 box">
			<img
				src="https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				class="large"
				alt=""
			/>
		</div>
		<div class="div4 box">
			<img src="https://i.pinimg.com/564x/54/34/93/5434930190590e20d474be9c3e011c37.jpg" alt="" />
		</div>
	</div>
</main>

<style>
	.parent {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		grid-gap: 10px;
	}

	.div1 {
		grid-area: 1 / 1 / 3 / 2;
	}
	.div2 {
		grid-area: 1 / 2 / 3 / 4;
	}
	.div3 {
		grid-area: 3 / 1 / 5 / 3;
	}
	.div4 {
		grid-area: 3 / 3 / 5 / 4;
	}
	.box {
		/* border: 1px solid black; */
		border-radius: 20px;
		overflow: hidden;
	}
	img {
		width: 100%;
		object-fit: fit;
		height: 350px;
	}
</style>
