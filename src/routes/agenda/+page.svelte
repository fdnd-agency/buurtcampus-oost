<script>
	import { HeroHeaders, Button } from '$lib/index.js';
	export let data;
	const agenda = data.agendas[0];

	let detailsOpen = false;
	function toggleDetails() {
		detailsOpen = !detailsOpen;
	}
</script>

<HeroHeaders heroInfo={data.heroHeaders[3]} />

<section>
	<ul>
		{#each data.agendas as agenda (agenda.id)}
			<li>
				<div>
					<img src={agenda.cardImage.url} alt="" />
				</div>
				<h2>{agenda.event}</h2>
				<address>{agenda.address}</address>
				<span>{agenda.price}</span>
				<time>{agenda.date}</time>
				<Button
					buttonText="Meld je aan"
					buttonBackground=" var(--main-color-green)"
					svgFill="var(--main-color-beige)"
					buttonColor="var(--main-color-beige)"
				/>
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
	li {
		border-radius: 1rem;
	}

	div {
		background: var(--image-gradient);
	}

	li:first-of-type {
		display: flex;
		flex-direction: column;
		height: 25rem;
		width: 90vw;
		color: var(--text-color-white);
	}

	div:first-of-type {
		position: absolute;
		z-index: -1;
		height: 25rem;
		width: 90vw;
	}

	li:first-of-type img {
		height: 100%;
		width: 100%;
		border-radius: 1rem;
		object-fit: cover;
	}

	li:not(:first-of-type) {
		display: flex;
		flex-direction: column;
		height: 10rem;
		width: 20rem;
		color: var(--text-color-white);
	}

	article {
		background-color: var(--main-color-beige);
		border-radius: 1rem;
		padding: 1rem;
	}

	article p {
		margin: 0 0 1rem 0;
	}

	details[open] summary .closed {
		display: none;
	}

	details[open] summary .open {
		display: inline;
	}

	details:not([open]) summary .closed {
		display: inline;
	}

	details:not([open]) summary .open {
		display: none;
	}

	summary {
		color: var(--main-color-orange);
	}
</style>
