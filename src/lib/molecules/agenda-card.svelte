<script>
	import { Button } from '$lib/index.js';
	export let cardDate, cardAddress, cardPrice, cardImage;
</script>

<section style="background-image: url({cardImage});">
	<div class="data">
		<time> {cardDate} </time>
		<address>{cardAddress}</address>
		<span> {cardPrice} </span>
	</div>
	<div class="button">
		<Button
			href="/agenda"
			buttonText="Meld je aan"
			btnClass="btn-brown"
			svgFill="svg-beige"
		/>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
		height: 12.5rem;
		width: 20rem;
		flex-shrink: 0;
		padding: 1rem 0.5rem 0.5rem 1rem;
		border-radius: 1rem;
		background-size: cover;
		background-position: center;
	}
	section::after {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		border-radius: 1rem;
		background: var(--image-gradient);
	}
	.data {
		z-index: 1;
		font-family: var(--sub-header-font);
		color: var(--text-color-white);
	}
	.button {
		z-index: 1;
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
