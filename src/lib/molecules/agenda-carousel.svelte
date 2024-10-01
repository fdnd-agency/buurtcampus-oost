<script>
	import { AgendaButton } from '$lib/index.js';
	export let data;
	const agenda = data.agendas[0];
</script>

<!-- AGENDA-CAROUSEL - PREV-NEXT BUTTON CODE -->
<article>
	<div class="caroussel-buttons">
		<button type="button" aria-label="previous-button"
			><img class="arrow" src="./assets/arrow-prev.svg" alt="arrow-prev" width="100" /></button
		>

		<button type="button" aria-label="next-button"
			><img class="arrow" src="./assets/arrow-next.svg" alt="arrow-next" width="100" /></button
		>
	</div>
</article>

<!-- AGENDA-CAROUSEL - CARD CODE -->
<article>
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
		z-index: 3;
		width: 85vw;
		display: flex;
		overflow-x: auto;
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

	/* MEDIA QUERY STYLING */
	@media (min-width: 64rem) {
		/* PREV-NEXT BUTTON STYLING */
		.caroussel-buttons {
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

	@media (min-width: 100rem) {
		article {
			width: 75vw;
		}
	}
</style>
