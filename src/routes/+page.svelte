<script>
	export let data;
	import { Header, HeroSlider, Footer, AgendaCarousel } from '$lib/index.js';
</script>

<Header />
<HeroSlider />
<Footer />
<AgendaCarousel {data} />

<!--CSS STYLING-->
