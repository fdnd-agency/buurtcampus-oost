<script>
	export let svgFill;
</script>

<svg
	class="my-custom-svg"
	width="12"
	height="12"
	viewBox="0 0 42 42"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<circle cx="21" cy="21" r="21" fill={svgFill} />
</svg>

<style>
	svg {
		/* top: 2em;
                left: -2em;
                z-index: 1; */
	}

	/* MEDIA QUERY TABLET = 768px */
	@media (min-width: 48rem) {
		svg {
			/* position: relative;
            top: .5em; */
			margin: 1em;
			width: 3em;
		}
	}

	/* MEDIA QUERY TABLET = 1100px */
	@media (min-width: 68.75rem) {
		svg {
			top: 0.7em;
		}
	}

	/* MEDIA QUERY TABLET = 1250px */
	@media (min-width: 78.1rem) {
		svg {
			top: 1.2em;
		}
	}
</style>
