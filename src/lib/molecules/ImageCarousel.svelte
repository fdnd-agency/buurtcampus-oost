<script>
	export let data;

	console.log('Data in front-end:', data);

	// Controleer of er carouselImages zijn en haal de lijst van afbeeldingen op
	let images = data.carouselImages?.[0]?.images ?? [];
</script>

<article>
	{#if images.length > 0}
		{#each images as image}
			<picture>
				<img src={image.url} alt="" />
			</picture>
		{/each}
	{:else}
		<p>Geen afbeeldingen gevonden.</p>
	{/if}
</article>

<style>
	article {
		background-color: red;
	}
</style>