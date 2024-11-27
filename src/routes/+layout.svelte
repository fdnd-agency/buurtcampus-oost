<script>
	export let data;
	import { Navigation, Menu, Footer } from '$lib/index.js';
</script>

<Navigation />
<!-- <Menu/> -->
<slot />
<Footer {data} />
