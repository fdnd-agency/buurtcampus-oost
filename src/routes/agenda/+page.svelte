<script>
	import { HeroHeaders, Button } from '$lib/index.js';
	export let data;
	const agenda = data.agendas[0];
</script>

<HeroHeaders heroInfo={data.heroHeaders[3]} />

<section>
	<ul>
		{#each data.agendas as agenda (agenda.id)}
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
	</ul>

	<article>
		<p>{agenda.agendaParagraph1}</p>
		<details>
			<summary><span class="closed">Lees meer</span><span class="open">Lees minder</span></summary>
			<p>{agenda.agendaParagraph2}</p>
			<p>{agenda.agendaParagraph3}</p>
		</details>
	</article>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
	}

	li {
		border-radius: 1rem;
		width: 90vw;
		display: flex;
		flex-direction: column;
		position: relative;
		margin: 1rem 0;
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

	/* first card */
	/* first card */
	/* first card */

	li:first-of-type {
		height: 25rem;
		color: var(--text-color-white);
		justify-content: space-between;
		position: relative;
	}

	li:first-of-type::after {
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

	li:first-of-type picture {
		border-radius: 1rem;
		position: absolute;
	}

	li:first-of-type img {
		z-index: 1;
		position: relative;
	}

	li:first-of-type h2 {
		position: relative;
		z-index: 2;
		padding: 1rem 0 0 1rem;
	}

	li:first-of-type div {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}

	/* rest of the cards */
	/* rest of the cards */
	/* rest of the cards */

	li:not(:first-of-type) {
		background-color: var(--main-color-beige);
		height: 15rem;
		flex-direction: column;
		flex-wrap: wrap;
	}

	li:not(:first-of-type) picture {
		width: 40%;
		padding: 1rem;
	}

	li:not(:first-of-type) div {
		display: flex;
		flex-direction: column;
	}

	article {
		background-color: var(--main-color-beige);
		border-radius: 1rem;
		padding: 1rem;
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
	}
</style>
