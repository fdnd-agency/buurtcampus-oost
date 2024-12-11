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
			<!-- <h2>
				<strong class="first-four">{data.abouts[0].title.slice(0, 4)}</strong>
				<strong>{data.abouts[0].title.slice(4)}</strong>
			</h2> -->

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
		width: 100%;
		margin-bottom: 2rem;
		background-color: var(--main-color-beige);
	}

	section {
		padding: 2em;
	}

	section > div {
		width: 100%;
		display: flex;
		margin-left: -0.5em;
	}

	h2 {
		font-size: 1.7em;
		margin-top: 0.3em;
		line-height: 1.1em;
		color: var(--card-color-green);
		font-family: var(--header-font);
	}

	/* .first-four {
		color: var(--main-color-brown);
		margin-right: 0.1em;
	} */

	p {
		margin-top: 1em;
		line-height: 1.6em;
		font-family: 'Poppins-Regular';
	}

	@media (min-width: 75em) {
		main {
			top: -1em;
			width: 80vw;
			padding: 2em;
			margin: 0 auto;
			position: relative;
			overflow-x: hidden;
			border-radius: var(--border-bigCard);
		}

		main::after {
			top: -4rem;
			width: 27rem;
			opacity: 0.5;
			right: -9rem;
			position: absolute;
			transform: rotate(-45deg);
			content: url(/assets/leaf-orange.svg);
		}

		h2,
		p {
			width: 47vw;
			display: flex;
			margin: 0 auto;
		}

		p {
			margin-top: 1.5em;
		}

		/* .first-four {
			margin-right: 0.3em;
		} */
	}

	@media (min-width: 48em) {
		h2 {
			font-size: 3.5em;
		}

		main {
			top: -1em;
			width: 85vw;
			padding: 2em;
			margin: 0 auto;
			position: relative;
			border-radius: var(--border-bigCard);
		}

		section > div {
			margin-left: -0.1em;
		}
	}

	@media (min-width: 48rem) and (max-width: 64rem) {
		/* .first-four {
			margin-right: 0em;
		} */
	}

	@media (min-width: 100rem) {
		h2 {
			font-size: 5em;
		}
	}
</style>
