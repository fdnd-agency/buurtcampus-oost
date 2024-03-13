<script>
  export let data;
  import Carouselstekje from "../carousel/Carouselstekje.svelte";
  import Leaf from "../svg/leaf.svelte";
  import Arrow from "../svg/arrow.svelte";
  import Cross from "../svg/cross.svelte";
  import Info from "../svg/info.svelte";
</script>

<main>
  <section class="flex-wrapper-2">
    <!-- <Leaf /> -->
    <div class="container-text">
      <span>
        <Arrow />
        <h2>Beschikbare stekjes</h2>
      </span>

      <p>
        Dit zijn de meest recente stekjes die je kunt ruilen, en het enige wat
        je hoeft te doen is je eigen stekje meenemen.
      </p>
    </div>

    <!-- <div class="popover-container">
      <button popovertarget="modal">
        <Info />
      </button>
      <p class="info-p">Info</p>

      <div id="modal" popover="manual">
        <button popovertarget="modal" popovertargetaction="hide">
          <Cross />
        </button>
        <p>Test werkt dit</p>
      </div>
    </div> -->

    <Carouselstekje {data} />
  </section>
</main>

<style>
  h2 {
    font-size: 3rem;
    color: var(--background-color);
    margin-bottom: 2rem;
    margin-left: 0.6em;
    line-height: 3.5rem;
  }

  p {
    color: var(--background-color);
    font-size: 19px;
    padding-left: 2rem;
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

  /* .popover-container {
    position: relative;
    display: flex;
    z-index: 2;
    margin-left: 2em;
    margin-top: 2em;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  .info-p {
    color: black;
    margin-top: 0.1em;
    margin-left: -1.2em;
  } */

  @media screen and (min-width: 867px) {
    .flex-wrapper-2 {
      display: flex;
      flex-direction: column;
      margin-top: 5rem;
      margin-left: 5%;
      width: 90%;
      height: 125vh;
      border-radius: 40px;
    }

    h2 {
      font-size: 4rem;
      margin-top: 1em;
      margin-bottom: 1rem;
      width: 1em;
      line-height: 1.3em;
    }

    p {
      margin-left: 4.3em;
      margin-top: 1em;
    }

    span {
      position: relative;
      left: 2em;
      align-items: baseline;
      display: flex;
    }
  }

  @media screen and (min-width: 769px) {
    .flex-wrapper-2 {
      display: flex;
      flex-direction: column;
      margin-top: 5rem;
      margin-left: 5%;
      width: 90%;
      height: 125vh;
      border-radius: 40px;
    }
  }
</style>
