
<script>
	export let svgFill;
</script>

<svg width="22" height="22" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="21" cy="21" r="21" fill={svgFill}/>
</svg>
    
<style>
    svg{
        margin: 1em;
    }

    /* MEDIA QUERY TABLET = 768px */
    @media (min-width: 48rem) {
        svg{
            margin: 1em;
            width: 3em;
        }
    }
</style>