<script>
  import img from "$lib/assets/laatste.avif";
</script>

<section>
  <div class="wrapper-block">
    <div class="left-content">
      <h3>En nu wordt de kast met liefde gebruikt!</h3>
      <p>
        Tijdens de Groendag van de OBA Linnaeus in de zomer van 2023 is de kast
        officieel geopend. Het idee is om elke OBA waar een Buurtcampus
        gevestigd is een eigen stekjeskast gemaakt door kinderen uit de buurt te
        geven, zodat in alle stadsdelen van Amsterdam buurtbewoners gratis
        stekjes kunnen ruilen.
      </p>
    </div>
    <div class="right-content">
      <img src={img} alt="" />
    </div>
  </div>
</section>

<style>
  section {
    position: sticky;
    top: 6em;
    padding: 2em;
    height: 90vh;
    width: 100%;
    color: rgb(59, 89, 62);
    margin-bottom: 55vh;
  }

  .wrapper-block {
    height: 100%;
    width: 100%;
    background-color: rgb(255, 217, 184);
    display: flex;
    border-radius: 1em;
    padding: 2em;
  }

  .left-content {
    width: 100%;
  }

  .right-content {
    height: 100%;
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 1em;
  }

  h3 {
    font-size: 5em;
    font-weight: 900;
    max-width: 90%;
    line-height: 1em;
    margin-bottom: 1.2rem;
  }

  p {
    max-width: 75%;
  }

  @media screen and (max-width: 1122px) {
  }

  @media screen and (max-width: 700px) {
    h3 {
      font-size: 2em;
    }

    p {
      max-width: 100%;
      padding-bottom: 1em;
	  line-height: 1em;
    }

    img {
      height: 60%;
      width: 100%;
      object-fit: cover;
      border-radius: 1em;
    }

    .wrapper-block {
      flex-direction: column;
      padding: 1em;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
