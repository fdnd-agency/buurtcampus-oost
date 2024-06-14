<script>
  export let data;
  import { Menu, Footer } from '$lib/index.js';
  import Viewtransition from '$lib/viewtransition.svelte';
</script>

<Viewtransition />

<Menu />
<slot/>
<Footer {data}/>

