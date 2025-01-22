<script>
    export let mood = "twerk"; 
    
    import Harry from '$lib/atoms/harry.svelte'; 
  </script>
  
  <main>
        <div class="harry-container">
        <Harry {mood} />
        </div>
        <p>Oeps! Er is iets misgegaan :&#40;</p>
        <a href="/">Terug naar home</a>
  </main>
  
  <style>
    main {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        background-color: var(--main-color-beige);
        height: 50vh;
        min-height: 20rem;
    }
  
    .harry-container {
        margin-bottom: 2rem;
        display: flex;
        justify-content: center;
    }
  </style>
  