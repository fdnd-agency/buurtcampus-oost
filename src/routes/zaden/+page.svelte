<script>
    export let data;
    import { HeroHeaders, OverViewPages } from '$lib/index.js';

</script>

<HeroHeaders 
    heroInfo="{data.heroHeaders[1]}"
/>

<OverViewPages viewPageData= "{data.overviewPages[1]}"/>
