<script>
    export let data;
    console.log(data.contacts[0].title);
	import { HeroHeaders, ContactForm } from '$lib/index.js';

</script>

<HeroHeaders 
    heroInfo="{data.heroHeaders[5]}"
/>

<main>
    <section>
        <header>
            <h2>{data.contacts[0].title}</h2>
            <p>{data.contacts[0].contactIntro}</p>
        </header>
        <ContactForm />
    </section>
</main>

<style>
    main{
        height: 90vh;
        display: flex;
        justify-content: center;
    }

    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: var(--main-color-beige);
        border-radius: var(--border-card);
        height: 100%;
        width: 100%;
        top: -1em;
        position: relative;
        padding: 2.5em;
        overflow: hidden;
    }
    section::after{
        content: url(/assets/leaf-orange.svg);
        width: 17em;
        height: 17em;
        opacity: 0.5;
        position: absolute;
        right: -3em;
        top: -3em;
        transform: rotate(-45deg);
    }
    header{
        padding: 1.5em 0;
        width: 60%;
    }
    header::after{
        content: url(/assets/Circle-Orange.svg);
        position: absolute;
        top: 2em;
        margin: 0 -2.5em;
    }
    h2{
        position: relative;
        padding-bottom: .5em;
        color: var(--card-color-green);
        font-family: var(--header-font);
        font-size: 3em;
        max-width: 80%;
        line-height: 95%;
    }

    h2, p{
        z-index: 2;
    }

    /* MEDIA QUERY TABLET = 545px */
    @media (min-width: 34rem) {

    }

    /* MEDIA QUERY TABLET = 768px */
    @media (min-width: 48rem) {
        section{
            width: 90%;
        }
        
        header{
            width: 65%;
        }
        header::after{
            top: 4em;
            margin: 0 -5em;
        }
        h2{
            font-size: 4em;
            margin: .3em 0;
        }
    }

    /* MEDIA QUERY TABLET = 1200px */
    @media (min-width: 75rem) {
        header{
            width: 75%;
        }
    }

    /* MEDIA QUERY TABLET = 1500px */
    @media (min-width: 93rem) {

        section{
            top: -3em;
        }
        header{
            width: 80%;
        }
    }

</style>