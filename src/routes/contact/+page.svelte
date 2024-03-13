<script>
		export let data;
	import ContactForm from '$lib/molecules/forms/ContactForm.svelte';
	import Location from '$lib/atoms/iframe/Location.svelte';
	import Navigation from '../../lib/organisms/Navigation.svelte';
	import Footer from '$lib/organisms/Footer.svelte';
	import ContactImage from '../../lib/atoms/headers/ContactImage.svelte';

</script>

<Navigation/>

<ContactImage {data} />
<main>
	<div class="wrapper">
	<ContactForm />
	<Location />
</div>
</main>

<Footer />

<style>


	main {
		padding: var(--padding);
		flex-wrap: wrap;
		gap: 2rem;
		padding: var(--padding);
		width: 100%;
	}

	.wrapper {
		width: 100%;
		padding: var(--padding);
		background-color: var(--background-color-light);
		border-radius: var(--bradius);
		display: flex;
	}

	@media screen and (max-width: 700px) {
		.wrapper {
		flex-direction: column;
	}
}
</style>
