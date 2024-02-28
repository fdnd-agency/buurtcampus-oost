<script>
  export let data;
  import Arrow from "../svg/arrow.svelte";
</script>

<div class="carousel-container">
  <div class="flex-wrapper-recent-stekjes">
    {#each data.stekjes as stekje}
      <a href={stekje.slug}>
        <img src={stekje.fotos[0].url} alt="foto van een stekje" width="100" />
        <p>Bekijk stekje</p>
      </a>
    {/each}
  </div>

  <ul>
    <li><button type="button" class="left-button"><Arrow /></button></li>
    <li><button type="button"><Arrow /></button></li>
  </ul>
</div>

<style>
  .flex-wrapper-recent-stekjes {
    display: flex;
    overflow: auto;
    justify-content: center;
    width: 100%;
    gap: 2em;
  }

  .flex-wrapper-recent-stekjes img {
    width: 15rem;
    border-radius: 2rem;
  }

  .carousel-container {
    /* width: 100%; */
    display: grid;
    place-items: center;
  }

  a {
    scroll-snap-type: x mandatory;
    scroll-snap-align: center;
    text-decoration: none;
  }

  p {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    z-index: 999;
    font-size: 17px;
    background: linear-gradient(
      to bottom,
      rgba(235, 174, 121, 0.858) 0%,
      rgba(235, 174, 121, 0.858) 100%
    );
    height: 4em;
    border-bottom-left-radius: 1.8em;
    border-bottom-right-radius: 1.8em;
    bottom: 4.4em;
  }

  button {
    background: none;
    cursor: pointer;
    border: none;
  }

  .left-button {
    transform: rotate(180deg);
  }

  @media screen and (min-width: 64rem) {
    .carousel-container {
      padding: 6em 0 0 0;
      /* width: 100%; */
      display: grid;
      place-items: center;
    }

    ul {
      position: absolute;
      display: flex;
      justify-content: space-between;
      width: 96%;
      align-items: center;
      padding: 0;
      list-style: none;
    }

    .flex-wrapper-recent-stekjes {
      /* width: 50em; */
    }

    .flex-wrapper-recent-stekjes img {
      border-radius: 2rem;
      scrollbar-width: none;
    }
  }

  @media screen and (min-width: 48rem) {
    .flex-wrapper-recent-stekjes {
      flex-direction: row;
    }
  }
</style>
