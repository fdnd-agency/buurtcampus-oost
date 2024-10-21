<script>
	import { AgendaCarousel } from '$lib/index.js';
	import AgendaInfoButton from '$lib/molecules/agenda-info-button.svelte';
	export let data;
</script>

<section>
	<!-- <div> -->
		<img src="./assets/leaf-orange.svg" alt="" height="800" width="800" />
			<h2>Agenda</h2>
			<AgendaInfoButton />
		<AgendaCarousel {data}/>
</section>

<style>
	section {
		background: var(--main-color-beige);
		z-index: 2;
		max-width: 100%;
		overflow: hidden;
	}

	img {
		display: none;
		position: absolute;
		rotate: 120deg;
		left: 0;
		transform: translateY(200px) translateX(150px);
		/* z-index: 1; */
	}

	h2 {
		font-size: 3.5rem;
		padding-bottom: 0.7em;
		font-family: var(--sub-header-font);
		color: var(--main-color-brown);
		align-self: baseline;
		z-index: 3;
	}

	/* MEDIA QUERY TABLET = 768px */
	@media (min-width: 48rem) {
		section {
			padding: 4rem 0 4rem 7.5rem;
		}

		h2 {
			font-size: 4.5rem;
		}
		img {
			display: block;
		}
	}

	/* MEDIA QUERY DESKTOP = 1500px */
	@media (min-width: 93.75rem) {
		section {
			/* padding: 4rem 15em; */
		}
	}
</style>
