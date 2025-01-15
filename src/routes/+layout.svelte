<script>
	export let data;
	import { Menu, Footer } from '$lib/index.js';
</script>


<Menu/>
<slot />
<Footer {data} />
