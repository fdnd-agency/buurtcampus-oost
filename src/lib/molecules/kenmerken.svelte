<script>
    // import KenmerkenDropdown from '../atoms/kenmerkenDropdown.svelte';
    
    import { HarryWeather, Kenmerken, KenmerkenDropdown } from '$lib/index.js';
    export let data;
</script>

<section>
    <KenmerkenDropdown {data} />
     <!-- <h1>{data.stekje.naam}</h1> -->
</section>

<style>
    section {
        background-color: #fbc980;
        border-radius: var(--border-card);
    }
</style>