<script>
	export let data;
	import { HeroHeaders, IntroHeaders } from '$lib/index.js';
</script>

<HeroHeaders heroInfo={data.heroHeaders[7]} />
<IntroHeaders heroInfo={data.heroHeaders[7]} />

<section>
	<article>
		<p>{data.groenebiebs[0].description}</p>
	</article>
</section>

<style>
	section {
		gap: 2em;
		display: grid;
		margin-top: 1em;
		margin-bottom: 3em;
		grid-template-columns: 1fr;
	}

	article {
		width: 100%;
		padding: 2em;
		background-color: var(--main-color-beige);
	}

	p {
		margin-top: 1em;
		line-height: 1.6em;
	}

	@media (min-width: 48rem) {
		section {
			display: flex;
			padding: 2em;
			align-items: top;
			justify-content: center;
		}

		article {
			width: 50vw;
			border-radius: var(--border-card);
		}
	}

	/* DESKTOP STYLING */
	@media (min-width: 74rem) {
		section {
			display: flex;
			padding: 2em;
			margin: 0 auto;
		}

		article {
			padding: 2em;
			width: 40vw;
			height: auto;
			margin-top: 2em;
			border-radius: var(--border-card);
			background-color: var(--main-color-beige);
		}
	}

	/* BIG DESKTOP SCREEN STYLING */
	@media (min-width: 100rem) {
		p {
			font-size: 1.5em;
		}
	}
</style>
