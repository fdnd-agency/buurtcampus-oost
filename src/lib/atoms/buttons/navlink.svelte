<script>
	export let handleNav, href, title;
</script>

<a on:click={handleNav} {href}>{title}</a>

<style>
    a{
        display: block;
        width: 100%;
        font-size: 1.5em;
        color: var(--main-color-green);
        text-decoration: none;
        font-family: var(--link-font);
    }
    a:hover{
        color: var(--main-color-orange);
    }

    @media (min-width: 900px) {
        a{
            font-size: 1em;
            color: var(--text-color-white);
        }
        a:hover{
            scale: 1.2;
        }
    }

</style>