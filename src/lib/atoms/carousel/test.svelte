<script>
    export let data;
    import { onMount } from 'svelte';
  
    // Voeg hier je JavaScript-functie toe
    function scrollLeftOrRight(uiEvent) {
      const carouselElement = document.querySelector('.carousel');
      const scrollWidth = carouselElement.scrollWidth;
      const offsetWidth = carouselElement.offsetWidth;
      const scrollLeft = carouselElement.scrollLeft;
      const scrollXBy = (uiEvent.target.classList.contains('left-arrow') ? -1 : 1) * offsetWidth;
      
      if (scrollXBy < 0 && scrollLeft == 0) {
        // Als we bij de eerste afbeelding zijn, ga dan naar de laatste
        carouselElement.scrollTo({
          left: scrollWidth - offsetWidth,
          behavior: 'smooth'
        });
      } else if (scrollXBy > 0 && Math.abs(scrollWidth - (scrollLeft + offsetWidth)) <= 1) {
        // Als we bij de laatste afbeelding zijn, ga dan naar de eerste
        carouselElement.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      } else {
        carouselElement.scrollBy({
          left: scrollXBy,
          behavior: 'smooth'
        });
      }
      // Volg de <a href=""> niet als we hier zijn gekomen..
      uiEvent.preventDefault();
      
      // Update de actieve indicator
      updateActiveIndicator();
    }
  
    // Functie om de actieve indicator bij te werken
    function updateActiveIndicator() {
      const carouselElement = document.querySelector('.carousel');
      const scrollLeft = carouselElement.scrollLeft;
      const scrollWidth = carouselElement.scrollWidth;
      const offsetWidth = carouselElement.offsetWidth;
      const totalItems = Math.round(scrollWidth / offsetWidth);
      const activeIndex = Math.round(scrollLeft / scrollWidth * totalItems);
  
      const indicator = document.querySelector('.carousel-indicator-span');
      // Reset alle indicatoren
      const indicators = indicator.querySelectorAll('.carousel-indicator-span-span');
      indicators.forEach((indicator, index) => {
        indicator.classList.remove('is-active');
      });
  
      // Zet de actieve indicator
      indicators[activeIndex].classList.add('is-active');
    }
  </script>
  
  
  <h2>Wensen</h2>
  {#if data}
    <section class="carousel-container">
      <!-- Previous button -->
      <a href="#" class="carousel-link left-arrow"on:click={scrollLeftOrRight}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="carousel-arrow">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </a>
      
      <div class="carousel">
        <!-- Carousel items -->
        <div class="carousel-inner">
          {#each data.wishes as wish}
            <div class="carousel-item">
              <img class="carousel-image" src={wish.image.url} alt={wish.heading} decoding="async" width="150px" height="150px" loading="lazy"/>
              <div class="carousel-text">
                <a href={`wens/${wish.id}`}>
                  <h3>{wish.heading}</h3>
                </a>
                <p>{wish.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
      
      <!-- Next button -->
      <a href="#" class="carousel-link right-arrow"on:click={scrollLeftOrRight}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="carousel-arrow">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </a>
      
      <!-- Carrousel indicator -->
      <div class="carousel-indicator">
        <span class="carousel-indicator-span">
          {#each data.wishes as wish, index}
            <span class="carousel-indicator-span-span {index === 0 ? 'is-active' : ''}"></span>
          {/each}
        </span>
      </div>
    </section>
  {:else}
    <p>Loading...</p>
  {/if}