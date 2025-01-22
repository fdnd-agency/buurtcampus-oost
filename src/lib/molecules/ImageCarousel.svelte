<script>
	export let heroInfo;
	let images = heroInfo.carouselImage[0].images;
</script>

<section class="carousel-container">
	<div class="scroll-container">
		{#if images.length > 0}
			{#each images as image}
				<div class="content">
					<img src={image.url} alt="" />
				</div>
			{/each}
		{:else}
			<p>Geen afbeeldingen gevonden.</p>
		{/if}
	</div>
</section>

<style>
	.carousel-container {
		margin-top: 2rem;
		overflow: hidden;
		margin-bottom: -6rem;
		container-type: inline-size;
		container-name: carousel;
	}

	.scroll-container {
		display: flex;
		gap: 1rem;
		margin: 1rem;
		overflow-x: auto;
		scrollbar-width: none;
		scroll-snap-type: x mandatory;
	}

	.scroll-container::-webkit-scrollbar {
		display: none;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.8rem;
	}

	.content {
		scroll-snap-align: start;
		padding: 0.5rem;
	}

	@container carousel (max-width: 37.5rem) {
		.content {
			min-width: 90%;
			height: 40vh;
		}
	}

	@container carousel (min-width: 37.5rem) and (max-width: 64rem) {
		.content {
			min-width: calc(20rem - 2rem);
			max-height: 30rem;
		}

		.scroll-container {
			margin: 1rem;
			margin-bottom: 2rem;
		}
	}

	@container carousel (min-width: 64rem) {
		.content {
			min-width: calc(20rem - 2rem);
			max-height: 25rem;
		}

		.scroll-container {
			margin: 5rem;
			gap: 1rem;
		}

		/* SCROLL-DRIVEN-ANIMATIONS STYLING */
		@supports (animation-timeline: view()) {
			.content {
				animation-timeline: view(inline);
				animation-name: animate-in-and-out;
			}

			@keyframes animate-in-and-out {
				entry 0% {
					opacity: 0;
					transform: translateX(0);
				}

				entry 100% {
					opacity: 1;
					transform: translateX(0);
				}

				exit 0% {
					opacity: 1;
					transform: translateX(0);
				}

				exit 100% {
					opacity: 0;
					transform: translate(-10%);
				}
			}
		}
	}

	@container carousel (min-width: 100rem) {
		.content {
			min-width: calc(25rem - 1.5rem);
			max-height: 30rem;
		}

		.scroll-container {
			margin: 4rem;
			gap: 1rem;
		}
	}
</style>
