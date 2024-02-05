<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  onMount(() => {
    let menuButton = document.querySelector(".menu-button");
    let closeMenu = document.querySelector(".close-button");
    let mm = gsap.matchMedia();

    let tl = gsap.timeline({ paused: true, reversed: true });
    tl.to(".menu-wrapper", {
      width: "100%",
      borderRadius: "0em",
      duration: 1.2,
      ease: "Expo.easeInOut",
    });

    mm.add("(max-width: 700px)", () => {
      tl.to(
        ".menu-wrapper",
        {
          width: "100%",
          borderRadius: "0em",
          duration: 1.2,
          ease: "Expo.easeInOut",
          delay: 0,
        },
        "<"
      );
    });

    tl.to(
      ".menu-button",
      { opacity: 0, duration: 0.001, ease: "Expo.easeInOut", delay: 0 },
      "<"
    );
    ".close-button",
      { opacity: 1, duration: 0.001, ease: "Expo.easeInOut", delay: 1 },
      "<";
    tl.to(
      ".menu-wrapper",
      {
        height: "100svh",
        opacity: 1,
        duration: 1.2,
        ease: "Expo.easeOut",
        delay: 0.1,
        y: "0",
      },
      "<"
    );
    tl.to(
      ".menu-text-gsap",
      { y: 0, duration: 2, ease: "Expo.easeOut", delay: 0.6 },
      "<"
    );

    menuButton.addEventListener("click", function () {
      if (tl.reversed()) {
        tl.timeScale(1.5).play();
      } else {
        tl.timeScale(1.5).reverse();
      }
    });

    closeMenu.addEventListener("click", function () {
      if (tl.reversed()) {
        tl.timeScale(1.5).play();
      } else {
        tl.timeScale(1.5).reverse();
      }
    });
  });
</script>

<section>
  <button class="menu-button">
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1" x2="17" y2="1" stroke="" stroke-width="2" />
      <line y1="7.61133" x2="17" y2="7.61133" stroke="" stroke-width="2" />
      <line y1="14.2222" x2="17" y2="14.2222" stroke="" stroke-width="2" />
    </svg>
  </button>
  <div class="menu-wrapper">
    <button class="close-button">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1.19685"
          y1="1.29289"
          x2="13.2177"
          y2="13.3137"
          stroke=""
          stroke-width="2"
        />
        <line
          x1="1.29289"
          y1="13.3139"
          x2="13.3137"
          y2="1.29307"
          stroke=""
          stroke-width="2"
        />
      </svg>
    </button>
    <nav>
      <ul>
        <li>
          <a class="menu-text-gsap" href="/">Home</a>
        </li>
        <li>
          <a class="menu-text-gsap" href="/stekjes_overzicht  ">Stekjes</a>
        </li>
        <li>
          <a class="menu-text-gsap" href="/workshops">Workshops</a>
        </li>
        <li>
          <a class="menu-text-gsap contact-link" href="/maken">De Kast</a>
        </li>
        <li>
          <a class="menu-text-gsap contact-link" href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</section>

<style>
  .menu-wrapper {
    position: fixed;
    right: 0;
    top: 0;
    height: 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color-light);
    padding: 1.1em;
    z-index: 1000;
    overflow: hidden;
    opacity: 1;
    transform: translateY(-3em);
    z-index: 99999;
  }

  .menu-button {
    position: fixed;
    display: none;
    top: 1.5em;
    right: 1em;
    background-color: #ffffff00;
    border: 0;
    transition: transform 0.2s;
    padding: 1em;
    transform: scale(1.2);
    stroke: var(--background-color-light);
    z-index: 99999;
  }

  .close-button {
    stroke: var(--background-color);
    position: fixed;
    top: 1.5em;
    right: 1em;
    opacity: 1;
    z-index: 2000;
    border: 0;
    background-color: #ffffff00;
    transform: scale(1.1);
    padding: 1em;
    z-index: 99999;
    cursor: pointer;
  }

  nav li {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: baseline;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  a {
    text-decoration: none;
    color: var(--background-color);
  }

  nav a {
    font-size: 5em;
    transform: translateY(-130%);
    transition: margin 0.2s;
  }

  svg {
    pointer-events: none;
  }

  @media screen and (max-width: 1122px) {
    .menu-wrapper {
      top: 0;
      right: 0;
      display: block;
    }

    .menu-button {
      display: block;
    }
  }

  @media screen and (max-width: 700px) {
    .menu-wrapper {
      top: 0;
      right: 0;
      display: block;
    }

    .menu-button {
      display: block;
    }

    nav {
      margin-top: 25%;
    }

    nav a {
      margin-top: 3%;
      font-size: 12vw;
    }

    .menu-button {
      z-index: 2000;
    }

    .close-button {
      z-index: 2000;
    }
  }
</style>
