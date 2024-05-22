<script>
	import { Arrow } from '$lib/index.js';
	export let buttonText, buttonBackground, svgFill, buttonColor;
</script>

<button style="background-color: {buttonBackground}; color: {buttonColor}; ">
	{buttonText}
	<span>
		<Arrow {svgFill} />
	</span>
</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 10rem;
		border: none;
		border-radius: 1rem;
		padding: 0.5rem 0;
		font-size: 1rem;
	}

	button:hover {
		cursor: pointer;
		background-color: var(--text-color-white);
		color: var(--text-color-black);
	}

	span {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-left: 1rem;
	}

</style>