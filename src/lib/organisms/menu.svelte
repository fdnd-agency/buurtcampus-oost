<script>
	import { Logo, OpenMenu, CloseMenu, Navlink } from '$lib/index.js';

    let navActive = false;

    const toggleNav = () => {
        navActive = !navActive;
    };
</script>

<header>
    <div class="container">
        <a href="/" class="logo" >
			<Logo />
		</a>
        <button aria-expanded={navActive} on:click={toggleNav}>
            <img class="menu-icon" src={navActive ? CloseMenu : OpenMenu} alt="Navigation button" />
        </button>
    </div>

    <nav class:active={navActive}>
        <ul role="menu">
			<li>  
				<Navlink href="/stekjes" title="Stekjes" on:click={toggleNav} /> 
			</li>
			<li>        
				<Navlink href="/zaden" title="Zaden" on:click={toggleNav} /> 
			</li>
			<li>        
				<Navlink href="/geveltuin" title="Geveltuin" on:click={toggleNav} /> 
			</li>
			<li>        
				<Navlink href="/agenda" title="Agenda" on:click={toggleNav} /> 
			</li>
			<li>        
				<Navlink href="/partners" title="Partners" on:click={toggleNav} /> 
			</li>
			<li>        
				<Navlink href="/contact" title="Contact" on:click={toggleNav} /> 
			</li>
        </ul>
    </nav>
</header>

<style>
	header {
		width: 100%;
	}

	.container{
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
        visibility: hidden;
        transform: translateY(-100%);
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;
        z-index: 99;
	}
    nav.active {
        visibility: visible;
        transform: translateY(0);
        opacity: 1;
        transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out visibility 0s linear 0.5s;
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
    nav li{
        width: 80%;
        border-bottom: 2px solid var(--main-color-green);
    }
	nav li:hover{
        border-color: var(--main-color-orange);
    }
    .logo{
		position: relative;
        z-index: 1;
        height: auto;
	}
	.logo:hover {
		cursor: pointer;
        transform: scale(1.1);
	}
	button{
		border: none;
		background: none;
		transform: rotate(180deg);
		cursor: pointer;
	}
	a {
		text-decoration: none;
	}

	/* Mediaquery's   */

	/* 900px*/
	@media (min-width: 56.25em) {

		header{
			position: absolute;
			display: flex;
			justify-content: end;
			align-items: center;
			height: 8em;
			padding: 1em 2.5em;
		}

		.container{
			position: relative;
			padding: 0;
		}
		nav {
			position: relative;
            display: flex;
            background: none;
            padding: .7em 2.5em;
            width: auto;
            height: unset;
            opacity: 1;
            visibility: visible;
            transform: none;
        }
		ul {
			flex-direction: row;
			gap: 2em;
			padding: 0;
			font-size: 1em;
		}
        nav li{
            width: inset;
            border-bottom: none;
        }

		.menu-icon {
            display: none;
		}
		a:hover {
			color: var(--main-color-orange);
		}
	}

</style>
