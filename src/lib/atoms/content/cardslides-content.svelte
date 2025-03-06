<script>
	export let titleColor, paragraphColor, titleCard, paragraphCard, paragraphCard2;
</script>

<article>
	{#if titleCard}
		<h2 class={titleColor}>{titleCard}</h2>
	{/if}

	{#if paragraphCard}
		<p class={paragraphColor}>{paragraphCard}</p>
	{/if}

	{#if paragraphCard2}
		<p class={paragraphColor}>{paragraphCard2}</p>
	{/if}
</article>

<style>
	h2 {
		line-height: 95%;
		margin-bottom: 0.5em;
		font-size: clamp(2em, 5vw, 8em);
		font-family: var(--header-font);
	}

	p {
		padding: 0.5em;
		line-height: var(--line-height-paragraph);
	}

	/* titleColor variants */

	.title-green {
		color: var(--main-color-green);
	}

	.title-beige {
		color: var(--main-color-beige);
	}

	.title-brown {
		color: var(--main-color-brown);
	}

	/* paragraphColor variants */

	.paragraph-green {
		color: var(--main-color-green);
	}

	.paragraph-beige {
		color: var(--main-color-beige);
	}

	.paragraph-brown {
		color: var(--main-color-brown);
	}

	/* Container Queries */
	
	/* Ipad mini */
	@container slidecards (min-width: 37.5rem) and (max-width: 50rem) {
		p {
			margin: 0.5em;
			padding: 0.5em;
			max-width: 65ch;
		}
	}

	/* Ipad air and Ipad pro */
	@container slidecards (min-width: 50rem) and (max-width: 64rem) {
		h2 {
			max-width: 80%;
			font-size: clamp(3rem, 5vw, 7rem);
		}

		p {
			max-width: 40ch;
		}
	}

	/* Desktop */
	@container slidecards (min-width: 64rem) {
		h2 {
			width: 4em;
			font-size: clamp(3em, 5vw, 6em);
		}

		p {
			max-width: 43em;
			margin: 0em 7em 0 4em;
		}
	}
</style>
