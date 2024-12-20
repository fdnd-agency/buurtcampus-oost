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
			<details class="mobile-only">
				<summary
					><span class="closed">Lees over de samenwerking</span><span class="open"></span></summary
				>
				<p>{partner.description}</p>
			</details>

			<!-- Alleen zichtbaar op desktop apparaten -->
			<p class="desktop-only">{partner.description}</p>
		</article>
	{/each}
</main>

<style>
	main {
		padding: 2em;
		margin-bottom: 3em;
		place-items: center;
	}

	article {
		padding: 3em;
		width: 22em;
		margin-top: 2em;
		border-radius: var(--border-card);
		background-color: var(--main-color-beige);
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

	@media (min-width: 64rem) {
		main {
			gap: 1em;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}

		article {
			width: 42vw;
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

	@media (min-width: 48rem) and (max-width: 63.9rem) {
		article {
			width: 42em;
		}

		.mobile-only {
			display: none;
		}

		.desktop-only {
			display: block;
		}
	}
</style>
