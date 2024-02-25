<script>
  export let data
  import Home from './home/+page.svelte'
	import Navigation from '../lib/organisms/Navigation.svelte';
	import Footer from '$lib/organisms/Footer.svelte';

</script>

<Navigation/>

<Home data={data}/>

<Footer />

