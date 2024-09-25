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
		z-index: 3;
		width: 85vw;
		display: flex;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
	}

	.card {
		width: auto;
		position: relative;
		padding-right: 1rem;
		scroll-snap-align: start;
	}

	img {
		width: 25em;
		height: 18em;
		object-fit: cover;
		border-radius: 0.5em;
	}

	.card::before {
		content: '';
		bottom: 0;
		width: 25em;
		height: 10em;
		position: absolute;
		border-bottom-left-radius: 0.5em;
		border-bottom-right-radius: 0.5em;
		background-color: var(--main-color-brown);
	}

	.content {
		bottom: 0;
		margin: 1em;
		display: flex;
		position: absolute;
		flex-direction: column;
		justify-content: center;
		color: var(--main-color-beige);
	}
</style>
