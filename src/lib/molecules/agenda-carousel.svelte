<script>
	export let data;
	const agenda = data.agendas[0];
</script>

<section>
	<ul class="cards">
		{#each data.agendas as agenda}
			<li class="card">
				<picture>
					<img src={data.agendas[0].cardImage.url} alt="workshop" width="100" />
				</picture>

				<div>
					<h2>{agenda.event}</h2>
					<time>{agenda.date}</time>
					<address>{agenda.address}</address>
					<p>{agenda.price}</p>
				</div>
			</li>
		{/each}
	</ul>

	<!-- <ul class="caroussel-buttons">
		<li>
			<button type="button"><img src="./assets/arrow-prev.svg" alt="arrow-prev" /></button>
		</li>

		<li>
			<button type="button"><img src="./assets/arrow-next.svg" alt="arrow-next" srcset="" /></button
			>
		</li>
	</ul> -->
</section>

<style>
	section {
		z-index: 3;
		width: 80vw;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
	}

	.cards {
		display: flex;
		list-style-type: none;
	}

	.card {
		scroll-snap-align: start;
		padding-right: 1rem;
	}

	img {
		width: 16em;
		border-radius: 0.5em;
	}

	img:nth-of-type(2) {
		width: 2em;
		margin-bottom: 0.5em;
		margin-top: 0.2em;
	}

	/* button {
		display: none;
	} */

	/* .caroussel-buttons {
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
	}   */

	/* MEDIA QUERY DESKTOP = 1500px */
</style>
