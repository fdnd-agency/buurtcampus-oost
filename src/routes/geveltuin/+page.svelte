<script>
    export let data;
	import HeroHeaders from '$lib/molecules/hero-headers.svelte';

</script>

<HeroHeaders 
    heroInfo="{data.heroHeaders[2]}"
/>
