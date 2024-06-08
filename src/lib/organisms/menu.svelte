<script>
	import { Logo, MenuIcon, CloseIcon, Navlink } from '$lib/index.js';
	import { onMount } from "svelte";

	onMount(() => {
		// @ts-ignore
		document
		.querySelector("a .menu-icon")
		.addEventListener("click", function (ev) {
			// @ts-ignore
			document.querySelector("nav a").classList.add("active");
			// @ts-ignore
			document.querySelector("nav a").focus();
			ev.preventDefault();
		});

		// @ts-ignore
		document
		.querySelector("nav .close-icon")
		.addEventListener("click", function (ev) {
			// @ts-ignore
			document.querySelector("nav a").classList.remove("active");
			document.body.focus();
			ev.preventDefault();
		});
	});
</script>

<header>
	<a href="/" class="logo">
		<Logo />
	</a>

	<a class="menu-icon" href="#menu">
		<MenuIcon />
	</a>

	<nav id="menu">
		<ul role="menu">
			<li>  
				<Navlink href="/stekjes" title="Stekjes"> </Navlink>
			</li>
			<li>        
				<Navlink href="/zaden" title="Zaden"> </Navlink>
			</li>
			<li>        
				<Navlink href="/geveltuin" title="Geveltuin"> </Navlink>
			</li>
			<li>        
				<Navlink href="/agenda" title="Agenda"> </Navlink>
			</li>
			<li>        
				<Navlink href="/partners" title="Partners"> </Navlink>
			</li>
			<li>        
				<Navlink href="/contact" title="Contact"> </Navlink>
			</li>
		</ul>

		<a class="close-icon" href="/">
			<CloseIcon />
		</a>
	</nav>
</header>

<style>
	header {
		position: absolute;
		z-index: 99;
		width: 100%;
		padding: 1em 2.5em 1em 2em;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.menu-icon{
		width: 30px;
		height: 30px;
	}
	nav {
		position: fixed;
		inset: 0;
		background: var(--main-color-beige);
		display: none;
		animation: reveal-nav 0.25s ease-in forwards;
	}
	nav .close-icon {
		background: none;
		color: var(--text-color-white);
		padding: 2em 2.5em;
		position: absolute;
		top: 0;
		right: 0;
	}
	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		padding: 5em 2em;
	}

	a {
		text-decoration: none;
	}

	@supports selector(:target) {
		nav:target {
			display: block;
		}
	}

	@keyframes reveal-nav {
		from {
			transform: translateY(-100%);
		}
		to {
			transform: translateY(0);
		}
	}

	/* Mediaquery's   */

	/* 900px*/
	@media (min-width: 56.25em) {
		.menu-icon,		
		.close-icon {
			display: none;
		}
		nav {
			display: flex;
			position: absolute;
			flex-wrap: wrap;
			justify-content: flex-end;
			align-content: center;
			background: none;
			padding: 1.5em 2.5em;
		}
		.logo {
			position: relative;
			z-index: 1;
		}
		ul {
			flex-direction: row;
			width: max-content;
			gap: 2em;
			padding: 0;
		}
		a:hover {
			color: var(--main-color-orange);
		}
	}

	/* 1400px */
	@media (min-width: 87.5em) {
		nav {
			position: absolute;
		}
	}
</style>
