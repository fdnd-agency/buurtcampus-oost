<script>
	import { HeroHeaders, Button } from '$lib/index.js';
	export let data;
</script>

<HeroHeaders heroInfo={data.heroHeaders[3]} />

<section>
	<ul>
		<li class="recent-card">
			<picture>
				<img src={data.agendas[0].cardImage.url} alt="" />
			</picture>
			<h2>{data.agendas[0].event}</h2>
			<div>
				<address>{data.agendas[0].address}</address>
				<span>{data.agendas[0].price}</span>
				<time>{data.agendas[0].date}</time>
				<Button
					buttonText="Meld je aan"
					buttonBackground=" var(--main-color-green)"
					svgFill="var(--main-color-beige)"
					buttonColor="var(--main-color-beige)"
				/>
			</div>
		</li>

		<article>
			<p>{data.agendaTexts[0].agendaParagraph1}</p>
			<details id="details">
				<summary><span class="closed">Lees meer</span><span class="open">Lees minder</span></summary
				>
				<p>{data.agendaTexts[0].agendaParagraph2}</p>
				<p>{data.agendaTexts[0].agendaParagraph3}</p>
			</details>
		</article>

		<div class="rest-cards">
			{#each data.agendas.slice(1, 5) as agenda (agenda.id)}
				<li>
					<picture>
						<img src={agenda.cardImage.url} alt="" />
					</picture>
					<h2>{agenda.event}</h2>
					<div>
						<address>{agenda.address}</address>
						<span>{agenda.price}</span>
						<time>{agenda.date}</time>
						<Button
							buttonText="Meld je aan"
							buttonBackground=" var(--main-color-green)"
							svgFill="var(--main-color-beige)"
							buttonColor="var(--main-color-beige)"
						/>
					</div>
				</li>
			{/each}
		</div>
	</ul>
</section>

<style>
	section {
		padding: 2rem;
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	li {
		border-radius: 1rem;
		width: 90vw;
		display: flex;
		flex-direction: column;
		position: relative;
		align-content: flex-start;
		overflow-x: hidden;
	}

	li picture,
	li img {
		height: 100%;
		width: 100%;
	}

	li img {
		object-fit: cover;
		border-radius: 1rem;
	}

	.recent-card {
		height: 25rem;
		color: var(--text-color-white);
		justify-content: space-between;
		position: relative;
		overflow: hidden;
	}

	.recent-card::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0.45);
		z-index: 1;
		border-radius: 1rem;
	}

	.recent-card picture {
		border-radius: 1rem;
		position: absolute;
	}

	.recent-card img {
		z-index: 1;
		position: relative;
	}

	.recent-card h2 {
		position: relative;
		z-index: 2;
		padding: 1rem 0 0 1rem;
	}

	.recent-card div {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}

	.rest-cards {
		grid-area: rest;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.rest-cards > li {
		background-color: var(--main-color-beige);
		height: 15rem;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
	}

	.rest-cards > li picture {
		width: 40%;
		padding: 1rem;
	}

	.rest-cards > li div {
		display: flex;
		flex-direction: column;
	}

	.rest-cards > li h2 {
		padding: 0 0 2rem 0;
	}

	article {
		background-color: var(--main-color-beige);
		border-radius: 1rem;
		padding: 1rem;
		width: 90vw;
	}

	article p {
		margin: 0 0 1rem 0;
	}

	details[open] summary .closed,
	details:not([open]) summary .open {
		display: none;
	}

	details[open] summary .open,
	details:not([open]) summary .closed {
		display: inline;
	}

	summary {
		color: var(--main-color-orange);
		cursor: pointer;
	}

	/* MEDIA QUERY TABLET = 768px */
	@media (min-width: 48rem) {
		ul {
			gap: 2rem;
		}

		li {
			width: 90vw;
		}
	}

	/* MEDIA QUERY TABLET = 1100px */
	@media (min-width: 68.75rem) {
		li {
			width: auto;
			margin: 0;
		}

		ul {
			display: grid;
			grid-template-columns: 2fr 2fr;
			grid-template-rows: repeat(5, 1fr);
			grid-template-areas:
				'recent rest'
				'recent rest'
				'recent rest'
				'article rest'
				'article rest';
			gap: 2rem;
			width: 100%;
			height: 100%;
		}

		.recent-card {
			grid-area: recent;
			height: 100%;
		}

		article {
			grid-area: article;
			height: 100%;
		}

		article {
			padding: 2rem 5rem;
			width: auto;
		}
	}
</style>
