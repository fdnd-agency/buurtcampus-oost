<script>
	import { Logo, Navlink } from '$lib/index.js';
	
    let navOpen = false;

    function handleNav() {
        navOpen = !navOpen;
		console.log('navOpen:', navOpen); 
    }

</script>

<header>
    <div class="container">
        <a href="/" class="logo">
            <Logo />
        </a>
        <button class:change={navOpen} on:click={handleNav}></button>
    </div>

    <nav class:active={navOpen}>
        <ul role="menu">
            <li><Navlink href="/stekjes" title="Stekjes" on:click={handleNav} /></li>
            <li><Navlink href="/zaden" title="Zaden" on:click={handleNav} /></li>
            <li><Navlink href="/geveltuin" title="Geveltuin" on:click={handleNav} /></li>
            <li><Navlink href="/agenda" title="Agenda" on:click={handleNav} /></li>
            <li><Navlink href="/partners" title="Partners" on:click={handleNav} /></li>
            <li><Navlink href="/contact" title="Contact" on:click={handleNav} /></li>
        </ul>
    </nav>
</header>

<style>
header {
    width: 100%;
    transition: all 0.5s;
}
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 99;
    width: 100%;
    padding: 1em 2.5em 1em 1.5em;
}
nav {
    background: var(--main-color-beige);
    flex-direction: column;
    align-items: flex-end;
    padding: 0 1em;
    width: 100%;
    overflow-y: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    z-index: 6;
    transition: height 0.25s ease-in-out;
}
nav.active {
    height: 100vh;
}
ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    padding: 5em 0;
    font-size: 2em;
    list-style: none;
}
nav li {
    width: 80%;
    border-bottom: 2px solid var(--main-color-green);
}
nav li:hover {
    border-color: var(--main-color-orange);
}
.logo {
    position: relative;
    z-index: 1;
    height: auto;
}
.logo:hover {
    cursor: pointer;
    transform: scale(1.05);
}
button {
    border: none;
    background: none;
    background-image: url(/assets/open-menu.svg);
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: contain;
    width: 3.5em;
    height: 2.5em;
    transform: rotate(180deg);
}
button.change {
    background-image: url(../atoms/icons/close-menu.svg);
}
button:hover {
    cursor: pointer;
    width: 3.7em;
}
a {
    text-decoration: none;
}

/* 900px */
@media (min-width: 56.25em) {
    header {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 8em;
        padding: 1em 2.5em;
    }
    .container {
        position: relative;
        width: auto;
        padding: 0;
    }
    nav {
        position: relative;
        display: flex;
        background: none;
        padding: 0.7em 2.5em;
        width: auto;
        height: unset;
        transform: none;
    }
    ul {
        flex-direction: row;
        gap: 2em;
        padding: 0;
        font-size: 1em;
    }
    nav li {
        width: unset;
        border-bottom: none;
    }
    a:hover {
        color: var(--main-color-orange);
    }
}

</style>
