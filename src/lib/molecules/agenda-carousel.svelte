<script>
	import { AgendaCard } from '$lib/index.js';

	export let agendaItems = [
		{
			event: '{event}',
			date: '{date}',
			address: '{address}',
			price: '{price}',
			image: '{image}'
		}
	];

	export let data;
	const agenda = data.agendas[0];
	console.log(agenda.address);
</script>

<div>
	<section>
		<div class="cards">
			{#each agendaItems as { event, date, address, price, image }}
				<div>
					<AgendaCard
						cardEvent={agenda.event}
						cardDate={agenda.date}
						cardAddress={agenda.address}
						cardPrice={agenda.price}
						cardImage={agenda.cardImage.url}
					/>
				</div>
				<div>
					<AgendaCard
						cardEvent={event}
						cardDate={date}
						cardAddress={address}
						cardPrice={price}
						cardImage={image}
					/>
				</div>
				<div>
					<AgendaCard
						cardEvent={event}
						cardDate={date}
						cardAddress={address}
						cardPrice={price}
						cardImage={image}
					/>
				</div>
				<div>
					<AgendaCard
						cardEvent={event}
						cardDate={date}
						cardAddress={address}
						cardPrice={price}
						cardImage={image}
					/>
				</div>
				<div>
					<AgendaCard
						cardEvent={event}
						cardDate={date}
						cardAddress={address}
						cardPrice={price}
						cardImage={image}
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
