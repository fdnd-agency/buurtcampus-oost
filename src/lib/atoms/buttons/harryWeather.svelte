<script>
    import { onMount } from 'svelte'; 
    import Harry from '$lib/atoms/harry.svelte'; // Harry toevoegen

    export let textTemp;

    // OpenweatherAPI
    let city = 'Amsterdam';
    let weather; 

    // Harry
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
        <blockquote>“{sentence}<span class="home_page">{textTemp}</span>”</blockquote>
    </div>
    <Harry {mood} {environment} {textTemp}/>
</aside>
{/if}
