<script>
  export let data;
  import {Header, Info, Card, Footer, NavDark, MobileMenu} from "$lib/index.js"
</script>

<NavDark />
<MobileMenu />
<Header data={data}/>
<Info/>
<Card data={data}/>
<Footer />
