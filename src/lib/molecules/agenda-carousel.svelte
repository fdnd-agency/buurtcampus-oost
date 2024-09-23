<script>
	export let data;
	const agenda = data.agendas[0];
</script>

<article>
	{#each data.agendas as agenda}
		<div class="card">
			<img src={agenda.cardImage.url} alt="workshop" width="100" />
			
			<!-- <h2>{agenda.event}</h2>
			<time>{agenda.date}</time>
			<address>{agenda.address}</address>
			<p>{agenda.price}</p>  -->
		</div>
	{/each}
</article>

<style>
	article {
		display: flex;
		z-index: 3;
		width: 85vw;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
	}

	.card {
		scroll-snap-align: start;
		padding-right: 1rem;
	}

	img {
		width: 25em;
		height: 15em;
		object-fit: cover;
		border-radius: 0.5em;
	}
</style>
