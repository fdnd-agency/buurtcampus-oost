<script> 
    export let data;
    import { Dot } from '$lib/index.js';
</script> 

<section class="card-container">
    <article class="card-stekjes">
        <header class="header-card">
            <Dot svgFill="var(--main-color-orange)"/>
            <h2>{data.cardSlides[0].titleCard}</h2>
        </header>
        <section>
            <picture>
                <img src="{data.cardSlides[0].imageCard.url}" alt="{data.cardSlides[0].imageCardAltText}}" />
            </picture>
            <div class="paragraph-card">
                <p>{data.cardSlides[0].paragraphCard}</p>
                <p>{data.cardSlides[0].paragraphCard2}</p>
            </div>
        </section>
    </article>

    <article class="card-zaden">
        <header class="header-card">
            <Dot svgFill="var(--main-color-beige)"/>
            <h2>{data.cardSlides[1].titleCard}</h2>
        </header>
        <section>
            <picture>
                <img src="{data.cardSlides[1].imageCard.url}" alt="{data.cardSlides[1].imageCardAltText}}" />
            </picture>
            <div class="paragraph-card">
                <p>{data.cardSlides[1].paragraphCard}</p>
                <p>{data.cardSlides[1].paragraphCard2}</p>
            </div>
        </section>
    </article>

    <article class="card-gevel">
        <header class="header-card">
            <Dot svgFill="var(--main-color-orange)"/>
            <h2>{data.cardSlides[2].titleCard}</h2>
        </header>  
        <section>      
            <picture>
                <img src="{data.cardSlides[2].imageCard.url}" alt="{data.cardSlides[2].imageCardAltText}}" />
            </picture>
            <div class="paragraph-card">
                <p>{data.cardSlides[2].paragraphCard}</p>
                <p>{data.cardSlides[2].paragraphCard2}</p>
            </div>
        </section>
    </article>
</section>

<style>
    .card-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        bottom: 3em;
    }
    .card-container article{
        width: 100vw;
        padding: 1em 0;
        border-radius: var(--border-bigCard);
    }
    .header-card{
        display: flex;
    }
    h2{
        font-family: var(--header-font);
        font-size: 3em;
        line-height: 95%;
        max-width: 4em;
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
    article section{
        padding: 1em 3em;
    }
    .paragraph-card p{
        max-width: 32em;
        padding: .5em 0;
    }
    article img{
        width: 80%;
        max-width: 20em;
        height: 20em;
        display: flex;
        justify-content: center;
        border-radius: var(--border-bigCard);
    }
    
</style>