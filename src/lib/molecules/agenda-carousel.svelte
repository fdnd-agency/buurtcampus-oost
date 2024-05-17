<script>
	import { AgendaCard } from '$lib/index.js';
	import { onMount } from 'svelte';
	let wrapper;

	export let agendaItems = [
		{
			event: '{event}',
			date: '{date}',
			address: '{address}',
			price: '{price}',
			image: '{image}'
		}
	];

	// onMount(async () => {
	// 	var carrousel = wrapper.querySelector('section');
	// 	var indicator = wrapper.querySelector('.carrousel-indicator-span');

	// var carrouselScrollWidth = carrousel.scrollWidth;
	// var totalItems = Math.round(carrouselScrollWidth / carrousel.offsetWidth);
	// var active = 0;
	// var activeEl = indicator.querySelector('.is-active');

	// carrousel.addEventListener('scroll', function (uiEvent) {
	// 	var newActive = Math.round((this.scrollLeft / carrouselScrollWidth) * totalItems);
	// 	if (active != newActive) {
	// 		activeEl.classList.remove('is-active');
	// 		activeEl = indicator.children[newActive];
	// 		activeEl.classList.add('is-active');
	// 		active = newActive;
	// 	}
	// 	if (totalItems > 5) {
	// 		// TODO ;)
	// 	}
	// });
	// console.log(carrousel, indicator);
	// });
</script>

<div class="wrapper" bind:this={wrapper}>
	<section>
		<div class="cards">
			{#each agendaItems as { event, date, address, price, image }}
				<div>
					<AgendaCard
						cardEvent={event}
						cardDate={date}
						cardAddress={address}
						cardPrice={price}
						cardImage={image}
					/>
				</div>
				<div>
					<AgendaCard
						cardEvent={event}
						cardDate={date}
						cardAddress={address}
						cardPrice={price}
						cardImage={image}
					/>
				</div>
				<div>
					<AgendaCard
						cardEvent={event}
						cardDate={date}
						cardAddress={address}
						cardPrice={price}
						cardImage={image}
					/>
				</div>
				<div>
					<AgendaCard
						cardEvent={event}
						cardDate={date}
						cardAddress={address}
						cardPrice={price}
						cardImage={image}
					/>
				</div>
				<div>
					<AgendaCard
						cardEvent={event}
						cardDate={date}
						cardAddress={address}
						cardPrice={price}
						cardImage={image}
					/>
				</div>
			{/each}
		</div>

		<!-- <span class="carrousel-indicator">
			<span class="carrousel-indicator-span">
				<span class="carrousel-indicator-span-span is-active"></span>
				<span class="carrousel-indicator-span-span"></span>
				<span class="carrousel-indicator-span-span"></span>
				<span class="carrousel-indicator-span-span"></span>
				<span class="carrousel-indicator-span-span"></span>
			</span>
		</span> -->
	</section>
</div>

<style>
	section {
		display: flex;
		justify-content: center;
		flex-direction: column;
		overflow-x: auto;
		margin: 0 auto;
		scrollbar-width: none;
		-webkit-scrollbar: none;
		scroll-snap-type: x mandatory;
	}

	.cards {
		display: flex;
	}

	div {
		scroll-snap-align: start;
		padding: 0rem 2rem;
	}

	.carrousel-indicator {
		--indicator-size: 6px;
		--max-indicators: 5;

		position: absolute;

		max-width: calc(
			var(--max-indicators) * var(--indicator-size) + (var(--max-indicators) - 1) *
				var(--indicator-size) / 2
		);
		overflow: hidden;
		overflow: clip;
		pointer-events: none;
	}
	.carrousel-indicator-span {
		display: flex;
		gap: calc(var(--indicator-size) / 2);
		height: var(--indicator-size);
	}
	.carrousel-indicator-span-span {
		flex: 0 0 var(--indicator-size);
		width: var(--indicator-size);
		height: var(--indicator-size);
		border-radius: 50%;
		background: black;
		opacity: 0.5;
		transition: 0.2s ease-out opacity;
	}
	.carrousel-indicator-span-span.is-active {
		opacity: 1;
	}

	/* MEDIA QUERY DESKTOP = 1024px */
	@media (min-width: 64rem) {
		section {
			width: 80vw;
		}
	}
</style>
