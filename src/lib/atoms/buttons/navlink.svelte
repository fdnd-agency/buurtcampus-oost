<script>
	export let href, title;
</script>

<a {href}>{title}</a>

<style>
    a{
        font-size: 10vw;
        color: var(--main-color-green);
        text-decoration: none;
        font-family: var(--sub-header-font);
    }

    a:hover{
        color: var(--main-color-orange);
        scale: 1.2;
    }

    @media (min-width: 900px) {
        a{
        font-size: 1em;
        color: var(--text-color-white);
        }
    }

</style>