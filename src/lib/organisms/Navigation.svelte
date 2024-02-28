<script>
  import Plantswaplogo from "../atoms/svg/plantswaplogo.svelte";
  import Hamburger from "../atoms/svg/hamburger.svelte";
  import Cross from "../atoms/svg/cross.svelte";
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
    display: flex;
    justify-content: space-between;
    width: 96vw;
    align-items: center;
    z-index: 999;
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

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  ul a{
    font-size: 10vw;
    color: var(--background-color);
  }

  @media (min-width: 900px) {
    .logo{
      margin-bottom: 9em;
    }

    nav {
      position: relative;
      display: flex;
      margin-bottom: 1em;
      background: none;
    }

    a{
      text-decoration: none;
      color: var(--text-color);
    }

    ul{
      list-style: none;
      flex-direction: row;
      width: 100%;
    }

    ul a{
      font-size: 1em;
      color: var(--text-color);
    }

    .hamburger,
    .cross {
      display: none;
    }
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
</style>
