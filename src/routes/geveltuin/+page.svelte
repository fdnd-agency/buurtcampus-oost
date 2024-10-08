<script>
	export let data;
	import { GeveltuinButton } from '$lib/index.js';
	import { HeroHeaders, Dot } from '$lib/index.js';

	const bulletPoints1 = data.geveltuins[0].bulletText1.split('.');
</script>

<HeroHeaders heroInfo={data.heroHeaders[2]} />

<section class="beige">
	<article>
		<div>
			<Dot svgFill="var(--main-color-orange)" />
			<h2>{data.geveltuins[0].title}</h2>
		</div>

		<ul>
			{#each bulletPoints1 as point}
				{#if point.trim() !== ''}
					<li>{point}</li>
				{/if}
			{/each}
		</ul>
	</article>

	<picture>
		<img src={data.geveltuins[0].image.url} alt="geveltuin-roses" />
	</picture>
</section>

<section>
	<article>
		<h2 class="action-title">{data.facadeGardenActions[0].title}</h2>

		<p>{data.facadeGardenActions[0].description}</p>

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
			buttonText="Meld je aan"
			svgFill="svg-beige"
		/>
	</article>
</section>

<style>
	section {
		padding: 3em;
	}

	.beige {
		background-color: var(--main-color-beige);
	}

	p,
	ul {
		margin-top: 3em;
		margin-bottom: 2em;
		font-family: 'Poppins-Regular';
	}

	ul {
		list-style-type: disc;
		padding-left: 20px;
	}

	li {
		margin-bottom: 1em;
	}

	h2 {
		font-family: var(--header-font);
		font-size: 3em;
		line-height: 1.1em;
		color: var(--main-color-green);
	}

	.action-title {
		color: var(--main-color-green);
	}

	@media (min-width: 64rem) {
		h2 {
			font-size: 4em;
		}

		section {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 0 auto;
			overflow-x: hidden;
			width: 85vw;
			border-radius: var(--border-bigCard);
		}

		article > div {
			display: flex;
			gap: 0.5em;
			width: 100%;
		}

		.beige {
			top: -1em;
			position: relative;
		}

		.beige::after {
			content: url(/assets/leaf-orange.svg);
			width: 25em;
			height: 25em;
			opacity: 0.5;
			position: absolute;
			right: -3em;
			top: -3em;
			transform: rotate(-45deg);
		}

		img {
			margin-top: 12em;
			z-index: 3;
			width: 25vw;
		}

		ul {
			margin-right: 4em;
			padding-left: 6em;
			list-style-image: url('/assets/Ellipse.png');
		}

		.action-ul {
			padding: 1em;
		}
	}
</style>
