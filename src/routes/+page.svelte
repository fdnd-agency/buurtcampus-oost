<script>
	export let data;

	import { HeroSlider, SlideCards, AgendaCarousel, Agenda } from '$lib/index.js';
</script>

<HeroSlider {data} />
<SlideCards {data} />
<Agenda {data} />

<!--CSS STYLING-->
