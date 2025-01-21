<script>
	export let heroInfo; 
	let images = heroInfo.carouselImage[0].images; 
	console.log(images) 
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
		margin-top: 5rem;
		overflow: hidden;
		container-type: inline-size; /* Maak de container klaar voor container queries */
		container-name: carousel;
	}

	.scroll-container {
		display: flex;
		gap: 2rem;
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

	/* Container Query met rem-eenheden */
	@container carousel (max-width: 37.5rem) { /* ~600px */
		.content {
			min-width: 90%;
			min-height: 12rem;
		}
	}

	@container carousel (min-width: 37.5rem) and (max-width: 64rem) { /* 37.5rem ~600px tot 64rem ~1024px */
		.content {
			min-width: calc(50% - 1rem);
			min-height: 15rem;
		}
	}

	@container carousel (min-width: 64rem) { /* >1024px */
		.content {
			min-width: calc(25% - 1.5rem);
			min-height: 18rem;
		}
	}
</style>
