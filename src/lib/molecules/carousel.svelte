<script>
	import { AgendaCard } from '$lib/index.js';

	export let data;
	const agenda = data.agendas[0];
</script>


<section>
	<ul class="cards">
		{#each data.agendas as agenda}
			<li class="card">
				<AgendaCard
					cardDate={agenda.date}
					cardAddress={agenda.address}
					cardPrice={agenda.price}
					cardImage={agenda.cardImage.url}
				/>
			</li>
		{/each}
	</ul>
</section>



<style>
	section {
		display: flex;
		justify-content: center;
		flex-direction: column;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		z-index: 3;
		width: 80vw;
	}

	.cards {
		display: flex;
		list-style-type: none;
	}

	.card {
		scroll-snap-align: start;
		padding-right: 1rem;
	}

	.card:not(:first-of-type) {
		padding-left: 1rem;
	}

	/* MEDIA QUERY DESKTOP = 1500px */
	@media (min-width: 93.75rem) {
		section {
			width: 70vw;
		}
	}
</style>
