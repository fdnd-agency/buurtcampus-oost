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

	article > div {
		display: flex;
		gap: 0.5em;
		width: 100%;
		margin-left: -2em;
	}

	p,
	ul {
		margin-top: 3em;
		margin-bottom: 2em;
		font-family: 'Poppins-Regular';
	}

	ul {
		list-style-image: url('/assets/Circle-Orange.svg');
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
		color: var(--main-color-green);
	}

	.action-title {
		color: var(--main-color-green);
	}

	img {
		width: 19em;
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
			width: 25vw;
		}

		ul {
			margin-right: 4em;
			padding-left: 6em;
		}

		.action-ul {
			padding: 1em;
		}

		article > div{
			margin-left: 3em;
		}
	}

	@media (min-width: 48rem) and (max-width: 64rem) {
		article > div {
			margin-left: -3em;
		}
	}

	@media (min-width: 100rem) {
		h2 {
			font-size: 6em;
			margin-top: 1em;
			width: min-content;
		}

		ul,
		p {
			font-size: 20px;
			margin-left: 0.5em;
		}

		article > div {
			margin-left: 6em;
		}
	}
</style>
