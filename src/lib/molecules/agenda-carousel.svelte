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
	<button type="button" aria-label="previousbutton" on:click={scrollPrev}
		><img class="arrow" src="./assets/arrow-prev.svg" alt="arrow-prev" width="100" /></button
	>

	<button type="button" aria-label="nextbutton" on:click={scrollNext}
		><img class="arrow" src="./assets/arrow-next.svg" alt="arrow-next" width="100" /></button
	>
</article>

<!-- AGENDA-CAROUSEL - CARD CODE -->
<article>
	<div class="scroll-container" bind:this={agendaContainer}>
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
	</div>
</article>

<!-- AGENDA-CAROUSEL STYLING  -->
<style>
	article {
		overflow: hidden;
		max-width: 100%;
	}

	.scroll-container {
		display: flex;
		padding: 2rem;
		gap: 1rem;
		overflow: auto;
		scrollbar-width: none;
		scroll-snap-type: x mandatory;
	}

	.card {
		display: flex;
		align-items: stretch;

		/* min-width: 25rem; */
		min-width: calc(100vw - 4rem);

		min-height: 15em;
		position: relative;
		/* padding-right: 1rem; */
		scroll-snap-align: start;
	}

	.content {
		position: relative;
		z-index: 1;
		width: 13em;
		height: 100%;
		padding: 0.5em;
		border-top-left-radius: 0.8em;
		border-bottom-left-radius: 0.8em;
		background-color: var(--main-color-brown);
		padding: 1em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: var(--main-color-beige);
	}

	h3 {
		font-size: 20px;
	}

	img {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.8em;
	}

	button {
		display: none;
	}

	.hidden {
		display: none !important;
	}

	/* DESKTOP */
	@media (min-width: 64rem) {
		/* PREV-NEXT BUTTON STYLING */
		.caroussel-buttons {
			z-index: 3;
			position: relative;
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
		/* article {
			max-width: 50vw;
		} */

		.card {
			min-width: 25rem;
		}
	}

	/* TABLET */
	@media (min-width: 48rem) {
		/* article {
			max-width: 75vw;
		} */

		.card {
			min-width: 25rem;
		}
	}
</style>
