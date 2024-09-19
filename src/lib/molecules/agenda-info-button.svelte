<script>
	import CloseMenu from '$lib/atoms/icons/close-menu.svelte';
</script>

<button popovertarget="mypopover">
	<img src="./assets/info-round-button-svgrepo-com.svg" alt="info-icon" />
</button>

<dialog id="mypopover" popover="manual">
	<button class="close-button" popovertarget="mypopover" popovertargetaction="hide"
		><CloseMenu /></button
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
	button {
		z-index: 5;
		height: 40px;
		width: 40px;
		border: none;
		padding: 0.3em;
		margin-bottom: 1em;
		border-radius: 50%;
		background-color: var(--main-color-brown);
	}

	img {
		width: 2em;
		margin-bottom: 0.5em;
		margin-top: 0.2em;
	}

	dialog {
		border-radius: 1em;
		border: none;
		background: white;
		margin-top: 20em;
		margin-left: 6em;
		height: 25em;
		width: 25em;
		padding: 2em;
		overflow: hidden;
	}

	.close-button {
		background: none;
		margin-bottom: 0.5em;
		margin-left: 23em;
	}

	p {
		margin-top: 0.5em;
		line-height: 1.5em;
	}

	p:nth-of-type(2) {
		font-weight: bold;
	}
</style>
