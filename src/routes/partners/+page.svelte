<script>
	export let data;
	import { HeroHeaders, IntroHeaders } from '$lib/index.js';
</script>

<HeroHeaders heroInfo={data.heroHeaders[4]} />
<IntroHeaders heroInfo={data.heroHeaders[4]} />

<main>
	{#each data.partners as partner}
		<article>
			<h2>{partner.title}</h2>
			<h3>{partner.subhead}</h3>
			<p class="desktop-only">{partner.description}</p>

			<details class="mobile-only">
				<summary><span>Lees over de samenwerking</span></summary>
				<p>{partner.description}</p>
			</details>
		</article>
	{/each}
</main>

<style>
	main {
		padding: 2em;
		margin-bottom: 3em;
		display: grid;
		grid-template-columns: 1fr;
		gap: 2em;
		margin: 0 auto;
	}

	article {
		padding: 3em;
		width: 100%;
		padding: 3em;
		margin: 0 auto;
		border-radius: var(--border-card);
		background-color: var(--main-color-beige);
	}

	article:first-child {
		margin-top: 2em;
	}

	h2 {
		font-size: 2em;
	}

	h3 {
		font-size: 1.1em;
	}

	h2,
	h3 {
		color: var(--card-color-green);
	}

	p {
		line-height: 1.6em;
	}

	span {
		font-size: medium;
	}

	.mobile-only {
		display: block;
	}

	.desktop-only {
		display: none;
	}

	@media (min-width: 74rem) {
		main {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			justify-content: center;
			align-items: top;
			gap: 2em;
		}

		article {
			margin-top: 2em;
			padding: 3em;
			height: auto;
			border-radius: var(--border-card);
			background-color: var(--main-color-beige);
		}

		article:first-child {
			margin-top: 2em;
		}

		h2 {
			font-size: 3em;
		}

		h3 {
			font-size: 1.5em;
		}

		.mobile-only {
			display: none;
		}

		.desktop-only {
			display: block;
		}
	}
</style>
