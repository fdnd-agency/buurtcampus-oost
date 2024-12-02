<script>
	export let data;
	import { HeroHeaders, IntroHeaders } from '$lib/index.js';
</script>

<HeroHeaders heroInfo={data.heroHeaders[6]} />

<main>
	<section>
		<h2>{data.abouts[0].title}</h2>
		<p>{data.abouts[0].description}</p>
	</section>
</main>
