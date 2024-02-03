<script>
	export let data;
	import {
		HeaderStekje,
		Footer,
		NavDark,
		MobileMenu,
		StekjeCard, 
		StekjesInfo,
		FilterFunctie
	} from '$lib/index.js';
</script>

<NavDark />
<MobileMenu />
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
