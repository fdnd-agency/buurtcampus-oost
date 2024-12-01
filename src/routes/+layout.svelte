<script>
	export let data;
	import { Menu, AccessibilityMenu,  Footer } from '$lib/index.js';
</script>

<Menu/>

<AccessibilityMenu />

<slot />
<Footer {data} />
