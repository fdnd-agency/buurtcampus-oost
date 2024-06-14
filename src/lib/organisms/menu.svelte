<script>
	import { Navlink } from '$lib/index.js';
    import { onMount } from 'svelte'; 

    let navOpen = false;
    let lastScrollY = 0;
    let headerHidden = false;

    onMount(() => {
        const handleResize = () => {
        if (window.innerWidth >= 900) {
            navOpen = false;
        }
        };

        const handleScroll = () => {
        const currentScrollY = window.scrollY;
        headerHidden = currentScrollY > lastScrollY && currentScrollY > 80; // Verberg bij scrollen naar beneden en voorbij 80px
        lastScrollY = currentScrollY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
        };
    });

    const handleNav = () => {
        if (window.innerWidth < 900) {
        navOpen = !navOpen;
        }
    };
</script>

<header class:hidden={headerHidden} class:mobile-header={navOpen}>
    <div class="container">
        <a href="/" class="logo" class:logo2={navOpen}> </a>
        <button class:change={navOpen} on:click={handleNav}></button>
    </div>

    <nav class:active={navOpen}>
        <ul role="menu">
            <li><Navlink {handleNav} href="/stekjes" title="Stekjes"/></li>
            <li><Navlink {handleNav} href="/zaden" title="Zaden"/></li>
            <li><Navlink {handleNav} href="/geveltuin" title="Geveltuin" /></li>
            <li><Navlink {handleNav} href="/agenda" title="Agenda"/></li>
            <li><Navlink {handleNav} href="/partners" title="Partners"/></li>
            <li><Navlink {handleNav} href="/contact" title="Contact"/></li>
        </ul>
    </nav>
</header>

<style>
header {
    box-shadow: inset 0px 216px 51px -157px rgba(0,0,0,0.41);
    width: 100%;
    transition: transform 0.3s ease-in-out;
}

header.hidden {
    transform: translateY(-100%); 
    z-index: 100;
}
.mobile-header {
    position: fixed;
    z-index: 6;
}
.container {
    box-shadow: inset 0px 216px 51px -157px rgba(0,0,0,0.41);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 7;
    width: 100%;
    padding: 1em 2.5em;
    transition: transform 0.3s ease-in-out;
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
	height: 5em;
	width: 7em;
	background-image: url(/assets/Logo.svg);
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    z-index: 1;
    mix-blend-mode: difference;
}

.logo2 {
	background-image: url(/assets/Logo-green.svg);
    background-repeat: no-repeat;
    background-size: contain;
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
    background-image: url(/assets/close-menu.svg);
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
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 8em;
        padding: 1em 2.5em;
        z-index: 6;
    }
    .container {
        box-shadow: unset;
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

	button{
		display: none;
	}
    a:hover {
        color: var(--main-color-orange);
    }
}

</style>
