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
	a {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		width: 10rem;
		border: none;
		border-radius: 2rem;
		padding: 0.3rem 0;
		text-decoration: none;
		font-size: 1rem;
		transition: ease-in-out .2s;
	}
	a:hover {
		cursor: pointer;
		transform: scale(1.03);
	}
	span {
		display: flex;
		align-items: center;
		justify-content: center;
		
	}

</style>
