<script>
    export let data;
    import { HeroHeaders, IntroHeaders } from '$lib/index.js';
</script>

<HeroHeaders 
    heroInfo="{data.heroHeaders[4]}"
/>
<IntroHeaders heroInfo="{data.heroHeaders[4]}" />
