<script>
	export let data;

	import { HeroSlider, SlideCards, AgendaCarousel } from '$lib/index.js';
</script>

<HeroSlider {data} />
<SlideCards {data} />
<AgendaCarousel {data} />

<!--CSS STYLING-->
