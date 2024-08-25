<script>
    export let data;
    import { HeroHeaders, IntroHeaders } from '$lib/index.js';
</script>

<HeroHeaders 
    heroInfo="{data.heroHeaders[4]}"
/>
<IntroHeaders heroInfo="{data.heroHeaders[4]}" />

<main>
    <article>
        <h2>Oba</h2>
        <p>
            <span>Samenwerking OBA</span>
            Bieb & Bloei is een initiatief van de Openbare Bibliotheek Amsterdam (OBA). 
            In de projecten van Buurtcampus Oost benutten we de kennis en creativiteit van de studenten en de locaties en publieksprogramma’s van de bibliotheek.
        </p>
    </article>
    <article>
        <h2>Hva</h2>
        <p>
            <span>Samenwerking HvA</span>
            Bieb & Bloei is een initiatief van de Hogeschool van Amsterdam (HvA). 
            In de projecten van Hva benutten we de kennis en creativiteit van de studenten en de locaties en publieksprogramma’s van de bibliotheek.
        </p>
    </article>
    <article>
        <h2>Tugla85</h2>
        <p>
            <span>Samenwerking Tugla85</span>
            Bieb & Bloei werkt samen met Tugla85. In de projecten van Tugla85 benutten we de kennis en creativiteit. Zij helpen ons met het organiseren an workshops voor studenten.
        </p>
    </article>
</main>

<style>
    main{
        margin-top: 4em;
        height: 60vh;
        padding: 2em;
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
    }

    article{
        background-color: var(--main-color-beige);
        color: var(--card-color-green);
        padding: 2em;
        border-radius: var(--border-card);
        width: 30vw;
        height: 40vh;
    }

    h2{
        font-size: 3em;
    }
    p span{
        display: block;
        font-family: var(--sub-header-font);
    }
</style>