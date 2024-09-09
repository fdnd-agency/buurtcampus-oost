<script>
	import { AgendaCarousel } from '$lib/index.js';
	export let data;
</script>

<section>
	<div>
		<img src="./assets/leaf-orange.svg" alt="" height="800" width="800" />
		<h2>Agenda</h2>
		<h1>test</h1>
		<AgendaCarousel {data} />
	</div>
</section>

<style>
	section {
		display: flex;
		height: 70vh;
		justify-content: flex-start;
		padding: 3rem;
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

	h2 {
		font-size: 3.5rem;
		padding-bottom: .7em;
		font-family: var(--sub-header-font);
		color: var(--main-color-brown);
		align-self: baseline;
		z-index: 3;
	}

	/* MEDIA QUERY TABLET = 768px */
	@media (min-width: 48rem) {
		section{
			padding:  4rem 7.5rem;
		}

		h2{
            font-size: 4.5rem;
		}
		img {
			display: block;
		}
	}

	/* MEDIA QUERY DESKTOP = 1500px */
	@media (min-width: 93.75rem) {
        section{
            padding: 4rem 15em;
        }
    }
</style>
