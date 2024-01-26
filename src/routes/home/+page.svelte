<script>
    export let data
    import Carousel from "../../lib/atoms/carousel/Carousel.svelte";
    import SectionOneHome from "../../lib/atoms/sections/SectionOneHome.svelte";
    import SectionTwoHome from "../../lib/atoms/sections/SectionTwoHome.svelte";
    import SectionThreeHome from "../../lib/atoms/sections/SectionThreeHome.svelte";
    import SectionFourHome from "../../lib/atoms/sections/SectionFourHome.svelte";
    import SectionBannerHome from "../../lib/atoms/sections/SectionBannerHome.svelte";

</script>

<!--HTML -->

<!-- <Header data={data} /> -->
<Carousel {data} />

<main>
    <SectionOneHome/>
    <SectionTwoHome/>
    <SectionThreeHome/>
    <SectionFourHome {data}  />
    <SectionBannerHome />
</main>

<!--CSS STYLING-->
<style>

    main {
        background-color: var(--background-color);

    }

</style>
