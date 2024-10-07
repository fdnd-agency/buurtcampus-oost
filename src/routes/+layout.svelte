<script>
  export let data;
  import { Menu, Footer, HarryWeather } from '$lib/index.js';
  import Viewtransition from '$lib/viewtransition.svelte';
</script>

<Viewtransition />
<HarryWeather />

<Menu />
<slot/>
<Footer {data}/>

