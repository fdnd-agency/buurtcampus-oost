<script>
	export let data;
	import HeroHeaders from '$lib/molecules/hero-headers.svelte';
	// import VectorPlant from "$lib/assets/vectorplant.svg";
	// import ImageStekje from "$lib/atoms/headers/imageStekje.svelte";
	// import StekjeDescription from "$lib/organisms/StekjeDescription.svelte";
	// import Carouselstekje from "../../lib/atoms/carousel/Carouselstekje.svelte";
</script>

<!-- <ImageStekje {data} />
  <StekjeDescription {data} /> -->
  <HeroHeaders 
  heroInfo="{data.heroHeaders[0]}"
/>

