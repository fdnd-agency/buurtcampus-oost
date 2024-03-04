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
    .carousel-container {
    width: 100%;
    display: grid;
    place-items: center;
    /* padding: 1em; */
  }

  .flex-wrapper-recent-stekjes {
    display: flex;
    overflow: auto;
    width: 100%;
    gap: 2em;
    scroll-snap-type: x mandatory;

  }

  .flex-wrapper-recent-stekjes img {
    width: 15rem;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
    scroll-snap-align: center; 
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
      width: 100%;
      display: grid;
      place-items: center;
    }

    ul {
      position: absolute;
      display: flex;
      justify-content: space-between;
      width: 75%;
      align-items: center;
      padding: 0;
      list-style: none;
    }

    .flex-wrapper-recent-stekjes {
      width: 50em;
    }
  }
</style>
