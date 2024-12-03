<script>
	import { AgendaCarousel } from '$lib/index.js';
	import AgendaInfoButton from '$lib/molecules/agenda-info-button.svelte';
	export let data;
</script>

<section>
	<img src="./assets/leaf-orange.svg" alt="" height="800" width="800" />
	<h2>Agenda</h2>
	<AgendaInfoButton />
	<AgendaCarousel {data} />
</section>

<style>
	section {
		background: var(--main-color-beige);
		z-index: 2;
		max-width: 100%;
		overflow: hidden;
		padding: 4rem 0 4rem 1rem;
		position: relative;
	}

	section::after {
        content: "";
        position: absolute;
        inset: 0;
        background-image: 
            url('/assets/crack1.png'),
            url('/assets/crack2.png'),
			url('/assets/crack2.png'),
            url('/assets/crack1.png');
        background-position: 
            top left,
            bottom left,
			top right,
            bottom right; 
        background-size: 
            40%, 
			40%,
            20%,
            50%;
        background-repeat: no-repeat;
        z-index: 1000;

        @supports (animation-timeline: scroll()) {
            animation: opacity linear;
            animation-timeline: scroll(root y);
	    }
    }

	img {
		display: none;
		position: absolute;
		rotate: 120deg;
		left: 0;
		transform: translateY(200px) translateX(150px);
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
		/* section {
			padding: 4rem 15em;
		} */
	}
</style>
