<script> 
    export let data;
    import { Dot } from '$lib/index.js';
</script> 

<section>
    <article class="card-stekjes">
        <div>
            <Dot svgFill="var(--main-color-orange)"/>
            <h2>{data.cardSlides[0].titleCard}</h2>
        </div>
        <p>{data.cardSlides[0].paragraphCard}</p>
    </article>
    <article class="card-zaden">
        <div>
            <Dot svgFill="var(--main-color-beige)"/>
            <h2>{data.cardSlides[1].titleCard}</h2>
        </div>
        <p>{data.cardSlides[1].paragraphCard}</p>
    </article>
    <article class="card-gevel">
        <div>
            <Dot svgFill="var(--main-color-orange)"/>
            <h2>{data.cardSlides[2].titleCard}</h2>
        </div>
        <p>{data.cardSlides[2].paragraphCard}</p>
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

    article div{
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
    
</style>