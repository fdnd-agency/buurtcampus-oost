<script>
	export let data;
	import { Navigation, AccessibilityMenu, Menu, Footer } from '$lib/index.js';
</script>

<div class="content">
	
<Navigation />

<AccessibilityMenu />
<!-- <Menu/> -->
<slot />
<Footer {data} />

</div>