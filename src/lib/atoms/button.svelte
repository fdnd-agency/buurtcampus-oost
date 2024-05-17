<script>
	import { Arrow } from '$lib/index.js';

	export let buttonText, buttonBackground, svgFill, buttonColor;
</script>

<button style="background-color: {buttonBackground}; color: {buttonColor};">
	<span>{buttonText}</span>
	<Arrow {svgFill} />
</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 10rem;
		border: none;
		border-radius: 2rem;
		padding: 0.5rem 0;
		font-size: 1rem;
	}

	button:hover {
		cursor: pointer;
	}

	span {
		padding-right: 1rem;
	}
</style>
