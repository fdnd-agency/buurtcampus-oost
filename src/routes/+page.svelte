<script>
	export let data;

	import { HeroSlider, SlideCards, Agenda, CampusInfo } from '$lib/index.js';
</script>

<HeroSlider {data} />
<SlideCards {data} />
<CampusInfo {data} />
<Agenda {data} />


<!--CSS STYLING-->
