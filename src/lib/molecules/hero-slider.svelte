<script>
	export let data;

	// import { HeroSlide } from '$lib/index.js';
	import { onDestroy, onMount } from 'svelte';

	// @ts-ignore
	let intervalId;

	onMount(() => {
		const carrouselContainer = document.querySelector('.hero-slider');
		const carrousel = document.querySelector('.hero-img-list');

		const interval = 8000;

		intervalId = setInterval(() => {
			// @ts-ignore
			const currentScroll = carrousel.scrollLeft;
			// @ts-ignore
			const itemWidth = carrouselContainer.clientWidth;
			// @ts-ignore
			const totalWidth = carrousel.scrollWidth;

			const nextScroll = (currentScroll + itemWidth) % totalWidth;

			// @ts-ignore
			carrousel.scrollTo({
				left: nextScroll,
				behavior: 'smooth'
			});
		}, interval);
	});

	onDestroy(() => {
		// @ts-ignore
		clearInterval(intervalId);
	});

	onDestroy(() => {
		// @ts-ignore
		clearInterval(intervalId);
	});
</script>

<section>
	<section class="hero-slider">
		<div class="overlay"></div>

		<header>
			<h1>Samen <span>Groener</span> Leven</h1>
			<h2>Inspireer & Deel je Groene Passie!</h2>
		</header>

		<ul class="hero-img-list">
			{#each data.herosSlider as hero}
				<li>
					<picture>
						<img src={hero.sliderPicture.url} alt={hero.sliderPicture.altText} />
					</picture>
				</li>
			{/each}
		</ul>
	</section>
</section>

<style>
	.hero-slider {
		background-color: var(--main-color-green);
		width: 100%;
		height: 85vh;
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 85vh;
		background: var(--image-gradient);
	}
	header {
		position: absolute;
		height: 85vh;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: flex-start;
		padding: 0 1em;
	}
	h1 {
		font-family: var(--header-font);
		font-size: clamp(4em, 15vw, 5em);
		color: var(--text-color-white);
		font-weight: 900;
		line-height: 1.1em;
		width: 60%;
	}
	h2 {
		font-size: 1.6rem;
		color: var(--text-color-white);
		font-weight: 900;
		line-height: 1.1em;
		padding: 0.5em 0;
		margin: 0;
	}
	.hero-img-list img {
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}
	.hero-slider ul {
		display: flex;
		overflow-x: auto;
		height: 85vh;
		scroll-snap-type: x mandatory;
		scrollbar-width: none;
	}
	.hero-slider ul::-webkit-scrollbar {
		display: none;
	}
	.hero-slider li {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 100%;
		height: 75vh;
		scroll-snap-align: start;
	}

	/* MEDIA QUERY MOBILE = 400px */
	@media (min-width: 25rem) {
		header {
			padding: 0 2em;
		}
	}

	/* MEDIA QUERY TABLET = 768px */
	@media (min-width: 48rem) {
		header {
			width: 100%;
			align-items: center;
		}
		h1 {
			font-size: clamp(5.8em, 12vw, 7em);
		}
		h1,
		h2 {
			width: 100%;
			text-align: center;
		}
	}

	/* MEDIA QUERY DESKTOP = 1700px */
	@media (min-width: 106.25rem) {
		h1 {
			font-size: clamp(5.8em, 12vw, 10em);
		}
	}
</style>
