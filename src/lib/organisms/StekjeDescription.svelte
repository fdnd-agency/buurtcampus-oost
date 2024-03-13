<script>
  export let data;
  import VectorPlant from "$lib/assets/vectorplant.svg";
</script>

<section class="container">
  <div class="stekje-container">
    <img id="one" src={VectorPlant} alt="incon plant" />
    <div class="left">
      <div class="beschrijving-tag">
        <svg
          width="25"
          height="25"
          viewBox="0 0 23 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.5 8.16988C23.8333 10.0944 23.8333 14.9056 20.5 16.8301L7.74999 24.1913C4.41666 26.1158 0.249999 23.7102 0.249999 19.8612L0.25 5.13877C0.25 1.28977 4.41667 -1.11584 7.75 0.808657L20.5 8.16988Z"
            fill="#F26F21"
          />
        </svg>
        <h2>Beschrijving</h2>
      </div>
      <p>{data.stekje.beschrijving}</p>
    </div>
    <div class="right">
      <details>
        <summary
          ><span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-world"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#4e7141"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"
              /><path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" /><path
                d="M11.5 3a17 17 0 0 0 0 18"
              /><path d="M12.5 3a17 17 0 0 1 0 18" /></svg
            ></span
          >Landherkomst</summary
        >
        <div class="content">
          <p>{data.stekje.landvanherkomst}</p>
        </div>
      </details>

      <details>
        <summary
          ><span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-seeding"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#4e7141"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3"
              /><path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" /><path
                d="M12 20l0 -10"
              /></svg
            ></span
          >Voeding</summary
        >
        <div class="content">
          <p>{data.stekje.voeding}</p>
        </div>
      </details>

      <details>
        <summary
          ><span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-temperature"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#4e7141"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5"
              /><path d="M10 9l4 0" /></svg
            ></span
          >Temperatuur</summary
        >
        <div class="content">
          <p>{data.stekje.temperatuur}</p>
        </div>
      </details>

      <details>
        <summary
          ><span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-skull"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#4e7141"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M12 4c4.418 0 8 3.358 8 7.5c0 1.901 -.755 3.637 -2 4.96l0 2.54a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-2.54c-1.245 -1.322 -2 -3.058 -2 -4.96c0 -4.142 3.582 -7.5 8 -7.5z"
              /><path d="M10 17v3" /><path d="M14 17v3" /><path
                d="M9 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
              /><path d="M15 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg
            ></span
          >Giftig</summary
        >
        <div class="content">
          <p>{data.stekje.giftig}</p>
        </div>
      </details>

      <details>
        <summary
          ><span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-plant-off"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#4e7141"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M17 17v2a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4h8"
              /><path
                d="M11.9 7.908a6 6 0 0 0 -4.79 -4.806m-4.11 -.102v2a6 6 0 0 0 6 6h2"
              /><path
                d="M12.531 8.528a6 6 0 0 1 5.469 -3.528h3v1a6 6 0 0 1 -5.037 5.923"
              /><path d="M12 15v-3" /><path d="M3 3l18 18" /></svg
            ></span
          >Verpotten</summary
        >
        <div class="content">
          <p>{data.stekje.verpotten}</p>
        </div>
      </details>

      <details>
        <summary
          ><span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-droplet-half-2-filled"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M13.905 2.923l.098 .135l4.92 7.306a7.566 7.566 0 0 1 1.043 3.167l.024 .326c.007 .047 .01 .094 .01 .143l-.002 .06c.056 2.3 -.944 4.582 -2.87 6.14c-2.969 2.402 -7.286 2.402 -10.255 0c-1.904 -1.54 -2.904 -3.787 -2.865 -6.071a1.052 1.052 0 0 1 .013 -.333a7.66 7.66 0 0 1 .913 -3.176l.172 -.302l4.893 -7.26c.185 -.275 .426 -.509 .709 -.686c1.055 -.66 2.446 -.413 3.197 .55zm-2.06 1.107l-.077 .038l-.041 .03l-.037 .036l-.033 .042l-4.863 7.214a5.607 5.607 0 0 0 -.651 1.61h11.723a5.444 5.444 0 0 0 -.49 -1.313l-.141 -.251l-4.891 -7.261a.428 .428 0 0 0 -.5 -.145z"
                stroke-width="0"
                fill="#4e7141"
              /></svg
            ></span
          >Watergeven</summary
        >
        <div class="content">
          <p>{data.stekje.watergeven}</p>
        </div>
      </details>

      <details>
        <summary
          ><span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-sun-high"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#4e7141"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"
              /><path d="M6.343 17.657l-1.414 1.414" /><path
                d="M6.343 6.343l-1.414 -1.414"
              /><path d="M17.657 6.343l1.414 -1.414" /><path
                d="M17.657 17.657l1.414 1.414"
              /><path d="M4 12h-2" /><path d="M12 4v-2" /><path
                d="M20 12h2"
              /><path d="M12 20v2" /></svg
            ></span
          >Zonlicht</summary
        >
        <div class="content">
          <p>{data.stekje.zonlicht}</p>
        </div>
      </details>

      <details>
        <summary
          ><span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-plant"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#4e7141"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
                d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z"
              /><path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" /><path
                d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3"
              /><path d="M12 15l0 -6" /></svg
            ></span
          >Stekken</summary
        >
        <div class="content">
          <p>{data.stekje.stekken}</p>
        </div>
      </details>
    </div>
  </div>
</section>

<style>
  /*  Algemene stijl voor de section  */

  section {
    position: relative;
    width: 100%;
    background-color: var(--background-color);
  }

  /*  Stijl voor grote koppen  */

  h2 {
    color: var(--background-color);
    font-size: 30px;
  }

  /*  Stijl voor tekst in de linker kolom  */

  .left p {
    font-size: 16px;
    margin-top: 15px;
    line-height: 1.6;
  }

  /* SVG'S Styling */
  span {
    padding: 5px 4px 0 0;
  }

  /*  Container styling  */

  .container {
    padding: 2rem;
  }

  /*  Styling voor het hoofdcontainer van het stekje  */

  .stekje-container {
    position: relative;
    background-color: #f9e9c2;
    width: 100%;
    border-radius: var(--bradius);
    display: flex;
    padding: 2rem;
    justify-content: space-between;
  }

  /* Stijl voor de tag bij de beschrijving */

  .beschrijving-tag {
    display: flex;
    align-items: center;
  }

  .beschrijving-tag svg {
    margin-right: 10px;
  }

  /* Stijl voor de svg */

  #one {
    position: absolute;
    bottom: 0;
    left: 5rem;
    width: 350px;
    height: 350px;
  }

  /*Stijl voor de rechter kolom */

  .right {
    width: 50%;
    padding: 0;
  }

  /*  Stijl voor de linker kolom  */

  .left {
    position: sticky;
    top: 1rem;
    width: 50%;
    height: 100%;
    padding-right: 5%;
    overflow: hidden;
  }

  /* Algemene stijl voor details en summary */

  details {
    width: 100%;
    border-radius: var(--bradius);
    margin-bottom: 10px;
  }

  /* Stijl voor het '+'-teken vóór de summary */

  /* summary::before {
    content: "+";
    color: black;
    font-size: 25px;
    margin-right: 5px;
    margin-bottom: 5px;
  } */

  /* Stijl voor details[open] om de summary::before aan te passen */

  /* details[open] summary::before {
    content: "-";
  } */

  /*Stijl voor de summary */

  summary {
    background-color: #fbc980;
    transition: background-color 0.3s;
    border-radius: var(--bradius);
    display: flex;
    align-items: center;
    color: var(--background-color);
    text-transform: uppercase;
    font-weight: 600;
    padding: 15px;
    cursor: pointer;
  }

  /* Styling voor geopende accordion "border radius" */

  details[open] summary {
    border-radius: 15px 15px 0 0;
  }

  /*Accordion hover effect */

  summary:hover {
    background-color: #f5c275;
  }

  /* Stijl voor geopende details */

  details[open] .content {
    max-height: 500px;
    border-radius: 0 0 15px 15px;
    padding: 12px;
    background-color: #fbc980;
  }

  /* Media Query voor schermen kleiner dan 768px */

  @media screen and (max-width: 768px) {
    .stekje-container {
      display: grid;
      align-content: space-evenly;
    }

    .left,
    .right {
      position: static;
      height: fit-content;
      width: 100%;
    }

    h2 {
      font-size: 25px;
    }

    #one {
      display: none;
    }

    details {
      margin-top: 20px;
    }
  }
</style>
