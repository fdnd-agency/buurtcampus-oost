<script>
    export let data;
    import { HarryWeather, KenmerkenStekjes } from '$lib/index.js';
    
    let mood; 
    let environment; 
</script>

<header class="stekjes_detail">
  <div class="overlay"></div>
  <HarryWeather textTemp={data.stekje.absoluteTemperatuur}, name={data.stekje.naam} />
  <img src="{data.stekje.fotos[0].url}" alt="{data.stekje.naam}" width="100%" height="20%" class="header" loading="lazy">
</header>
  
<section class="container">
  <div class="stekje-container">
    <article>
        <h1>{data.stekje.naam}</h1>
        <p>{data.stekje.beschrijving}</p>
    </article>
    <KenmerkenStekjes {data} />
  </div>
</section>
  
<style>
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 40vh;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0.1) 100%);
    } 

   .header{
      height: 40vh ;
      object-fit: cover;
      margin: -1em 0;
    } 

    section {
      position: relative;
      width: 100%;
      background-color: var(--main-color-green);
      margin: 0;
      overflow-x: hidden;
    }
  
    h1 {
      color: var(--main-color-brown);
      font-family: var(--header-font);
		  font-size: 2em;
    }

    h1::before {
      content: url('/assets/orangeArrow.svg');
      margin-right: .625em;
    }

    .container {
      padding: 2em;
    }

    .stekjes_detail {
      position: relative;
      width: 100%;
      background-color: var(--main-color-green);
      margin: 0;
      overflow: hidden;
    }

    .stekje-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-gap: 2rem;
      width: 100%;
      background-color: #f9e9c2;
      border-radius: var(--border-bigCard);
      padding: 2em;
    }
    article p {
      margin-top: 1em;
    }

    @media screen and (max-width: 32em) {
      .container {
        padding: 2em 1em;
      }

      .stekje-container {
        padding: 1.5em;
      }
    }
</style>