<script>
	export let data;
	import { HeroHeaders, Dot } from '$lib/index.js';
</script>

<HeroHeaders heroInfo={data.heroHeaders[2]} />

<section>
	<article>
		<h2>{data.geveltuins[0].title}</h2>

		<ul>
			<li>
				{data.geveltuins[0].bulletText1}
			</li>
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
			<li>
				{data.facadeGardenActions[0].bulletText2}
			</li>
		</ul>
	</article>
</section>
