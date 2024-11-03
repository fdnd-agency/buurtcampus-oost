<script>
	import { Navlink } from '$lib/index.js';
	import { onMount } from 'svelte';

	let navOpen = false;
	let lastScrollY = 0;
	let headerHidden = false;
	// @ts-ignore
	let menuContainer;

	onMount(() => {
		const handleResize = () => {
			if (window.innerWidth >= 900) {
				navOpen = false;
				document.removeEventListener('keydown', handleTabFocus);
			}
		};
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			headerHidden = currentScrollY > lastScrollY && currentScrollY > 80;
			lastScrollY = currentScrollY;
		};
		window.addEventListener('resize', handleResize);
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function handleNav() {
		navOpen = !navOpen;

		if (navOpen) {
			// Zet focus op het eerste element in het menu
			// @ts-ignore
			setTimeout(() => menuContainer.querySelector('a').focus(), 0);
			document.addEventListener('keydown', handleTabFocus);
		} else {
			document.removeEventListener('keydown', handleTabFocus);
		}
	}

	// Functie voor het beperken van focus in het menu
	// @ts-ignore
	function handleTabFocus(event) {
	// Controleer of `menuContainer` bestaat en of er focusable items zijn
	// @ts-ignore
	if (!menuContainer) return;

	const focusableItems = menuContainer.querySelectorAll('a, button');
	if (focusableItems.length === 0) return;

	const firstItem = focusableItems[0];
	const lastItem = focusableItems[focusableItems.length - 1];

	if (event.key === 'Tab') {
		if (event.shiftKey && document.activeElement === firstItem) {
			event.preventDefault();
			lastItem.focus();
		} else if (!event.shiftKey && document.activeElement === lastItem) {
			event.preventDefault();
			firstItem.focus();
		}
	}
}

	const getTabIndex = () => {
		if (navOpen) {
			return 0;
		} else {
			return -1;
		}
	};
</script>

<header
	bind:this={menuContainer}
	class:hidden={headerHidden}
	class:mobile-header={navOpen}
	tabindex="-1"
>
	<div class:container-active={navOpen} class:container-unactive={!navOpen} class="container">
		<a href="/" aria-label="home button" class="logo" class:logo2={navOpen}> </a>
		<button aria-label="Open menu" class:change={navOpen} on:click={handleNav}></button>
	</div>

	<nav aria-label="Main Navigation" class:active={navOpen}>
		<ul role="menubar">
			<li role="menuitem" tabindex={getTabIndex()}>
				<Navlink {handleNav} href="/stekjes" title="Stekjes" />
			</li>
			<li role="menuitem" tabindex={getTabIndex()}>
				<Navlink {handleNav} href="/zaden" title="Zaden" />
			</li>
			<li role="menuitem" tabindex={getTabIndex()}>
				<Navlink {handleNav} href="/geveltuin" title="Geveltuin" />
			</li>
			<li role="menuitem" tabindex={getTabIndex()}>
				<Navlink {handleNav} href="/agenda" title="Agenda" />
			</li>
			<li role="menuitem" tabindex={getTabIndex()}>
				<Navlink {handleNav} href="/partners" title="Partners" />
			</li>
			<li role="menuitem" tabindex={getTabIndex()}>
				<Navlink {handleNav} href="/contact" title="Contact" />
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		box-shadow: inset 0px 216px 51px -157px rgba(0, 0, 0, 0.41);
		width: 100%;
		transition: transform 0.3s ease-in-out;
		background: none;
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
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		z-index: 7;
		width: 100%;
		padding: 1em 1.5em;
		transition: transform 0.3s ease-in-out;
	}

	.container-unactive {
		box-shadow: inset 0px 215px 53px -159px rgb(0 0 0 / 58%);
	}

	.container-active {
		background-color: var(--main-color-beige);
	}

	nav.active {
		overflow-y: auto;
		display: flex;
	}

	nav {
		background: var(--main-color-beige);
		flex-direction: column;
		padding: 0 1em;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		z-index: 6;
		transition: height 0.3s ease-in-out;
		display: none;
	}

	nav ul li {
		display: none;
	}

	nav.active ul li {
		display: block;
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2em;
		padding: 4em 0;
		font-size: 1.5em;
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
		height: 3em;
		width: 4em;
		background-image: url(/assets/Logo.svg);
		background-repeat: no-repeat;
		background-size: contain;
		position: relative;
		z-index: 1;
		transition: transform 0.2s ease-in-out;
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
		width: 2.5em;
		height: 1.5em;
		rotate: calc(180deg);
		transition: transform 0.2s ease-in-out;
	}

	button.change {
		background-image: url(/assets/close-menu.svg);
	}

	button:hover {
		cursor: pointer;
		transform: scale(1.15);
	}

	a {
		text-decoration: none;
	}

	@media (min-width: 900px) {
		nav ul li {
			display: block;
		}
	}

	@media (min-width: 500px) {
		.logo {
			height: 5em;
			width: 7em;
		}
		.container {
			padding: 1em 2.5em;
			background: none;
		}

		button {
			width: 3em;
			height: 2.5em;
		}

		ul{
			padding: 6em 0;
		}
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
			position: relative;
			width: auto;
			padding: 0;
		}

		.container-unactive {
			box-shadow: none;
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
			font-size: 1.2em;
		}

		.logo2:focus {
			background-color: transparent; /* Geen achtergrondkleur op desktop */
		}

		nav li {
			width: unset;
			border-bottom: none;
		}

		button {
			display: none;
		}

		a:hover {
			color: var(--main-color-orange);
		}
	}
</style>
