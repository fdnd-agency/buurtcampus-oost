<script>
    import { onMount } from 'svelte'; 
    let city = 'Anadyr';
    let weather = null;
        
    
    async function getWeather() {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52d2a223715e49a67159446b130d4482&lang=nl&units=metric`
        );
        weather = await res.json();
    }

    onMount(() => {
        getWeather(); 
    });

</script>
{#if weather}
<button>
    {weather.main.temp.toFixed(1)}°C | 
    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
</button>
{/if}

<style>
    button {
        position: fixed;
        bottom: 0;
        left: 0;
        border-radius: 0 1rem 0 0;
        z-index: 12000000000;
        border: none;
        background-color: var(--main-color-green);
        width: 6rem;
        height: 2.5rem;
        color: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

    button img {
        width: 2.5rem;
        aspect-ratio: 1/1;
    }
</style>