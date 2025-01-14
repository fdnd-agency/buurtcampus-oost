<script>
	import { Button } from '$lib/index.js';
	export let viewPageData;
</script>

<h2>{viewPageData.titel}</h2>

<section>
	{#each viewPageData.product as item}
		<article>
			<a href=/{item.projectnaam}/{item.slug}>
				<h3>{item.naam}</h3>
				<img src={item.fotos[0].url} alt="" loading="lazy" width={item.fotos[0]?.width || 'auto'} height={item.fotos[0]?.height || 'auto'}/>
			</a>
		</article>
	{/each}
</section>

<style>
	h2 {
		font-family: var(--header-font);
		font-size: 3em;
		line-height: 95%;
		margin-top: 1em;
		padding: 2em 1em 0 1em;
	}
	section {
		padding: 2em;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
	}
	article {
		position: relative;
		min-height: 50vh;
		width: 20%;
		border-radius: var(--border-card);
		overflow: hidden;
		margin-top: 1rem;
	}
	article a {
		text-decoration: none;

		display: flex;
		width: 100%;
		height: 100%;
	}
	article a:hover img {
		scale: 1.10;
	}
	img {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: ease-out .35s;
	}
	h3 {
		position: relative;
		color: white;
		font-size: 2rem;
		line-height: 1.5em;
		z-index: 5;
		padding: 1rem;
		width: 100%;
		height: min-content;
	}
	article h3:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(to bottom, rgb(0 0 0 / 90%), rgba(0, 0, 0, 0) 80%);
		z-index: -1;
	}

	@media (max-width: 26.5625em) {
		/* 425px / 16 = 26.5625em */
		article {
			width: 100%;
		}
	}

	@media (min-width: 26.5625em) {
		/* 425px / 16 = 26.5625em */
		article {
			width: 100%;
		}
	}

	@media (min-width: 48em) {
		/* 768px / 16 = 48em */
		article {
			width: 47%;
		}
	}

	@media (min-width: 64em) {
		/* 1024px / 16 = 64em */
		article {
			width: 24%;
			min-height: 60vh;
		}
	}
</style>
