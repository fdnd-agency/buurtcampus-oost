<header>
    <!-- Logo plantswap   -->
   <a href="/" class="logo" role="plantswaplogo">
     <Plantswaplogo/>
   </a>
 
    <!-- Hamburger menu   -->
   <input class="side-menu" type="checkbox" id="side-menu" />
   <label for="side-menu" tabindex="0"><span></span></label>
 
    <!-- Menu (nav) links  -->
   <nav role="navigation">
     <ul role="menu">
       <li><a href="/">Home</a></li>
       <li><a href="/stekjes_overzicht">Stekjes</a></li>
       <li><a href="/workshops">Workshops</a></li>
       <li><a href="/maken">De kast</a></li>
       <li><a href="/contact">Contact</a></li>
     </ul>
   </nav>
 </header>
 
 <style>
   a {
     text-decoration: none;
   }
 
   ul {
     list-style: none;
   }
 
   header {
     position: absolute;
     top: 0;
     width: 100%;
     height: 100%;
     z-index: 99;
   }
 
   .logo {
     margin-left: 10px;
   }
 
   nav {
     width: 100%;
     height: 100%;
     top: 0;
     position: fixed;
     overflow: hidden;
     background-color: var(--background-color-light);
     max-height: 0;
     transition: max-height 0.5s ease-out;
   }
 
   ul a {
     display: block;
     padding: 0em 1em;
     color: var(--background-color);
     font-weight: 400;
     font-size: 8vw;
     margin-top: 2rem;
   }
 
   /* Flaot Later checken */
   label {
     position: relative;
     cursor: pointer;
     float: right;
     padding: 40px 20px;
     z-index: 2;
   }
 
   label span {
     background: var(--text-color);
     display: block;
     height: 2px;
     position: relative;
     width: 24px;
   }
 
   /* Veranderen naar svg */
   label span::before,
   label span::after {
     background: var(--text-color);
     content: "";
     display: block;
     height: 100%;
     position: absolute;
     transition: all 0.2s ease-out;
     width: 100%;
   }
 
   label span::before {
     top: 5px;
   }
 
   label span::after {
     top: -5px;
   }
 
   .side-menu {
     display: none;
   }
 
   .side-menu:checked ~ nav {
     max-height: 100%;
   }
 
   .side-menu:checked ~ label span {
     background: transparent;
   }
 
   .side-menu:checked ~ label span::before {
     transform: rotate(-45deg);
     top: 0;
   }
 
   .side-menu:checked ~ label span::after {
     transform: rotate(45deg);
     top: 0;
   }
 
   @media (min-width: 900px) {
     nav {
       max-height: none;
       right: 1em;
       position: relative;
       float: right;
       width: fit-content;
       background-color: transparent;
     }
 
     ul li {
       float: left;
     }
 
     ul a:hover {
       background-color: transparent;
       color: var(--card-color-light);
     }
 
     label {
       display: none;
     }
 
     ul a {
       color: var(--text-color);
       font-weight: 500;
       font-size: 1em;
     }
   }
 </style>
 

<!-- 
 <script>
  import Plantswaplogo from "../atoms/svg/plantswaplogo.svelte";

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      toggleMenu();
    }
  }
</script>

<header>
  Logo plantswap
  <a href="/" class="logo" role="plantswaplogo">
    <Plantswaplogo />
  </a>

  Hamburger menu
  <input
    class="side-menu"
    type="checkbox"
    id="side-menu"
    bind:checked={isMenuOpen}
  />
  <label
    for="side-menu"
    on:keydown={handleKeyPress}
    tabindex="0"
    role="button"
    aria-label="menu"
    ><span></span>
  </label>

  Menu (nav) links
  <nav role="navigation">
    <ul role="menu">
      <li><a href="/">Home</a></li>
      <li><a href="/stekjes_overzicht">Stekjes</a></li>
      <li><a href="/workshops">Workshops</a></li>
      <li><a href="/maken">De kast</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>

<style>
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
  }

  .logo {
    margin-left: 10px;
  }

  nav {
    width: 100%;
    height: 100%;
    top: 0;
    position: fixed;
    overflow: hidden;
    background-color: var(--background-color-light);
    max-height: 0;
    transition: max-height 0.5s ease-out;
  }

  nav .logo:focus {
    outline: 2px solid white;
    outline-offset: 4px;
  }

  nav li a:focus {
    background-color: rgb(226, 81, 81);
    color: red;
  }

  .side-menu:focus {
    outline: 2px solid red;
    outline-offset: 4px;
  }

  nav ul li a:focus {
    background-color: white;
    color: white;
  }

  nav span:focus {
    background-color: red;
  }

  nav label:focus {
    outline: 2px solid red;
    outline-offset: 4px;
  }

  ul a {
    display: block;
    padding: 0em 1em;
    color: var(--background-color);
    font-weight: 400;
    font-size: 8vw;
    margin-top: 2rem;
  }

  Flaot Later checken 

  label {
    position: relative;
    cursor: pointer;
    float: right;
    padding: 40px 20px;
    z-index: 2;
  }

  label span {
    background: var(--text-color);
    display: block;
    height: 2px;
    position: relative;
    width: 24px;
  }

  Veranderen naar svg 
  label span::before,
  label span::after {
    background: var(--text-color);
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  label span::before {
    top: 5px;
  }

  label span::after {
    top: -5px;
  }

  .side-menu {
    display: none;
  }

  .side-menu:checked ~ nav {
    max-height: 100%;
  }

  .side-menu:checked ~ label span {
    background: transparent;
  }

  .side-menu:checked ~ label span::before {
    transform: rotate(-45deg);
    top: 0;
  }

  .side-menu:checked ~ label span::after {
    transform: rotate(45deg);
    top: 0;
  }

  @media (min-width: 900px) {
    nav {
      max-height: none;
      right: 1em;
      position: relative;
      float: right;
      width: fit-content;
      background-color: transparent;
    }

    ul li {
      float: left;
    }

    ul a:hover {
      background-color: transparent;
      color: var(--card-color-light);
    }

    label {
      display: none;
    }

    ul a {
      display: block;
    }

    ul a {
      color: var(--text-color);
      font-weight: 500;
      font-size: 1em;
    }
  }
</style> 
