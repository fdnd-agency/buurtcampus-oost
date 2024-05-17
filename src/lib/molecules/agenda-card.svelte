<script>
	import { Button } from '$lib/index.js';

	export let cardEvent, cardDate, cardAddress, cardPrice, cardImage;
</script>

<section style="background-image: {cardImage} ;">
	<div class="data">
		<time> {cardDate} </time>
		<address>{cardAddress}</address>
		<span> {cardPrice} </span>
	</div>
	<div class="button">
		<Button
			buttonText="Meld je aan"
			buttonBackground=" var(--button-color)"
			svgFill="var(--card-color-dark)"
			buttonColor="var(--card-color-dark)"
		/>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 12.5rem;
		width: 20rem;
		padding: 1rem 0.5rem 0.5rem 1rem;
		border-radius: 1rem;
		background-color: hotpink;
	}

	.button {
		align-self: flex-end;
	}

	/* MEDIA QUERY TABLET = 768px */
	@media (min-width: 48rem) {
		section {
			height: 15rem;
			width: 25rem;
			padding: 1rem;
		}
	}
</style>
