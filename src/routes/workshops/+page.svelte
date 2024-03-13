<script>
  export let data;
  import {Header, Info, Card, Footer,} from "$lib/index.js"
  import Navigation from "../../lib/organisms/Navigation.svelte";
</script>

<Navigation/>
<Header data={data}/>
<Info/>
<Card data={data}/>
<Footer />
