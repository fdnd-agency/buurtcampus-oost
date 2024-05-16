<script>
    export let data;
    import Menu from "$lib/organisms/menu.svelte";
    import HeroSlider from "$lib/molecules/hero-slider.svelte";
    import Footer from "$lib/organisms/footer.svelte";
</script>

<Menu />
<HeroSlider {data}/>
<Footer />

<!--CSS STYLING-->

