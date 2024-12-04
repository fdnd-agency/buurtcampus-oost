<script>
    export let data;
    import { Button } from '$lib/index.js';
</script>

<section>
    <h2>{data.partnersInfos[0].title}</h2>
    <p>{data.partnersInfos[0].paragraph}</p>
    <p>{data.partnersInfos[0].paragraph2}</p>
    <Button 
        href="/partners"
        buttonText="Bekijk onze partners"
        btnClass="btn-beige"
        svgFill="svg-green"
    />
   
</section>



<style>

    section{
        padding: 3em;
        display: flex;
        height: 70vh;
        justify-content: center;
        flex-direction: column;
        align-items: start;
        background-color: var(--card-color-green);
        color: var(--main-color-beige);
        position: relative;
    }


    section::before{
        content: url(/assets/leaf-light-green.svg);
        width: 30em;
        height: 30em;
        position: absolute;
        right: -8em;
        transform: rotate(-45deg);
        opacity: .2;
        overflow: hidden;
    }

    section::after {
        content: "";
        position: absolute;
        inset: 0;
        background-image: 
            url('/assets/crack1.png'),
            url('/assets/crack2.png'),
            url('/assets/crack1.png'),
            url('/assets/crack4.png');
        background-position: 
            bottom right,
            top right,
            bottom left,
            center; 
        background-size: 
            40%, 
            30%,
            50%;
        background-repeat: no-repeat;
        z-index: 1000;
        pointer-events: none;

        @supports (animation-timeline: scroll()) {
            animation: opacity linear;
            animation-timeline: scroll(root y);
	    }
    }

    h2{
        font-family: var(--sub-header-font);
        font-size: 3.5em;
        line-height: 1;
        padding-bottom: .7em;

        @supports(animation-timeline: view()){
            animation-timeline: view(block);
            animation-name: tiltLeft;
            animation-fill-mode: both;
            animation-duration: 5ms;
            animation-range-start: cover 25%;
            /* animation-range-end: 50%; */
        }
    }       

    p{
        max-width: 50em;
    }

    p:nth-of-type(1){
        padding: .5em 0;
        text-decoration: underline;
    }

    p:nth-of-type(2){
        padding-bottom: 3em;
    }


	/* MEDIA QUERY TABLET = 768px */
	@media (min-width: 48rem) {
		section{
			padding:  4rem 7.5rem;
		}
		h2{
            font-size: 4.5rem;
		}
	}

	/* MEDIA QUERY DESKTOP = 1500px */
	@media (min-width: 93.75rem) {
        section{
            padding: 4rem 15em;
        }
    }

    /* MEDIA QUERY TABLET = 1250px */
    @media (min-width: 78.1rem) {
        p{  
            max-width: 68em;
        }
    }

</style>