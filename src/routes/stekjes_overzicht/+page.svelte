<script>
	export let data;
	import {
		HeaderStekje,
		Footer,
		StekjeCard, 
		StekjesInfo,
		FilterFunctie
	} from '$lib/index.js';
	import Navigation from '../../lib/organisms/Navigation.svelte';
	
</script>

<Navigation/>
<HeaderStekje {data} />

<main>
	<!-- <StekjesInfo/> -->
	<StekjeCard {data} />
</main>

<Footer />

<style>
	main {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1%;
		margin: 1rem;
	}
</style>
