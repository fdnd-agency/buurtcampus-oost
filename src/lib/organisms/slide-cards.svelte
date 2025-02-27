<script>
	export let data;
	import { Button, Dot, CardslidesContent } from '$lib/index.js';
</script>

<section class="card-container">
	{#if data?.cardSlides?.length}
		{#each data.cardSlides as cardSlide}
			<article class={cardSlide.cardStyles.backgroundColor}>
				<header>
					<Dot svgFill={cardSlide.svgStyles.svgFill} />
					<CardslidesContent
						titleCard={cardSlide.titleCard}
						titleColor={cardSlide.cardStyles.titleColor}
					/>
				</header>

				<picture>
					<img width="783" height="982" loading="lazy" src={cardSlide.imageCard.url} alt="" />
				</picture>

				<CardslidesContent
					paragraphCard={cardSlide.paragraphCard}
					paragraphCard2={cardSlide.paragraphCard2}
					paragraphColor={cardSlide.cardStyles.paragraphColor}
				/>

				<div class="btn-container">
					<Button
						href={cardSlide.buttonStyles.href}
						buttonText={cardSlide.buttonStyles.buttonText}
						buttonClass={cardSlide.buttonStyles.buttonClass}
						svgFill={cardSlide.buttonStyles.svgFill}
					/>
				</div>
			</article>
		{/each}
	{:else}
		<p class="error-message">Geen projectkaarten gevonden.</p>
	{/if}
</section>

<style>
	.card-container {
		container-type: inline-size;
		container-name: slidecards;
	}

	article {
		align-items: center;
		position: relative;
		padding: 2em 1em;
		bottom: 3em;
		margin: 0 auto;
		z-index: 1;
		overflow: hidden;
		border-radius: var(--border-bigCard);
	}

	article::before {
		content: url(/assets/leaf-orange.svg);
		position: absolute;
		top: 0;
		width: 20em;
		height: 20em;
		left: -4em;
		transform: rotate(135deg);
		z-index: -1;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: var(--border-bigCard);
	}

	@container slidecards (min-width: 64rem) {
		header {
			display: flex;
			align-items: flex-start;
		}

		article {
			padding: 2em 1em;
			width: 95vw;
			display: grid;
			grid-template-columns: 2fr 2fr;
		}

		article::before {
			width: 26em;
			height: 26em;
		}

		article picture {
			display: flex;
			justify-content: end;
			grid-column-start: 2;
			grid-row-start: 1;
			grid-row-end: 4;
		}

		img {
			height: 100%;
			width: 32em;
		}

		.btn-container {
			width: 14em;
			margin: 0em 7em 0 4em;
		}
	}

	/* backgroundColor variants */
	.bg-green {
		background-color: var(--card-color-green);
	}

	.bg-beige {
		background-color: var(--main-color-beige);
	}

	.bg-brown {
		background-color: var(--card-color-brown);
	}

	.bg-orange {
		background-color: var(--card-color-orange);
	}

	.error-message {
		font-size: 1.5rem;
		color: var(--main-color-red);
	}
</style>
