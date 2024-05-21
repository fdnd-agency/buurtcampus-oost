<script>
	import { AgendaCard } from '$lib/index.js';

	export let data;
	const agenda = data.agendas[0];
	console.log(agenda.address);
</script>

<div>
	<section>
		<div class="cards">
			{#each data.agendas as agenda (agenda.id)}
				<div>
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
</div>

<style>
	section {
		display: flex;
		justify-content: center;
		flex-direction: column;
		overflow-x: auto;
		margin: 0 auto;
		scrollbar-width: none;
		-webkit-scrollbar: none;
		scroll-snap-type: x mandatory;
	}

	.cards {
		display: flex;
	}

	div {
		scroll-snap-align: start;
		padding: 0rem 2rem;
	}

	/* MEDIA QUERY DESKTOP = 1024px */
	@media (min-width: 64rem) {
		section {
			width: 80vw;
		}
	}
</style>
