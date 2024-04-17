<script>
  import { onMount } from "svelte";
  import Arrow from "../svg/arrow.svelte";
  export let data;

  onMount(() => {
    const prevButton = document.getElementById("button-prev");
    prevButton.addEventListener("click", () => {
      const el = document.querySelector(".flex-wrapper-recent-stekjes");
      el.scrollBy({ left: -1 * el.offsetWidth });
    });

    const nextButton = document.getElementById("button-next");
    nextButton.addEventListener("click", () => {
      const el = document.querySelector(".flex-wrapper-recent-stekjes");
      el.scrollBy({ left: el.offsetWidth });
    });

    //Als JavaScript is ingeschakeld, zet dan een class js-enabled op de body
    document.body.classList.add("js-enabled");
  });
</script>

<article class="carousel-container">
  <div class="flex-wrapper-recent-stekjes">
    {#each data.stekjes as stekje, index}
      <a class="a-stekjes" href={stekje.slug}>
        <img src={stekje.fotos[0].url} alt="foto van een stekje" width="100" />
        <p>Bekijk stekje</p>
      </a>
    {/each}
  </div>

  <ul class="caroussel-buttons">
    <li>
      <button id="button-prev" type="button" class="left-button"
        ><Arrow /></button
      >
    </li>

    <li>
      <button id="button-next" type="button"><Arrow /></button>
    </li>
  </ul>
</article>

<style>
  .carousel-container {
    width: 100%;
    display: grid;
    place-items: center;
    padding: 1em;
    position: relative;
  }

  .flex-wrapper-recent-stekjes {
    display: flex;
    overflow: auto;
    width: 100%;
    gap: 2em;
    white-space: nowrap;
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

  ul {
    list-style: none;
  }

  button {
    background: none;
    cursor: pointer;
    border: none;
  }

  .left-button {
    transform: rotate(180deg);
  }

  button {
    display: none;
  }

  :global(body.js-enabled button) {
    display: block !important;
  }

  @media screen and (min-width: 64rem) {
    .carousel-container {
      padding: 6em 0 0 0;
      width: 100%;
      display: grid;
      place-items: center;
    }

    .caroussel-buttons {
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

    @supports (animation-timeline: view()) {
      a {
        animation-timeline: view(inline);
        animation-name: animate-in-and-out;
        animation-range: entry - 10% contain 40%;
      }

      @keyframes animate-in-and-out {
        entry 0% {
          opacity: 0;
          transform: translateY(100%);
        }
        entry 100% {
          opacity: 1;
          transform: translateY(0);
        }

        exit 0% {
          opacity: 1;
          transform: translateY(0);
        }
        exit 100% {
          opacity: 0;
          transform: translateY(-100%);
        }
      }
    }
  }
</style>
