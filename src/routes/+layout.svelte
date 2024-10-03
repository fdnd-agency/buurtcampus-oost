<script>
  export let data;
  import { Menu, AccessibilityMenu, Footer } from '$lib/index.js';
  import Viewtransition from '$lib/viewtransition.svelte';
</script>

<Viewtransition />

<Menu />

<AccessibilityMenu />

<slot/>
<Footer {data}/>

