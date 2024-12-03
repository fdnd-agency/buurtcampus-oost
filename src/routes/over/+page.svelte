<script>
	export let data;
	import OtherRoundDot from '$lib/atoms/icons/ other-round-dot.svelte';
	import { HeroHeaders, IntroHeaders, Logoround } from '$lib/index.js';
</script>

<HeroHeaders heroInfo={data.heroHeaders[6]} />

<main>
	<section>
		<div>
			<OtherRoundDot svgFill="var(--main-color-orange)" />
			<h2>{data.abouts[0].title}</h2>
		</div>

		<Logoround />
		<p>{data.abouts[0].description}</p>
		<p>{data.abouts[0].description2}</p>
		<p>{data.abouts[0].description3}</p>
	</section>
</main>

<style>
	main {
		margin-bottom: 2rem;
		background-color: var(--main-color-beige);
	}

	section {
		padding: 2em;
	}

	section > div {
		width: 100%;
		display: flex;
		margin-left: -0.7em;
	}

	h2 {
		font-size: 1.7em;
		margin-top: 0.3em;
		line-height: 1.1em;
		color: var(--main-color-green);
		font-family: var(--header-font);
	}

	p {
		margin-top: 1em;
		line-height: 1.6em;
		font-family: 'Poppins-Regular';
	}
</style>
