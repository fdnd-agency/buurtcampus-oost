<script>
    
    import { HarryWeather, Kenmerken, KenmerkenDropdown } from '$lib/index.js';
    export let data;
</script>

<section>
    <KenmerkenDropdown {data} />
</section>

<style>
    section {
        background-color: #fbc980;
        border-radius: var(--border-card);
    }
</style>