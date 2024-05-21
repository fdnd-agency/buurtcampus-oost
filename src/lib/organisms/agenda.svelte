<script>
	import { AgendaCarousel } from '$lib/index.js';
	export let data;
</script>

<section>
	<div>
		<img src="./assets/leaf-orange.svg" alt="" height="800" width="800" />
		<h1>Agenda</h1>
		<AgendaCarousel {data} />
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		padding: 4rem;
		background: var(--main-color-beige);
		z-index: 2;
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: baseline;
	}

	img {
		display: none;
		position: absolute;
		rotate: 120deg;
		left: 0;
		transform: translateY(200px) translateX(150px);
		z-index: 1;
	}

	h1 {
		font-size: 3.5rem;
		padding: 0 0 5rem 0;
		font-family: var(--sub-header-font);
		color: var(--main-color-brown);
		align-self: baseline;
		z-index: 3;
	}

	/* MEDIA QUERY TABLET = 768px */
	@media (min-width: 48rem) {
		img {
			display: block;
		}
	}
</style>
