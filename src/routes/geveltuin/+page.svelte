<script>
	export let data;
	import { HeroHeaders, Dot } from '$lib/index.js';

	const bulletPoints1 = data.geveltuins[0].bulletText1.split('.');
</script>

<HeroHeaders heroInfo={data.heroHeaders[2]} />

<section class="beige">
	<article>
		<h2>{data.geveltuins[0].title}</h2>

		<ul>
			{#each bulletPoints1 as point}
				{#if point.trim() !== ''}
					<li>{point}</li>
				{/if}
			{/each}
		</ul>
	</article>

	<!-- <picture>
		<img src={data.geveltuins[0].image.url} alt="geveltuin-roses" />
	</picture> -->
</section>

<section>
	<article>
		<h2 class="action-title">{data.facadeGardenActions[0].title}</h2>

		<p>{data.facadeGardenActions[0].description}</p>

		<ul>
			{#each bulletPoints1 as point}
				{#if point.trim() !== ''}
					<li>{point}</li>
				{/if}
			{/each}
		</ul>
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
		text-align: justify;
		font-family: var(--header-font);
		font-size: 3em;
		line-height: 1.1em;
		max-width: 7em;
		color: var(--main-color-brown);
	}

	.action-title {
		color: var(--main-color-green);
	}
</style>
