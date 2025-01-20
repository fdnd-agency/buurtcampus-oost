<script>    
    import { HarryWeather, DropdownZaden } from '$lib/index.js';
    export let data;
</script>

<section>
    <DropdownZaden {data} />
</section>

<style>
    section {
        background-color: #fbc980;
        border-radius: var(--border-card);
    }
</style>