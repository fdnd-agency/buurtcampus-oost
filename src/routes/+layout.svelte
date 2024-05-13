<script>
  import Viewtransition from "$lib/viewtransitions.svelte";
  import Header from "$lib/organisms/Header.svelte";
  import Footer from "$lib/organisms/Footer.svelte";
</script>

  <Viewtransition />
  <Header />
  <slot/>
  <Footer />

