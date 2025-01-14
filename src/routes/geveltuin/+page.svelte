<script>
	export let data;
	import { GeveltuinButton } from '$lib/index.js';
	import { HeroHeaders, IntroHeaders } from '$lib/index.js';

	const bulletPoints1 = data.facadeGardenActions[0].bulletText1.split('.');
</script>

<HeroHeaders heroInfo={data.heroHeaders[2]} />
<IntroHeaders heroInfo={data.heroHeaders[2]} />

<section class="beige">
	<article>
		<h2 class="action-title">{data.facadeGardenActions[0].title}</h2>

		<p class="intro-p">{data.facadeGardenActions[0].description}</p>

		<ul class="action-ul">
			{#each bulletPoints1 as point}
				{#if point.trim() !== ''}
					<li>{point}</li>
				{/if}
			{/each}
		</ul>

		<GeveltuinButton
			btnClass="btn-green"
			href="/contact"
			buttonText="Aanmelden"
			svgFill="svg-beige"
		/>
	</article>

	<picture>
		<img src={data.facadeGardenActions[0].image.url} alt="" />
	</picture>
</section>

<style>
	/* mobile styling */
	section {
		padding: 3em;
	}

	.beige {
		background-color: var(--main-color-beige);
		margin-top: 5rem;
		margin-bottom: 1rem;
	}

	p,
	ul {
		margin-top: 3em;
		margin-bottom: 2em;
		font-family: 'Poppins-Regular';
	}

	ul {
		list-style-image: url('/assets/circle-green.svg');
		padding-left: 0;
	}

	li {
		margin-bottom: 1em;
		padding-left: 0.5em;
	}

	h2 {
		font-family: var(--header-font);
		font-size: 2em;
		line-height: 1.1em;
		color: var(--card-color-green);
	}

	.action-title {
		color: var(--card-color-green);
	}

	img {
		border-radius: 1rem;
		width: 16em;
		margin-top: 2rem;
	}

	@media (min-width: 64rem) {
		h2 {
			font-size: 4em;
			margin-left: 1.4rem;
		}

		.intro-p{
			width: 38vw;
			margin-left: 1.4rem;
		}

		section {
			display: flex;
			align-items: center;
			margin: 0 auto;
			overflow-x: hidden;
			width: 85vw;
			border-radius: var(--border-bigCard);
		}

		.beige {
			position: relative;
		}

		.beige::after {
			content: url(/assets/leaf-orange.svg);
			width: 25em;
			height: 25em;
			opacity: 0.5;
			position: absolute;
			right: -6em;
			top: -3em;
			transform: rotate(-45deg);
		}

		img {
			margin-top: 12em;
			width: 30vw;
		}

		ul {
			margin-right: 4em;
			padding-left: 6em;
		}

		.action-ul {
			padding: 1em;
		}
	}

	@media (min-width: 48rem) and (max-width: 64rem) {
	}

	@media (min-width: 100rem) {
		h2 {
			font-size: 5em;
			margin-top: 1em;
		}

		h2, .intro-p{
			margin-left: 2.8rem;
		}

		ul,
		p {
			font-size: 1.5em;
			margin-left: 0.5em;
			width: 40vw;
		}

		img {
			width: 30vw;
		}
	}
</style>
