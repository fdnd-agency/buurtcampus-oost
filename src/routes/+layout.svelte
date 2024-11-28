<script>
	export let data;
	import { Navigation, AccessibilityMenu, Menu, Footer } from '$lib/index.js';
</script>

<Navigation />

<AccessibilityMenu />
<!-- <Menu/> -->
<slot />
<Footer {data} />
