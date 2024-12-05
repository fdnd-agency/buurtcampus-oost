<script> 
    export let data;
    import { Dot, Button } from '$lib/index.js';
</script> 

<div class="card-container">
    <article class="card-stekjes">
        <header class="header-card">
            <Dot svgFill="var(--main-color-orange)"/>
            <h2>{data.cardSlides[0].titleCard}</h2>
        </header>
        <picture>
            <img width="783" height="982" loading="lazy" src="{data.cardSlides[0].imageCard.url}" alt="{data.cardSlides[0].imageCardAltText}}" />
        </picture>
        <div class="paragraph-card">
            <p>{data.cardSlides[0].paragraphCard}</p>
            <p>{data.cardSlides[0].paragraphCard2}</p>
        </div>
        <div class="btn-container">
            <Button 
                btnClass="btn-green"
                href="/stekjes"
                buttonText="Bekijk de stekjes"
                svgFill="svg-beige"
            />
        </div>
    </article>

    <article class="card-gevel">
        <header class="header-card">
            <Dot svgFill="var(--main-color-orange)"/>
            <h2>{data.cardSlides[2].titleCard}</h2>
        </header>    
        <picture>
            <img width="783" height="982" loading="lazy" src="{data.cardSlides[2].imageCard.url}" alt="{data.cardSlides[2].imageCardAltText}}" />
        </picture>
        <div class="paragraph-card">
            <p>{data.cardSlides[2].paragraphCard}</p>
            <p>{data.cardSlides[2].paragraphCard2}</p>
        </div>
        <div class="btn-container">
            <Button 
                btnClass="btn-beige"
                href="/geveltuin"
                buttonText="Bekijk de tuin"
                svgFill="svg-green"
            />
        </div>
    </article>

    <article class="card-zaden">
        <header class="header-card">
            <Dot svgFill="var(--main-color-beige)"/>
            <h2>{data.cardSlides[1].titleCard}</h2>
        </header>
        <picture>
            <img width="783" height="982" loading="lazy" src="{data.cardSlides[1].imageCard.url}" alt="{data.cardSlides[1].imageCardAltText}}" />
        </picture>
        <div class="paragraph-card">
            <p>{data.cardSlides[1].paragraphCard}</p>
            <p>{data.cardSlides[1].paragraphCard2}</p>
        </div>
        <div class="btn-container">
            <Button 
                btnClass="btn-brown"
                href="/zaden"
                buttonText="Bekijk de zaden"
                svgFill="svg-beige"
            />
        </div>
    </article>


</div>

<style>

    .card-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        bottom: 3em;
        margin: 0 auto;
        border-radius: var(--border-bigCard);
    }
    .card-container, article{
        width: 100vw;
        overflow: hidden;
    }
    .card-container article{
        border-radius: var(--border-bigCard);
        padding: 1em 0 2em;
    }   
    .card-stekjes::before, .card-zaden::before, .card-gevel::before{
        width: 20em;
        height: 20em;
        position: absolute;
        z-index: 0;
        left: -4em;
        transform: rotate(135deg);
    }
    .card-stekjes::before, .card-zaden::before{
        content: url(/assets/leaf-orange.svg);
    }
    .card-gevel::before{
        content: url(/assets/leaf-green.svg);
    }
    .header-card, picture, .paragraph-card, .btn-container{
        z-index: 2;
        position: relative;
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

    article {
        position: relative;
    }

    .card-stekjes{
        background-color: var(--main-color-beige);
        color: var(--main-color-green);
    }
    .card-zaden{
        background-color: var(--card-color-orange);
        color: var(--main-color-brown);
    }

    .card-gevel::after {
        content: "";
        position: absolute;
        inset: 0;
        background-image: 
            url('/assets/crack1.png'),
            url('/assets/crack2.png');
        background-position: 
            top left,
            bottom right; 
        background-size: 
            40%, 
            50%;
        background-repeat: no-repeat;
        z-index: 1000;
        pointer-events: none;

        @supports (animation-timeline: scroll()) {
            animation: opacity linear;
            animation-timeline: scroll(root y);
	    }
    }

    .card-zaden::after {
        content: "";
        position: absolute;
        inset: 0;
        background-image: 
            url('/assets/crack1.png'),
            url('/assets/crack2.png'),
            url('/assets/crack1.png');
        background-position: 
            top left,
            top right,
            bottom left; 
        background-size: 
            40%, 
            60%,
            50%;
        background-repeat: no-repeat;
        z-index: 1000;
        pointer-events: none;

        @supports (animation-timeline: scroll()) {
            animation: opacity linear;
            animation-timeline: scroll(root y);
	    }
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
    }
    .paragraph-card p:nth-of-type(2){
        display: none;
    }
    article picture{
        display: flex;
        justify-content: start;
        max-width: 18em;
        min-width: 13em;
        margin: 2em 3.5em;
        overflow: hidden;
        min-height: 16em;
        border-radius: var(--border-bigCard);
    }
    article img{
        display: flex;
        justify-content: center;
        border-radius: var(--border-bigCard);
        width: 100%;
        height: 100%;
    }
    .btn-container{
        margin: 2em 3.5em;
    }



    /* MEDIA QUERY MOBILE = 400px */
    @media (min-width: 25rem) {
        .card-container, article{
            width: 95vw;
        }
        .card-container article {
            display: grid;
            justify-content: center;
            padding: 2em;
        }
        h2{
            max-width: 7em;
        }
        article picture{
            justify-content: center;
            max-width: 23em;
            min-width: 18em;
        }
    }

   /* MEDIA QUERY TABLET = 768px */
    @media (min-width: 48rem) {
        .card-container article{
            grid-template-columns: 23em 2fr;
            justify-content: start;
            gap: 2em;
            padding: 2em;
            height: 48em;
        }
        h2{
            font-size: 5em;
            width: 4em;
        }
        article picture{
            justify-content: end;
            min-width: 100%;
            grid-column-start: 2;
            grid-row-start: 1;
            grid-row-end: 4;
            margin: 0;  
        }
        article img{
            height: 100%;
            width: 32em;
        }
        .paragraph-card p:nth-of-type(2){
            display: block;
        }

        .paragraph-card, .btn-container{
            margin: 1em 0 0 4.2em;
        }
        .btn-container{
            display: flex;
            align-items: flex-end;
        }
    }

    /* MEDIA QUERY TABLET = 1100px */
    @media (min-width: 68.75rem) {

        h2{
            font-size: 6em;
        }
        .card-container article{
            grid-template-columns: 28em 2fr;
        }
        .paragraph-card p{
            max-width: 29em;
        }
        .paragraph-card, .btn-container{
            margin: 1em 0 0 6.2em;
        }
    }

    /* MEDIA QUERY TABLET = 1250px */
    @media (min-width: 78.1rem) {
        .card-stekjes::before, .card-zaden::before, .card-gevel::before{
            width: 26em;
            height: 26em;
        }
        h2{
            font-size: 7em;
        }
        .card-container article{
            grid-template-columns: 36em 2fr;
        }
        .paragraph-card p{
            max-width: 32em;
        }
    }

    /* MEDIA QUERY DESKTOP = 1500px */
    @media (min-width: 93.75rem) {
        .card-container, article {
            width: 85vw;
        }
    }
</style>