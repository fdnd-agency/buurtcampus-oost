<script>
	export let data;
</script>

<section>
	<h2>
		Buurt<span>campus</span>
		<span>{data.campusInfos[0].title2}</span>
	</h2>
	<article>
		<p>{data.campusInfos[0].paragraph}</p>
		<p>{data.campusInfos[0].paragraph2}</p>
	</article>
</section>

<style>
	section {
		padding: 0 3em 3em;
		height: 70vh;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: start;
		color: var(--card-color-green);
	}

	h2 {
		font-family: var(--sub-header-font);
		font-size: 3.5em;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		line-height: 1;
		padding-bottom: 0.7em;
	}
	h2 span:nth-of-type(2) {
		color: var(--main-color-orange);
	}
	p {
		padding: 0.3em;
		max-width: 32em;
		margin-bottom: 14em;
		font-family: var(--paragraph-font);
		/* color: var(--text-color-black); */
	}

	p:nth-of-type(1) {
		margin-bottom: 1em;
	}

	/* @media (min-width: 10em) {
        p{
            margin-bottom: 14em;
        }
	} */

	/* MEDIA QUERY TABLET = 430px */
	@media (min-width: 26.8rem) {
		h2 {
			flex-direction: row;
		}
	}

	/* MEDIA QUERY TABLET = 686px */
	@media (min-width: 42.125rem) {
		h2 span:nth-of-type(1) {
			margin-right: 0.2em;
		}
	}

	/* MEDIA QUERY TABLET = 768px */
	@media (min-width: 48rem) {
		section {
			padding: 0 7.5em 3em;
		}
		h2 {
			font-size: 4.5rem;
			padding-bottom: 0.7em;
		}
		p {
			max-width: 38em;
		}
	}

	/* MEDIA QUERY TABLET = 1100px */
	@media (min-width: 68.75rem) {
		section {
			padding: 0 9em 3em;
		}

        p{
            margin-bottom: inherit;
        }
	}

	/* MEDIA QUERY TABLET = 1250px */
	@media (min-width: 78.1rem) {
		section {
			height: 70vh;
		}
		p {
			max-width: 68em;
		}
	}

	/* MEDIA QUERY DESKTOP = 1500px */
	@media (min-width: 93.75rem) {
		section {
			padding: 0 15em 3em;
		}
	}
</style>
