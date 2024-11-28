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
			<p>{partner.description}</p>
		</article>
	{/each}
</main>

<style>
	main {
		padding: 2em;
		margin-bottom: 3em;
	}

	article {
		padding: 3em;
		margin-top: 2em;
		color: var(--card-color-green);
		border-radius: var(--border-card);
		background-color: var(--main-color-beige);
	}

	h2 {
		font-size: 3em;
	}

	p {
		line-height: 1.6em;
	}

	@media (min-width: 64rem) {
		main {
			gap: 1em;
			display: flex;
			margin-top: 2em;
			justify-content: center;
		}

		article {
			width: 25em;
		}
	}
</style>
