<script>
	import { AgendaCard } from '$lib/index.js';

	export let data;
	const agenda = data.agendas[0];
	console.log(agenda.address);
</script>

<section>
	<div class="cards">
		{#each data.agendas as agenda (agenda.id)}
			<div class="card">
				<AgendaCard
					cardEvent={agenda.event}
					cardDate={agenda.date}
					cardAddress={agenda.address}
					cardPrice={agenda.price}
					cardImage={agenda.cardImage.url}
				/>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		flex-direction: column;
		overflow-x: auto;
		/* scrollbar-width: none;
		-webkit-scrollbar: none; */
		scroll-snap-type: x mandatory;
		z-index: 3;
		width: 80vw;
	}

	.cards {
		display: flex;
	}

	.card {
		scroll-snap-align: start;
		padding-right: 1rem;
	}

	.card:not(:first-of-type) {
		padding-left: 1rem;
	}

	/* MEDIA QUERY DESKTOP = 1024px */
	@media (min-width: 64rem) {
		section {
			width: 80vw;
		}
	}
</style>
