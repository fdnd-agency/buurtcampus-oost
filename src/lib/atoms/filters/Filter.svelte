<script>
  export let data;
  import { onMount } from 'svelte';

  console.log(data);

  let selected = ['makkelijk', 'uitdagend'];
  const onderhouds = ['makkelijk', 'uitdagend'];
	
  let filterdStekjes = data.stekjes;

  console.log(filterdStekjes);

  function filtdStekjes() {
    if (selected.length > 0) {
      filterdStekjes = data.stekjes.filter((ond) => {
        return selected.some((sel) => ond.onderhoud.toLowerCase().includes(sel.toLowerCase()));
      });
    } else {
      filterdStekjes = data.stekjes;
    }
  }
</script>


<form on:submit|preventDefault={filtdStekjes}>
  <label for="onderhoud">Groene Vingers</label>
  <select bind:value={selected} on:change={filtdStekjes} multiple>
    <option value="">alle</option>
    {#each onderhouds as onderhoud}
      <option value={onderhoud}>{onderhoud}</option>
    {/each}
  </select>
</form>


<section>
	{#each filterdStekjes as stekje}
		<a href={stekje.slug}>
			<article>
				<img src={stekje.fotos[0].url} loading="lazy" alt="foto van {stekje.naam}" />
				<div>
					<h3>{stekje.naam}</h3>
					<p>{stekje.onderhoud}</p>
				</div>
			</article>
		</a>
	{/each}
</section>

<style>

  form {
    margin: 2rem 
  }
	select {
		display: flex;
		flex-direction: column;
		width: 10rem;
		padding: 0.5rem;
		border-radius: 0;
		border: 2px solid #4d7141;
		border-radius: 5px;
	}

	select:focus {
		border: 5px solid rgb(17, 84, 255);
	}

	option {
		padding: 0.5rem;
		border-radius: 1px solid black;
	}

	section {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		margin: 2rem;
		align-items: center;
	}

	section a {
		text-decoration: none;
		padding-bottom: 2rem;
	}

	article {
		display: flex;
		flex-direction: column;
		width: 195px;
		height: 266px;
		border-radius: 7px;
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
		position: relative;
	}

	article img {
		width: 100px;
		position: absolute;
		height: 266px;
		width: 195px;
		top: 0;
		left: 0;
		border-radius: 7px;
	}

	article div {
		width: 195px;
		height: 89px;
		border-bottom-left-radius: 7px;
		border-bottom-right-radius: 7px;
		background-color: #0d350cde;
		color: whitesmoke;
		top: 177px;
		position: relative;
	}

	article div h3 {
		padding: 0.5rem;
		font-size: 17px;
	}

	article:hover {
		top: -10px;
	}
</style>