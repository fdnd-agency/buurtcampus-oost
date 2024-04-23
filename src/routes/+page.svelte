<script>
  export let data;
  import Navigation from "$lib/organisms/Navigation.svelte";
  import Footer from "$lib/organisms/Footer.svelte";
  import Carousel from "$lib/atoms/carousel/Carousel.svelte";
  import SectionOneHome from "$lib/atoms/sections/SectionOneHome.svelte";
  import SectionTwoHome from "$lib/atoms/sections/SectionTwoHome.svelte";
  import SectionThreeHome from "$lib/atoms/sections/SectionThreeHome.svelte";
  import SectionFourHome from "$lib/atoms/sections/SectionFourHome.svelte";
  import SectionBannerHome from "$lib/atoms/sections/SectionBannerHome.svelte";
</script>

<Navigation />

<Carousel {data} />

<main>
  <SectionOneHome />
  <SectionTwoHome />
  <SectionThreeHome />
  <SectionFourHome {data} />
  <SectionBannerHome />
</main>

<Footer />

<!--CSS STYLING-->
<style>
  main {
    background-color: var(--background-color);
  }
</style>
