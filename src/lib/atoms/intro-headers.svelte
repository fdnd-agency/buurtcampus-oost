<script>
	export let heroInfo;
</script>

<section>
	<p>{heroInfo.description}</p>
</section>

<style>
	section {
		display: flex;
		gap: 0.5em;
		justify-content: center;
		position: relative;
		overflow: hidden;
		margin: -2em auto;
		padding: 1.5em;
		background-color: var(--main-color-beige);
		font-weight: 500;
		font-size: 1em;
	}

	section::before {
		content: url('/assets/Circle-Orange.svg');
		display: inline-flex;
	}

	@media (min-width: 48rem) {
		section {
			margin: -2em auto;
			align-items: center;
			width: 70vw;
			padding: 2em 2em;
			border-radius: var(--border-card);
		}

		section::after {
			width: 9rem;
			top: 2.5em;
			opacity: 0.5;
			right: -4rem;
			position: absolute;
			transform: rotate(-45deg);
			content: url(/assets/leaf-orange.svg);
		}

		section::before {
			display: none;
		}
	}

	@media (min-width: 74rem) {
		section {
			padding: 1.5em;
			width: 70vw;
			border-radius: var(--border-card);
		}

		section::after {
			top: -1em;
			width: 12rem;
			opacity: 0.5;
			right: -4rem;
			position: absolute;
			transform: rotate(-45deg);
			content: url(/assets/leaf-orange.svg);
		}

		section::before {
			display: none;
		}

		p {
			width: 45vw;
		}
	}

	@media (min-width: 100rem) {
		section{
			width: 50vw;
		}

		section::after {
			width: 15rem;
			top: -3em;
		}

		p {
			width: 35vw;
			font-size: 1.5em;
		}
	}
</style>
