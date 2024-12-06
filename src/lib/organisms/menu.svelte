<script>
	import ArrowDown from '$lib/atoms/icons/arrow-down.svelte';
	import { Logo, CloseIcon, OpenIcon } from '$lib/index.js';
	import { onMount } from 'svelte';

	onMount(() => {
		const openButton = document.querySelector('#open-modal');
		const closeButton = document.querySelector('#close-modal');
		const navLinks = document.querySelectorAll('nav a');
		const modal = document.querySelector('dialog');

		const isMobileView = () => window.matchMedia('(max-width: 56.25em)').matches;

		if (openButton && modal) {
			openButton.addEventListener('click', () => {
				modal?.showModal();
			});
		}

		if (closeButton && modal) {
			closeButton.addEventListener('click', () => {
				modal?.close();
			});
		}

		if (modal && navLinks) {
			navLinks.forEach((link) => {
				link.addEventListener('click', () => {
					modal?.close();
				});
			});

			modal.addEventListener('keydown', (event) => {
				if (!isMobileView()) return;

				const firstLink = navLinks[0];
				const lastLink = navLinks[navLinks.length - 1];

				if (event.key === 'Tab') {
					if (document.activeElement === lastLink && !event.shiftKey) {
						event.preventDefault();

						closeButton.focus();
					}

					if (document.activeElement === closeButton && event.shiftKey) {
						event.preventDefault();

						lastLink.focus();
					}
				}
			});
		}
	});
</script>

<header>
	<div class="menu-container">
		<a href="/" aria-label="bieb in bloei logo">
			<Logo />
		</a>

		<button id="open-modal" aria-label="Open menu"><OpenIcon /></button>
	</div>

	<dialog>
		<button class="close-btn" id="close-modal" aria-label="Close menu"><CloseIcon /></button>
		<nav>
			<ul role="menubar">
				<li class="dropdown">
					<button class="projecten-btn">Projecten <ArrowDown /></button>
					<ul class="dropdown-content">
						<li role="menuitem"><a href="/stekjes">Stekjes</a></li>
						<li role="menuitem"><a href="/zaden">Zaden</a></li>
						<li role="menuitem"><a href="/geveltuin">Geveltuin</a></li>
					</ul>
				</li>
				<li role="menuitem"><a href="/agenda">Agenda</a></li>
				<li role="menuitem"><a href="/partners">Partners</a></li>
				<li role="menuitem"><a href="/over">Over</a></li>
				<li role="menuitem"><a href="/contact">Contact</a></li>
			</ul>
		</nav>
	</dialog>
</header>

<style>
	header {
		z-index: 1;
		width: 100%;
		position: absolute;
	}

	.menu-container {
		height: 8em;
		display: flex;
		margin-top: -2rem;
		padding: 1em 2.5em;
		align-items: center;
		justify-content: space-between;
	}

	button {
		border: none;
		background: none;
		background-position: center;
	}

	.projecten-btn {
		display: none;
	}

	ul {
		list-style: none;
	}

	ul:first-child {
		font-size: 3.7em;
	}

	li {
		border-bottom: 2px solid var(--main-color-green);
	}

	a {
		font-size: 2.1rem;
		text-decoration: none;
		font-family: var(--link-font);
		color: var(--main-color-green);
	}

	a:hover {
		color: var(--main-color-orange);
	}

	#open-modal {
		display: block;
	}

	dialog {
		width: 100%;
		height: auto;
		inset: 0;
		top: 0rem;
		display: none;
		border: none;
		box-shadow: none;
		background: var(--main-color-beige);
	}

	dialog::backdrop {
		background-color: var(--main-color-beige);
	}

	dialog[open] {
		display: flex;
		position: fixed;
		margin-left: 1rem;
		align-items: center;
		justify-content: center;
	}

	dialog button#close-modal {
		position: absolute;
		top: 2rem;
		right: 0rem;
		background: none;
		border: none;
		cursor: pointer;
	}

	/* MEDIA QUERY */
	/* DESKTOP */
	@media (min-width: 56.25em) {
		header {
			height: 8em;
			display: flex;
			padding: 1em 2.5em;
			align-items: center;
			justify-content: space-between;
		}

		.dropdown {
			position: relative;
			display: inline-block;
		}

		.dropdown-content {
			display: none;
			position: absolute;
			font-size: small;
			line-height: 4em;
			background-color: var(--main-color-brown);
			border-radius: 0.5rem;
			padding: 2rem;
			z-index: 1;
			left: 50%;
			transform: translateX(-50%);
		}

		.dropdown:hover .dropdown-content {
			display: block;
		}

		ul {
			gap: 0.5em;
			display: flex;
			padding: 4em 0;
			font-size: 1.4em;
			flex-direction: row;
			align-items: center;
		}

		li {
			border-bottom: none;
		}

		a {
			font-size: 1.8rem;
			text-decoration: none;
			color: var(--text-color-white);
		}

		#open-modal {
			display: none;
		}

		dialog {
			display: flex;
			position: static;
			background: none;
			justify-content: flex-end;
			align-items: center;
			width: auto;
			height: auto;
			padding: 0;
		}

		dialog .close-btn {
			display: none;
		}

		.projecten-btn {
			display: inline-flex;
			align-items: center;
			gap: 0.2rem;
			color: var(--text-color-white);
			cursor: pointer;
			font-size: 1.8rem;
			margin-top: 1.2rem;
		}
	}
</style>
