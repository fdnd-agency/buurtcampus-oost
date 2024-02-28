<script>
  export let data;
  import Leaf from "../svg/leaf.svelte";
  import Arrow from "../svg/arrow.svelte";
  import Test from "../carousel/test.svelte";
  import Carouselstekje from "../carousel/Carouselstekje.svelte";
</script>

<main>
  <section class="flex-wrapper-2">
    <Leaf />
    <div class="container-text">
      <span
        ><Arrow />
        <h2>Beschikbare stekjes</h2></span
      >
      <p>
        Dit zijn de meest recente stekjes die je kunt ruilen, en het enige wat
        je hoeft te doen is je eigen stekje meenemen.
      </p>
    </div>
  <Carouselstekje {data} />
  </section>
</main>

<style>
  span {
    gap: 0.5rem;
    align-items: baseline;
    display: flex;
  }
  h2 {
    font-size: 3rem;
    color: var(--background-color);
    margin-bottom: 1rem;
    line-height: 2.5rem;
  }

  p {
    color: var(--background-color);
    font-size: 19px;
    padding-left: 3rem;
  }

  main {
    margin-bottom: 5rem;
  }

  .container-text {
    width: 95%;
  }

  .flex-wrapper-2 {
    z-index: 1;
    position: relative;
    background-color: var(--background-color-light);
  }

  /* MEDIA QUERY DESKTOP */
  @media screen and (min-width: 64rem) {
    h2 {
      font-size: 4rem;
      margin-top: 0.3em;
      margin-bottom: 1rem;
      line-height: 1.2em;
    }

    .flex-wrapper-2 {
      margin-top: 5rem;
      margin-left: 5%;
      width: 90%;
      border-radius: 40px;
      /* height: 50vh; */
    }

    .container-text {
      padding: 7rem 0 0 5rem;
      width: 40rem;
    }
  }

  /* MEDIA TABLET */
  @media screen and (min-width: 48rem) {
    h2 {
      font-size: 4rem;
    }

    .svg-leaf {
      width: 20%;
      top: -10%;
    }

    .flex-wrapper-2 {
      display: flex;
      flex-direction: column;
      margin-top: 5rem;
      margin-left: 5%;
      width: 90%;
      height: 125vh;
      border-radius: 40px;
    }

    .container-text {
      margin-top: 2rem;
      width: 40rem;
    }
  }
</style>
