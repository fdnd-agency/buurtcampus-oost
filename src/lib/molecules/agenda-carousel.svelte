<script>
	import { AgendaButton } from '$lib/index.js';
	import { onMount } from 'svelte';
	export let data;

	// @ts-ignore
	let agendaContainer;

	// Scroll left by the container's width
	function scrollPrev() {
		// @ts-ignore
		agendaContainer.scrollBy({ left: -agendaContainer.offsetWidth });
	}
	// Scroll right by the container's width
	function scrollNext() {
		// @ts-ignore
		agendaContainer.scrollBy({ left: agendaContainer.offsetWidth });
	}

	onMount(() => {
		const buttons = document.querySelector('.caroussel-buttons');
		if (buttons) {
			buttons.classList.remove('hidden');
		}
	});
</script>

<!-- AGENDA-CAROUSEL - PREV-NEXT BUTTON CODE -->
<article class="caroussel-buttons hidden">
	<button type="button" aria-label="previous-button" on:click={scrollPrev}
		><img class="arrow" src="./assets/arrow-prev.svg" alt="arrow-prev" width="100" /></button
	>

	<button type="button" aria-label="next-button" on:click={scrollNext}
		><img class="arrow" src="./assets/arrow-next.svg" alt="arrow-next" width="100" /></button
	>
</article>

<!-- AGENDA-CAROUSEL - CARD CODE -->
<article bind:this={agendaContainer}>
	{#each data.agendas as agenda}
		<div class="card">
			<div class="content">
				<h3>{agenda.event}</h3>
				<time>{agenda.date}</time>
				<time>{agenda.time}</time>
				<address>{agenda.address}</address>
				<p>{agenda.price}</p>

				<AgendaButton
					href="/agenda"
					buttonText="Aanmelden"
					btnClass="btn-beige"
					svgFill="svg-brown"
				/>
			</div>
			<img src={agenda.cardImage.url} alt="workshop" width="100" />
		</div>
	{/each}
</article>

<!-- AGENDA-CAROUSEL STYLING  -->
<style>
	article {
		width: 85vw;
		display: flex;
		overflow: auto;
		scrollbar-width: none;
		scroll-snap-type: x mandatory;
	}

	.card {
		width: auto;
		position: relative;
		padding-right: 1rem;
		scroll-snap-align: start;
	}

	.card::before {
		content: '';
		width: 13em;
		height: 14em;
		padding: 0.5em;
		position: absolute;
		border-top-left-radius: 0.8em;
		border-bottom-left-radius: 0.8em;
		background-color: var(--main-color-brown);
	}

	.content {
		margin: 1em;
		display: flex;
		position: absolute;
		flex-direction: column;
		justify-content: center;
		color: var(--main-color-beige);
	}

	h3 {
		font-size: 20px;
	}

	img {
		width: 25em;
		height: 15em;
		object-fit: cover;
		border-radius: 0.8em;
	}

	button {
		display: none;
	}

	.hidden {
		display: none !important;
	}

	/* MEDIA QUERY STYLING */
	/* DESKTOP */
	@media (min-width: 64rem) {
		/* PREV-NEXT BUTTON STYLING */
		.caroussel-buttons {
			z-index: 3;
			width: 6em;
			display: flex;
			margin-bottom: 1em;
			justify-content: space-between;
		}

		button {
			width: 40px;
			height: 40px;
			border: none;
			padding: 0.3em;
			display: block;
			cursor: pointer;
			border-radius: 50%;
			background-color: var(--main-color-brown);
		}

		button:hover {
			background: var(--main-color-green);
		}

		.arrow {
			width: 2em;
			height: 2em;
			margin-top: 0.2em;
		}

		/* SCROLL-DRIVEN-ANIMATIONS STYLING */
		@supports (animation-timeline: view()) {
			.card {
				animation-timeline: view(inline);
				animation-name: animate-in-and-out;
			}

			@keyframes animate-in-and-out {
				entry 0% {
					opacity: 0;
					transform: translate(100%);
				}
				entry 100% {
					opacity: 1;
					transform: translateX(0);
				}

				exit 0% {
					opacity: 1;
					transform: translateX(0);
				}
				exit 100% {
					opacity: 0;
					transform: translate(-10%);
				}
			}
		}
	}

	/* BIG SCREENS (DESKTOP) */
	@media (min-width: 100rem) {
		article {
			min-width: 40vw;
		}
	}

	/* TABLET */
	@media (min-width: 48rem) and (max-width: 64rem) {
		article {
			max-width: 75vw;
		}
	}
</style>
