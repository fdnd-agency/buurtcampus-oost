<script>
    export let data;
    import { HeroHeaders, OverViewPages } from '$lib/index.js';
    console.log(data.overviewPages[1]);

</script>

<HeroHeaders 
    heroInfo="{data.heroHeaders[0]}"
/>

<OverViewPages viewPageData= "{data.overviewPages[0]}"/>
