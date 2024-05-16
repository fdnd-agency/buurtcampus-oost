<script>
	export let href, title;
</script>

<a {href}>{title}</a>

<style>
    a{
        font-size: 10vw;
        color: var(--background-color);
        text-decoration: none;
    }

    @media (min-width: 900px) {
        a{
        font-size: 1em;
        color: var(--text-color);
        }
    }

</style>