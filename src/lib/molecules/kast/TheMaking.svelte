<script>
  import img1 from "$lib/assets/tweede.avif";
</script>

<section>
  <div class="wrapper-block">
    <div class="left-content">
      <h3>The making of... de kast</h3>
      <p>
        De eerste Buurtcampus stekjeskast is gemaakt door kinderen van de Maakplaats 021 in de OBA Javaplein. Hier leren kinderen uit de buurt vanaf 8 jaar onder anderen 3D-printen, lasersnijden, programmeren of muziekinstrumenten maken.
 
      </p>
    </div>
    <div class="right-content">
      <img src={img1} alt="" />
    </div>
  </div>
</section>

<style>
  section {
    position: sticky;
    top: 0;
    padding: 2em;
    height: 90vh;
    width: 100%;
    overflow: hidden;
    color: var(--main-offwhite);
    color: rgb(255, 217, 184);
    margin-bottom: 55vh;
  }

  .wrapper-block {
    height: 100%;
    width: 100%;
    background-color: rgb(73, 27, 2);
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
