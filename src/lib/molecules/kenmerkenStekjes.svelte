<script>
    import { HarryWeather, DropdownStekje } from '$lib/index.js';
    export let data;
</script>

<section>
    <DropdownStekje {data} />
</section>

<style>
    section {
        background-color: #fbc980;
        border-radius: var(--border-card);
    }
</style>