<script>
    export let data;
	import { HeroHeaders } from '$lib/index.js';

</script>

<HeroHeaders 
    heroInfo="{data.heroHeaders[5]}"
/>

<main>
    <section>
        <h2>Contact</h2>
    </section>
</main>

<style>
    main{
        height: 90vh;
        padding: 2em;
    }
    section{
        background-color: var(--main-color-beige);
        width: 100%;
        height: 100%;
    }
</style>