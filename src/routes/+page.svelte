<script>
	// export let data;
	import { Header, HeroSlider, Footer, AgendaCarousel } from '$lib/index.js';
</script>

<Header />
<HeroSlider />
<Footer />
<AgendaCarousel
	agendaItems={[
		{
			event: 'hallo',
			date: '2021-09-01',
			address: 'Amsterdam',
			price: '€ 10',
			image: 'url("https://images.unsplash.com/photo-1629913661164-4b3b3b3b3b3b")'
		}
	]}
/>

<!--CSS STYLING-->
