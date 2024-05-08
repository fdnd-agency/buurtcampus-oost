    <script>
// @ts-nocheck
        import {onDestroy, onMount} from 'svelte';
        import slide1 from '$lib/assets/slider-img-1.avif';
        import slide2 from '$lib/assets/slider-img-2.avif';
        import slide3 from '$lib/assets/slider-img-3.avif';

        let intervalId;

        onMount(() => {
            const carrouselContainer = document.querySelector('.hero-slider');
            const carrousel = document.querySelector('.hero-img-list');

            const interval = 8000;

            intervalId = setInterval(() => {
                const currentScroll = carrousel.scrollLeft;
                const itemWidth = carrouselContainer.clientWidth;
                const totalWidth = carrousel.scrollWidth;

                const nextScroll = (currentScroll + itemWidth) % totalWidth;

                carrousel.scrollTo({
                    left: nextScroll,
                    behavior: 'smooth'
                });
            }, interval);
        });

        onDestroy(() => {
            clearInterval(intervalId);
        });

        onDestroy(() => {
            clearInterval(intervalId);
        });

    </script>

<main>
    <section class="hero-slider" aria-label="Image slider">
        <div class="overlay"></div>

        <header>
            <h1>Samen <span>Groener</span> Leven</h1>
            <h2>Inspireer & Deel je Groene Passie!</h2>
        </header>

        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <ul class="hero-img-list" role="list" tabindex="0" aria-live="polite">
            <li>
                <img src={slide1} alt="Slide 1" aria-label="foto-van-stekjes"/>
            </li>
            <li>
                <img src={slide2} loading="”lazy”" alt="Slide 2" aria-label="foto-van-stekjes"/>
            </li>
            <li>
                <img src={slide3} loading="”lazy”" alt="Slide 3" aria-label="foto-van-een-stekje-die-word-gepot"/>
            </li>
        </ul>
    </section>
</main>

<style>
    main {
        background-color: var(--background-color);
    }

    .hero-slider {
        width: 100%;
        height: 90vh;
    }
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 90vh;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0.1) 100%);
    } 
    header{
        /* border: 2px solid red; */
        position: absolute;
        top: 7em;
        padding: 0 1em;
        width: 90vw;
        height: 25em;
    }
    h1{
        font-size: 4.5rem;
        color: var(--text-color);
        font-weight: 900;
        line-height: 1.1em;
    }
    h1 span{
        color: var(	--background-color-light);
    }
    h2{
        font-size: 1.6rem;
        color: var(--text-color);
        font-weight: 900;
        line-height: 1.1em;
        margin: 3rem 0;
    }
    .hero-slider img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
    .hero-slider ul {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scrollbar-width: none;
    }
    .hero-slider ul::-webkit-scrollbar {
        display: none;
    }
    .hero-slider li {
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 100%;
        scroll-snap-align: start;
    }

    /* MEDIA QUERY MOBILE = 400px */
    @media (min-width: 25rem) {
        header {
            padding: 0 2em;
        }
    }

    /* MEDIA QUERY TABLET = 768px */
    @media (min-width: 48rem) {
        h1 {
            width: 80%;
            font-size: 4rem;
            view-transition-name: h1;
        }
    }
    /* MEDIA QUERY DESKTOP = 1024px */
    @media (min-width: 64rem) {
        h1 {
            width: 60%;
            font-size: 8vw;
            line-height: 9rem;
        }
    }
</style>
