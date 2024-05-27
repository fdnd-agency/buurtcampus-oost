<script>
	export let heroInfo;
</script>

<header>
	<div class="overlay"></div>
	<h1>{heroInfo.heading1}</h1>
	<img src={heroInfo.image.url} alt="stekjes" />
</header>

<!-- <section>
	<p>{heroInfo.description}</p>
</section> -->

<style>
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 40vh;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0.1) 100%);
	}
	h1 {
		position: absolute;
		color: var(--text-color-white);
		top: 15%;
		left: 20%;
		font-size: 4.5rem;
	}
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
	p {
		position: absolute;
		top: 35%;
		left: 10%;
		padding: 2em;
		width: 80vw;
		background-color: var(--main-color-beige);
		color: var(--main-color-brown);
		font-weight: 900;
		border-radius: 17px;
	}
	h2 {
		margin: 13em 0 2em 0;
		padding: 0 3em;
		font-size: 1em;
		color: var(--main-color-brown);
	}
	p::before {
		content: url('/assets/Circle-Orange.svg');
		display: inline-flex;
		padding: 1em 1em 0 1em;
	}

	@media (min-width: 48rem) {
		h1 {
			top: 15%;
			left: 38%;
		}
		h2 {
			padding: 0 6em;
		}
	}

	@media (min-width: 64rem) {
		.overlay,
		img {
			width: 100%;
			height: 50vh;
		}
		h1 {
			top: 20%;
			left: 45%;
		}
		p {
			position: absolute;
			top: 45%;
			left: 28%;
			margin: auto;
			padding: 2em;
			width: 45vw;
		}
		h2 {
			margin: 5em 0 0 0;
			padding: 0 4em;
			font-size: 2em;
		}
	}
</style>
