<script>
    import { HarryWeather, Dropdown } from '$lib/index.js';
    
    export let data;
    export let type; // 'stekjes' of 'zaden'
</script>

<section>
    <Dropdown {data} {type} />
</section>

<style>
    section {
        background-color: #fbc980;
        border-radius: var(--border-card);
    }
</style>