<script>
</script>

<button popovertarget="mypopover">
	<img src="./assets/info-round-button-svgrepo-com.svg" alt="info-icon" />
</button>

<dialog id="mypopover" popover="auto">
	<button popovertarget="mypopover" popovertargetaction="hide">x</button>
	<h1>test</h1>
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
</style>
