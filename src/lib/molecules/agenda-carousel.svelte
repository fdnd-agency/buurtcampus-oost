<script>
	import Button from '$lib/atoms/buttons/button.svelte';
	export let data;
	const agenda = data.agendas[0];
</script>

<article>
	{#each data.agendas as agenda}
		<div class="card">
			<div class="content">
				<h2>{agenda.event}</h2>
				<time>{agenda.date}</time>
				<time>{agenda.time}</time>
				<address>{agenda.address}</address>
				<p>{agenda.price}</p>
				<!-- <Button href="/agenda" buttonText="Aanmelden" btnClass="btn-beige" svgFill="svg-brown" /> -->
			</div>
			<img src={agenda.cardImage.url} alt="workshop" width="100" />
		</div>
	{/each}
</article>

<style>
	/* agenda-carousel styling */
	article {
		display: flex;
		z-index: 3;
		width: 85vw;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
	}

	.card {
		position: relative;
		scroll-snap-align: start;
		padding-right: 1rem;
		width: auto;
	}

	img {
		width: 25em;
		height: 20em;
		object-fit: cover;
		border-radius: 0.5em;
	}

	.card::before {
		content: '';
		position: absolute;
		bottom: 0;
		background-color: var(--main-color-brown);
		height: 10em;
		width: 25em;
		border-bottom-left-radius: 0.5em;
		border-bottom-right-radius: 0.5em;
	}

	.content {
		position: absolute;
		margin: 1em;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		z-index: 2;
		color: var(--main-color-beige);
	}
</style>
