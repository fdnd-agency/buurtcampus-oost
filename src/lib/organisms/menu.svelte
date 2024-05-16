<script>
  import { Plantswaplogo, MenuIcon, CloseIcon, Navlink } from '$lib/index.js';
  import { onMount } from "svelte";

  onMount(() => {
    // @ts-ignore
    document
      .querySelector("a .menu-icon")
      .addEventListener("click", function (ev) {
        // @ts-ignore
        document.querySelector("nav a").classList.add("active");
        // @ts-ignore
        document.querySelector("nav a").focus();
        ev.preventDefault();
      });

    // @ts-ignore
    document
      .querySelector("nav .close-icon")
      .addEventListener("click", function (ev) {
        // @ts-ignore
        document.querySelector("nav a").classList.remove("active");
        document.body.focus();
        ev.preventDefault();
      });
  });
</script>

<header>
  <a href="/" class="logo">
    <Plantswaplogo />
  </a>

  <a class="menu-icon" href="#menu">
    <MenuIcon />
  </a>

  <nav id="menu">
    <ul role="menu">
      <li>  
        <Navlink href="/stekjes" title="Stekjes"> </Navlink>
      </li>
      <li>        
        <Navlink href="/zaden" title="Zaden"> </Navlink>
      </li>
      <li>        
        <Navlink href="/geveltuin" title="Geveltuin"> </Navlink>
      </li>
      <li>        
        <Navlink href="/agenda" title="Agenda"> </Navlink>
      </li>
      <li>        
        <Navlink href="/partners" title="Partners"> </Navlink>
      </li>
      <li>        
        <Navlink href="/contact" title="Contact"> </Navlink>
      </li>
    </ul>
    
    <a class="close-icon" href="/">
      <CloseIcon />
    </a>
  </nav>
</header>

<style>
  header {
    position: absolute;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    height: 6em;
    padding: 0 1.5em;
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

  nav .close-icon {
    background: none;
    color: var(--text-color);
    padding: 1.5em;
    position: absolute;
    top: 0;
    right: 0;
  }
  ul {
    list-style: none;
  }

  @supports selector(:target) {
    nav:target {
      display: block;
    }
  }

  /* nav.active {
    display: block;
  }
  */

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
    .menu-icon,
    .close-icon {
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

    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: end;
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
