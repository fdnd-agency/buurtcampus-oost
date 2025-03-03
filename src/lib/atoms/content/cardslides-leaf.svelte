<script>
	export let svgFill;
</script>

<article class={svgFill}></article>

<style>
	.card-stekjes-svgFill::before,
	.card-zaden-svgFill::before,
	.card-groenebieb-svgFill::before {
		content: url(/assets/leaf-orange.svg);
        position: absolute;
		top: 0;
		width: 23em;
		height: 23em;
		left: -4em;
		transform: rotate(135deg);
		z-index: -1;
	}

	.card-gevel-svgFilll::before {
		content: url(/assets/leaf-green.svg);
        position: absolute;
		top: 0;
		width: 23em;
		height: 23em;
		left: -4em;
		transform: rotate(135deg);
		z-index: -1;
	}
</style>
