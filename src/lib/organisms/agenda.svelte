<script>
	import { AgendaCarousel } from '$lib/index.js';
	export let data;
</script>

<section>
	<h1>Agenda</h1>
	<AgendaCarousel {data} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		padding: 4rem;
		background: var(--main-color-beige);
	}

	h1 {
		font-size: 3.5rem;
		padding: 0 0 5rem 0;
		font-family: var(--sub-header-font);
		align-self: baseline;
	}
</style>
