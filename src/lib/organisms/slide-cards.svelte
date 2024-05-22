<script> 
    export let data;
    import { Dot, Button } from '$lib/index.js';
	import { onMount } from 'svelte';

    
</script> 

<section class="card-container">
    <article class="card-stekjes">
        <header class="header-card">
            <Dot svgFill="var(--main-color-orange)"/>
            <h2>{data.cardSlides[0].titleCard}</h2>
        </header>
        <picture>
            <img src="{data.cardSlides[0].imageCard.url}" alt="{data.cardSlides[0].imageCardAltText}}" />
        </picture>
        <div class="paragraph-card">
            <p>{data.cardSlides[0].paragraphCard}</p>
            <p>{data.cardSlides[0].paragraphCard2}</p>
            <Button 
                buttonText="Bekijk de Bieb"
                buttonBackground="var(--main-color-green)"
                svgFill="var(--main-color-beige)"
                buttonColor="var(--main-color-beige)"
            />
        </div>
    </article>

    <article class="card-zaden">
        <header class="header-card">
            <Dot svgFill="var(--main-color-beige)"/>
            <h2>{data.cardSlides[1].titleCard}</h2>
        </header>
        <picture>
            <img src="{data.cardSlides[1].imageCard.url}" alt="{data.cardSlides[1].imageCardAltText}}" />
        </picture>
        <div class="paragraph-card">
            <p>{data.cardSlides[1].paragraphCard}</p>
            <p>{data.cardSlides[1].paragraphCard2}</p>
            <Button 
                buttonText="Bekijk de Bieb"
                buttonBackground="var(--main-color-brown)"
                svgFill="var(--main-color-beige)"
                buttonColor="var(--main-color-beige)"
            />
        </div>
    </article>

    <article class="card-gevel">
        <header class="header-card">
            <Dot svgFill="var(--main-color-orange)"/>
            <h2>{data.cardSlides[2].titleCard}</h2>
        </header>    
        <picture>
            <img src="{data.cardSlides[2].imageCard.url}" alt="{data.cardSlides[2].imageCardAltText}}" />
        </picture>
        <div class="paragraph-card">
            <p>{data.cardSlides[2].paragraphCard}</p>
            <p>{data.cardSlides[2].paragraphCard2}</p>
            <Button 
                buttonText="Bekijk de Bieb"
                buttonBackground="var(--main-color-beige)"
                svgFill="var(--main-color-green)"
                buttonColor="var(--main-color-green)"
            />
        </div>
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
        padding: 1em 0 2em;
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
    .paragraph-card{
        margin: 0 3.5em;
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }
    .paragraph-card p{
        max-width: 24em;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .paragraph-card p:nth-of-type(2){
        display: none;
    }
    article picture{
        display: flex;
        justify-content: start;
    }
    article img{
        max-width: 18em;
        min-width: 13em;
        margin: 2em 3.5em;
        min-height: 16em;
        display: flex;
        justify-content: center;
        border-radius: var(--border-bigCard);
    }

    /* MEDIA QUERY MOBILE = 400px */
    @media (min-width: 25rem) {
        h2{
            max-width: 7em;
        }
        article img{
            max-width: 25em;
            min-width: 18em;
            min-height: 18em;
        }
    }

    /* MEDIA QUERY TABLET = 500px */
    @media (min-width: 31.25rem) {
        .card-container article{
            padding: 2em;
        }
    }

    /* MEDIA QUERY TABLET = 600px */
    @media (min-width: 37.50rem) {
        .card-container article {
            width: 95vw;
            display: grid;
            justify-content: center;
        }

        article img{
            max-width: 24em;
        }
    }

   /* MEDIA QUERY TABLET = 768px */
    @media (min-width: 48rem) {
        .card-container article{
            grid-template-columns: 1fr 2fr;
            justify-content: flex-start;
            padding: 2em;
        }
        article picture{
            justify-content: flex-end;
            grid-column-start: 2;
            grid-row-start: 1;
            grid-row-end: 3;
        }
        picture img{
            margin: 0;
        }
        .paragraph-card{
            margin: 1em 3.5em 0;
            display: grid;
            grid-column-start: 1;
            grid-row-start: 2;
            grid-row-end: 3;
        }
        h2{
            font-size: 5em;
        }
    }
</style>