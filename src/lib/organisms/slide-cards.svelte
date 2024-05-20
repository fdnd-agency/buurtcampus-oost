<script> 

</script> 

<section>

    <article class="card-stekjes">
        <h2>Onze stekjes bieb</h2>
    </article>
    <article class="card-zaden">
        <h2>Onze zaden bieb</h2>
    </article>
    <article class="card-gevel">
        <h2>Onze geveltuinen</h2>
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
    h2{
        font-family: var(--header-fon);
        font-size: 3em;
        line-height: 95%;
    }
    .card-stekjes{
        background-color: var(--main-color-beige);
        color: var(--main-color-green);
    }
    .card-zaden{
        background-color: var(--main-color-orange);
        color: var(--main-color-brown);
    }
    .card-gevel{
        background-color: var(--main-color-green);
        color: var(--main-color-beige);
    }
    
</style>