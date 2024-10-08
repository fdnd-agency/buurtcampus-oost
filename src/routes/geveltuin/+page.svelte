<script>
	export let data;
	import { HeroHeaders, Dot } from '$lib/index.js';

	const bulletPoints1 = data.geveltuins[0].bulletText1.split('.');
</script>

<HeroHeaders heroInfo={data.heroHeaders[2]} />

<section>
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

	<picture>
		<img src={data.geveltuins[0].image.url} alt="geveltuin-roses" />
	</picture>
</section>

<section>
	<article>
		<h2>{data.facadeGardenActions[0].title}</h2>

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
	ul {
		list-style-type: disc; 
		padding-left: 20px; 
	}

	li {
		margin-bottom: 1em; 
	}
</style>
