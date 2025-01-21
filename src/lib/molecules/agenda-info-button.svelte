<script>
	import CloseMenu from '$lib/atoms/icons/close-menu.svelte';
</script>

<button aria-label="informatiebutton" type="button" popovertarget="mypopover">
	<img src="./assets/info-round-button-svgrepo-com.svg" alt="info-icon" />
</button>

<dialog id="mypopover" popover="manual">
	<button
		type="button"
		aria-label="closebutton"
		class="close-button"
		popovertarget="mypopover"
		popovertargetaction="hide"><CloseMenu /></button
	>

	<h1>Ontdek de Workshops van Bieb in Bloei!</h1>

	<p>
		Hieronder vind je een overzicht van de workshops die er te volgen zijn. Of je nu wilt leren,
		creëren of gewoon iets nieuws wilt uitproberen, er zit vast iets tussen voor jou!
	</p>

	<p>
		Heb je moeite om alle workshops te zien? Geen zorgen! Als de pijltjes niet werken, kun je
		simpelweg naar links of rechts scrollen (op desktop) of swipen (op mobiel) om door het overzicht
		te bladeren.
	</p>
</dialog>

<style>
	dialog {
		width: 23em;
		height: 33em;
		padding: 2em;
		border: none;
		overflow: hidden;
		border-radius: 1em;
		background: white;
	}

	button {
		z-index: 100;
		width: 40px;
		height: 40px;
		border: none;
		padding: 0.3em;
		cursor: pointer;
		margin-bottom: 1em;
		border-radius: 50%;
		background-color: var(--main-color-brown);
	}

	button:hover {
		background: var(--main-color-green);
	}

	.close-button {
		background: none;
		margin-left: 20em;
		margin-bottom: 0.5em;
	}

	.close-button:hover {
		background: var(--main-color-beige);
	}

	img {
		width: 1.7em;
		position: relative;
	}

	p {
		margin-top: 0.5em;
		line-height: 1.5em;
	}

	p:nth-of-type(2) {
		font-weight: bold;
	}

	@media (min-width: 64rem) {
		dialog {
			width: 25em;
			height: 25em;
			margin-left: 2em;
		}

		.close-button {
			margin-left: 23em;
		}

		button {
			position: relative;
			z-index: 100;
		}
	}

	@media (min-width: 100rem) {
		button {
			position: relative;
			z-index: 100;
		}
	}
</style>
