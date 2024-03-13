<script>
  import Plantswaplogo from "../atoms/svg/plantswaplogo.svelte";
  import Hamburger from "../atoms/svg/hamburger.svelte";
  import Cross from "../atoms/svg/cross.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    document
      .querySelector("a .hamburger")
      .addEventListener("click", function (ev) {
        document.querySelector("nav a").classList.add("active");
        document.querySelector("nav a").focus();
        ev.preventDefault();
      });

    document
      .querySelector("nav .cross")
      .addEventListener("click", function (ev) {
        document.querySelector("nav a").classList.remove("active");
        document.body.focus();
        ev.preventDefault();
      });
  });
</script>

<header>
  <a href="/" class="logo" role="plantswaplogo">
    <Plantswaplogo />
  </a>

  <a class="hamburger" href="#hamburger" role="menumobile">
    <Hamburger />
  </a>

  <nav id="hamburger" role="navigation">
    <ul role="menu">
      <li><a href="/">Home</a></li>
      <li><a href="/stekjes_overzicht">Stekjes</a></li>
      <li><a href="/workshops">Workshops</a></li>
      <li><a href="/maken">De kast</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <a class="cross" href="#" role="close">
      <Cross />
    </a>
  </nav>
</header>

<style>
  header {
    position: absolute;
    z-index: 999;
    width: 96vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 1.5em;
  }

  nav {
    position: fixed;
    inset: 0;
    background: var(--background-color-light);
    display: none;
    animation: reveal-nav 0.25s ease-in forwards;
    padding: 2em;
    padding-top: 4em;
  }

  nav .cross {
    background: none;
    color: var(--text-color);
    padding: 1em;
    position: absolute;
    top: 0;
    right: 0;
  }

  .hamburger {
    margin-top: 1.3em;
  }

  ul a {
    font-size: 10vw;
    color: var(--background-color);
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  @supports selector(:target) {
    nav:target {
      display: block;
    }
  }

  nav.active {
    display: block;
  }

  @keyframes reveal-nav {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  /* Mediaquery's   */
  /* Desktop styling   */
  @media (min-width: 900px) {
    .hamburger,
    .cross {
      display: none;
    }

    nav {
      display: block;
      position: absolute;
      background: none;
      padding: none;
      top: -1.8em;
    }

    .logo {
      position: relative;
      z-index: 1;
    }

    ul a {
      font-size: 1em;
      color: var(--text-color);
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: end;
      margin-right: -3em;
      gap: 2em;
    }

    a:hover {
      color: var(--card-color-light);
    }
  }

  @media (min-width: 1400px) {
    nav {
      position: absolute;
    }
    ul {
      margin-bottom: 1em;
    }
  }
</style>
