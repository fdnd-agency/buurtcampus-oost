<script>
    import { onMount } from 'svelte'; 
    import Harry from '$lib/atoms/harry.svelte'; // Harry toevoegen

    let city = 'Amsterdam';
    let weather; 
    let mood; 
    let environment; 
    let sentence;

    async function getWeather() {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52d2a223715e49a67159446b130d4482&lang=nl&units=metric`
        );
        weather = await res.json();

        if (weather.main.temp > 22) {
            mood = 'blij';
            environment = 'fel';
            sentence = `Het is ${weather.main.temp.toFixed(1)}°C, perfect om in de tuin te werken!`
        } else if (weather.main.temp > 10){
            mood = 'blij';
            environment = 'neutraal';
            sentence = `Het is ${weather.main.temp.toFixed(1)}°C, aan de frisse kant nog`
        } else {
            mood = 'neutraal';
            environment = 'koud';
            sentence = `Het is ${weather.main.temp.toFixed(1)}°C, brrrrr!`
        }
    }

    onMount(() => {
        getWeather(); 
    });
</script>

{#if weather}
<aside>
    <div class="weather-bubble">
        <blockquote>“{sentence}”</blockquote>
    </div>
    <Harry {mood} {environment}/>
</aside>
{/if}

<style>
    
    aside {
        position: absolute;
        right: 0;
        color: black;
        z-index: 999;
    }

    .weather-bubble {
        position: relative;
        padding: .5rem;
        background-color: white;
        max-width: 12rem;
        border-radius: 0.5rem;
        margin-bottom: .75rem;
        filter: drop-shadow(1px 0px 2px rgb(0 0 0 / .25));
        opacity: 0; 
        transform: scale(0.5);
        animation: popUp 0.5s ease forwards;
        animation-delay: 1400ms; 
        text-align: center;
    }

    .weather-bubble:after {
        content: '';
        position: absolute;
        bottom: -8px;
        right: 40px;
        height: 20px;
        width: 20px;
        background: inherit;
        transform: rotate(45deg);
        border-radius: 2px;
        z-index: -1;
    }

    .weather-bubble blockquote {
        font-style: italic;
        border-left: 4px solid rgba(255, 255, 255, 0.6);
    }

    @keyframes popUp {
    0% {
        opacity: 0;
        transform: scale(0.5); /* Small at first */
    }
    100% {
        opacity: 1;
        transform: scale(1); /* Full size */
    }
}
</style>
