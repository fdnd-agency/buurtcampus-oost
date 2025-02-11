<script>
	export let data;
	import { Button, Dot } from '$lib/index.js';
</script>

<section>
	<article>
		{#each data.cardSlides as cardSlide}
			<Dot svgFill="var(--main-color-orange)" />
			<h2>{cardSlide.titleCard}</h2>
			<p>{cardSlide.paragraphCard}</p>
			<p>{cardSlide.paragraphCard2}</p>

			<picture>
				<img
					width="783"
					height="982"
					loading="lazy"
					src={cardSlide.imageCard.url}
					alt="{cardSlide.imageCardAltText}"
				/>
			</picture>

			<Button
				href={cardSlide.buttonStyles.href}
				buttonText={cardSlide.buttonStyles.buttonText}
				buttonClass={cardSlide.buttonStyles.buttonClass}
				svgFill={cardSlide.buttonStyles.svgFill}
			/>
		{/each}
	</article>
</section>
