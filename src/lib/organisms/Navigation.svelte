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
      <a class="cross" href="#" role="close">
        <Cross />
      </a>
    </ul>
  </nav>
</header>

<style>
  header {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  nav .cross {
    background: black;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
  }

  nav {
    position: fixed;
    inset: 0;
    background: hotpink;
    display: none;
    animation: reveal-nav 0.25s ease-in forwards;
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
