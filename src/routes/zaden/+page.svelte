<script>
    export let data;

    console.log(data.heroHeaders[1]);
	import HeroHeaders from '$lib/molecules/hero-headers.svelte';

</script>

<HeroHeaders 
        heroInfo="{data.heroHeaders[1]}"
   />
