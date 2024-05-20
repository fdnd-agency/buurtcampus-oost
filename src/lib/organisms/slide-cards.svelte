<script> 
    export let data;
    import { Dot } from '$lib/index.js';
</script> 

<section>
    <article class="card-stekjes">
        <div class="header-card">
            <Dot svgFill="var(--main-color-orange)"/>
            <h2>{data.cardSlides[0].titleCard}</h2>
        </div>
        <div class="paragraph-card">
            <p>{data.cardSlides[0].paragraphCard}</p>
            <p>{data.cardSlides[0].paragraphCard2}</p>
        </div>
        <picture>
            <img src="{data.cardSlides[0].imageCard.url}" alt="{data.cardSlides[0].imageCardAltText}}" />
        </picture>
    </article>
    <article class="card-zaden">
        <div class="header-card">
            <Dot svgFill="var(--main-color-beige)"/>
            <h2>{data.cardSlides[1].titleCard}</h2>
        </div>
        <div class="paragraph-card">
            <p>{data.cardSlides[1].paragraphCard}</p>
            <p>{data.cardSlides[1].paragraphCard2}</p>
        </div>
        <picture>
            <img src="{data.cardSlides[1].imageCard.url}" alt="{data.cardSlides[1].imageCardAltText}}" />
        </picture>
    </article>
    <article class="card-gevel">
        <div class="header-card">
            <Dot svgFill="var(--main-color-orange)"/>
            <h2>{data.cardSlides[2].titleCard}</h2>
        </div>
        <div class="paragraph-card">
            <p>{data.cardSlides[2].paragraphCard}</p>
            <p>{data.cardSlides[2].paragraphCard2}</p>
        </div>
        <picture>
            <img src="{data.cardSlides[2].imageCard.url}" alt="{data.cardSlides[2].imageCardAltText}}" />
        </picture>
    </article>
</section>

<style>
    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        bottom: 3em;
    }
    section article{
        width: 100vw;
        border-radius: 2em;
        height: 40em;
        padding: 1em;
    }

    .header-card{
        display: flex;
        gap: 1em;
    }
    h2{
        font-family: var(--header-font);
        font-size: 3em;
        line-height: 95%;
    }
    .card-stekjes{
        background-color: var(--main-color-beige);
        color: var(--main-color-green);
    }
    .card-zaden{
        background-color: var(--card-color-orange);
        color: var(--main-color-brown);
    }
    .card-gevel{
        background-color: var(--card-color-green);
        color: var(--main-color-beige);
    }
    .paragraph-card{
        padding: 3em;
    }

    .paragraph-card p{
        max-width: 32em;
        padding: 1em 0;
    }

    
</style>