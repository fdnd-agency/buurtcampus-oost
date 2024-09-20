<script>
	import { AgendaCard } from '$lib/index.js';

	export let data;
	const agenda = data.agendas[0];
</script>

<section>
	<!-- <ul class="cards">
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
	</ul> -->

	<ul class="caroussel-buttons">
		<li>
			<button type="button"><img src="./assets/arrow-prev.svg" alt="arrow-prev" /></button>
		</li>

		<li>
			<button type="button"><img src="./assets/arrow-next.svg" alt="arrow-next" srcset="" /></button
			>
		</li>
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

	.caroussel-buttons {
		display: flex;
		justify-content: space-between;
		list-style: none;
	}

	button {
		height: 40px;
		width: 40px;
		border: none;
		cursor: pointer;
		padding: 0.3em;
		margin-bottom: 1em;
		border-radius: 50%;
		background-color: var(--main-color-brown);
	}

	button:hover {
		background: var(--main-color-green);
	}

	img {
		width: 2em;
		margin-bottom: 0.5em;
		margin-top: 0.2em;
	}

	/* .cards {
		display: flex;
		list-style-type: none;
	}

	.card {
		scroll-snap-align: start;
		padding-right: 1rem;
	}

	.card:not(:first-of-type) {
		padding-left: 1rem;
	} */

	/* MEDIA QUERY DESKTOP = 1500px */
	/* @media (min-width: 93.75rem) {
		section {
			width: 70vw;
		}
	} */
</style>
