<script>
    export let data;
    import { HeroHeaders, OverViewPages } from '$lib/index.js';
    // console.log(data.overviewPages[0].product.fotos.url);

</script>

<HeroHeaders 
    heroInfo="{data.heroHeaders[0]}"
/>

<OverViewPages 
  viewPageData="{data.overviewPages[0]}" 
  
  />
