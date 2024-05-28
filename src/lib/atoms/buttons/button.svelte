<script>
	import { Arrow } from '$lib/index.js';
	export let href, buttonText, buttonBackground, svgFill, buttonColor;
</script>

<a href={href} style="background-color: {buttonBackground}; color: {buttonColor};">
	{buttonText}
	<span>
		<Arrow {svgFill} />
	</span>
</a>

<style>
	a{
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 2em;
		padding: 0.4em 1em;
		text-decoration: none;
		font-size: 1em;
		transition: ease-in .1s;
	}
	a:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
	span {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 0 .05em .7em;
	}

</style>
