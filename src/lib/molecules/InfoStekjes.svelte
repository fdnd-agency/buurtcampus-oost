<script>
  import Vector from '$lib/assets/vector.svg';
  import VectorPlant from '$lib/assets/vectorplant.svg';
</script>

<div class="info-Stekjes">
  <div class="vector">
    <img src={Vector} alt="icon info tekst" />
  </div>

  <p>
    Heb jij een of meerdere plantenstekjes over en zou je die graag
    willen ruilen voor een nieuwe plantje? Bekijk hieronder ons
    aanbod.
  </p>

  <div class="info-paragraph">
    <img id="one" src={VectorPlant} alt="incon plant" />
    <img id="two" src={VectorPlant} alt="incon plant" />
    <img id="three" src={VectorPlant} alt="incon plant" />
  </div>
</div>

<style>
  .info-Stekjes {
    position: relative;
    display: flex;
    gap: var(--padding);
    background-color: var(--background-color-light);
    border-radius: var(--bradius);
    width: 25%;
    height: 30vh;
    padding: var(--padding);
    overflow: hidden;
    margin-top: 1rem;
  }

  .info-Stekjes p {
    z-index: 10;
  }

  .info-paragraph {
    width: 60%;
  }

  #one {
    position: absolute;
    top: 10rem;
    right: 18rem;
  }

  #two {
    position: absolute;
    top: -150px;
    right: 10rem;
    transform: rotate(250deg);
  }
  #three {
    position: absolute;
    top: 6rem;
    right: -7rem;
    transform: rotate(-10deg);
  }

  @media (max-width: 425px) {
    .info-Stekjes {
      width: 100%;
    }
  }

  @media (min-width: 425px) {
    .info-Stekjes {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .info-Stekjes {
      width: 100%;
      justify-content: center;
    }
  }

  @media (min-width: 1024px) {
    .info-Stekjes {
      width: 24%;
      min-height: 60vh;
    }
  }
</style>
