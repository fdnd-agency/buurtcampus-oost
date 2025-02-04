<script>
	export let data;
	import { HeroSlider, SlideCards, Agenda, HomeCampus, HomePartners } from '$lib/index.js';
	import Slidecards1 from '$lib/organisms/slidecards1.svelte';

	
</script>

	<HeroSlider {data} />
	<SlideCards {data} />
	<Slidecards1 {data} />
	<HomeCampus {data} />
	<Agenda {data} />
	<HomePartners {data} />

	