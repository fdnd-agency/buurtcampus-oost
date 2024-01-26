<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    gsap.from(".wrapper", {
      delay: 2.3,
      duration: 1.5,
      ease: "Power4.easeOut",
    });

    gsap.to(".big-image", {
      duration: 2.5,
      scale: 1.1,
      ease: "Power4.easeOut",
    });
    gsap.to(".heading-words2", {
      delay: 1,
      duration: 1.5,
      y: 0,
      stagger: 0.2,
      ease: "Power4.easeOut",
    });

    gsap.from(".sub-gsap", {
      delay: 2.6,
      duration: 1.5,
      y: 500,
      ease: "Power4.easeOut",
    });

    gsap.to(".wrapper", {
      scrollTrigger: {
        trigger: ".wrapper",
        scrub: 1,
        start: "top",
        end: "center",
        // markers: true,
      },
      borderRadius: "+=5%",
      y: -100,
    });
  });
</script>

<section>
  <div class="wrapper">
    <img class="big-image" src="https://images.unsplash.com/photo-1598764557991-b9f211b73b81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" alt="">
    <div class="big-image-overlay" />
    <div class="txt-wrapper">
      <!-- <h1>
        <div class="inline-block2">
          <span class="heading-words2">Neem contact </span> <br />
          <span class="heading-words2 playfair">sinds </span>
          <span class="heading-words2 nineteen">met ons op </span>
        </div>
      </h1> -->
    </div>
  </div>
</section>

<style>
  section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0em;
    z-index: 2;
    overflow: hidden;
  }

  .big-image {
    object-fit: cover;
    height: 70vh;
    width: 100%;
    clip-path: inset(
      0 calc((1 - var(--progress)) * 20%) 0 calc((1 - var(--progress)) * 20%)
    );
  }

  .wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    overflow: hidden;
  }

  .big-image-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4066001400560224) 100%);
opacity: .1;

  }

  .txt-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: flex-end;
    z-index: 200;
    flex-direction: column;
  }

  h1 {
    position: relative;
    font-size: 5vw;
    font-weight: 400;
    z-index: 10;
    color: var(--main-offwhite);
    line-height: 1em;
    margin-left: 2rem;
    margin-bottom: 2rem;
  }

  .inline-block2 {
    clip-path: polygon(0 0, 220% 0, 220% 100%, 0% 100%);
  }

  .heading-words2 {
    display: inline-block;
    transform: translateY(400px);
  }

  .playfair {
    font-family: "Playfair Display", serif;
  }

  .nineteen {
    /* font-size: 10vw; */
    font-weight: 900;
    color: var(--main-bright);
  }

  @media screen and (max-width: 1122px) {
    section {
      overflow: hidden;
    }
  }

  @media screen and (max-width: 700px) {
    section {
      overflow: hidden;
    }
    
    h1 {
      font-size: 14vw;
      margin-left: 2rem;
    }

    .nineteen {
      font-size: 15vw;
      font-weight: 900;
      color: var(--main-bright);
    }

    .txt-wrapper {
      justify-content: center;
    }
  }
</style>










