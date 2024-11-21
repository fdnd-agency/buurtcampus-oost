<script>
	import { Logo, CloseIcon, OpenIcon } from '$lib/index.js';
	import { onMount } from 'svelte';

	onMount(() => {
		const openButton = document.querySelector('#open-modal');
		const closeButton = document.querySelector('#close-modal');
		const modal = document.querySelector('dialog');

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
		<button id="close-modal" aria-label="Close menu"><CloseIcon /></button>
		<nav>
			<ul role="menubar">
				<li role="menuitem"><a href="/stekjes">Stekjes</a></li>
				<li role="menuitem"><a href="/zaden">Zaden</a></li>
				<li role="menuitem"><a href="/geveltuin">Geveltuin</a></li>
				<li role="menuitem"><a href="/agenda">Agenda</a></li>
				<li role="menuitem"><a href="/partners">Partners</a></li>
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

	ul {
		list-style: none;
		font-size: 1.5em;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		color: var(--main-color-orange);
	}

	#open-modal {
		display: block;
	}

	dialog {
		display: none;
		border: none;
		box-shadow: none;
		background: transparent;
	}

	dialog[open] {
		display: flex;
		position: fixed;
		justify-content: center;
		align-items: center;
	}

	/* DESKTOP */
	@media (min-width: 56.25em) {
		header {
			height: 8em;
			display: flex;
			padding: 1em 2.5em;
			align-items: center;
			justify-content: space-between;
		}

		ul {
			gap: 2em;
			display: flex;
			padding: 4em 0;
			font-size: 1.4em;
			flex-direction: row;
			align-items: center;
		}

		a {
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

		dialog button {
			display: none;
		}
	}
</style>
