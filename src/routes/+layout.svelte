<script>
	export let data;
	import { Navigation, AccessibilityMenu, Menu, Footer } from '$lib/index.js';
	import { onNavigate } from '$app/navigation';

	function delayNavigation() {
		return new Promise((resolve) => setTimeout(resolve, 100));
	}

	onNavigate(async (navigation) => {
		if (!document.startViewTransition) {
			await delayNavigation();
			return;
		}

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
			await delayNavigation();
			resolve();
			await navigation.complete;
			});
		});
	});
</script>

<div class="page-transition right"></div>
<div class="page-transition right"></div>
<div class="page-transition right"></div>
<div class="page-transition right"></div>
<div class="page-transition right"></div>

<div class="page-transition left"></div>
<div class="page-transition left"></div>
<div class="page-transition left"></div>
<div class="page-transition left"></div>
<div class="page-transition left"></div>

<Navigation />

<AccessibilityMenu />
<!-- <Menu/> -->
<slot />
<Footer {data} />

<style>
	
.page-transition {
	position: fixed;
	width: 100%;
	height: 10lvh;
	pointer-events: none;
	z-index: 1000;
}

.page-transition.right {
	left: 0;
	transform: translateX(-100%);
	border-radius: 5rem 0 0 5rem;
}

.page-transition.left {
	right: 0;
	transform: translateX(100%);
	border-radius: 0 5rem 5rem 0;
}

/* Lines right to left */

.page-transition.right:first-of-type {
	top: 0;
	background: #ED9E35;
	view-transition-name: row-1-right;
}

.page-transition.right:nth-of-type(2) {
	top: 10lvh;
	background: #DB7027;
	view-transition-name: row-2-right;
}

.page-transition.right:nth-of-type(3) {
	top: 20lvh;
	background: #563B2A;
	view-transition-name: row-3-right;
}

.page-transition.right:nth-of-type(4) {
	top: 30lvh;
	background: #72C2A9;
	view-transition-name: row-4-right;
}

.page-transition.right:nth-of-type(5) {
	top: 40lvh;
	background: #FEE7BD;
	view-transition-name: row-5-right;
}

@media (prefers-reduced-motion: no-preference) {
	:root::view-transition-group(row-1-right) {
		animation: translateInFromRight 2s ease-in-out 0.4s;
		top: 0;
	}

	:root::view-transition-group(row-2-right) {
		animation: translateInFromRight 2s ease-in-out 0.3s;
		top: 10lvh;
	}

	:root::view-transition-group(row-3-right) {
		animation: translateInFromRight 2s ease-in-out 0.2s;
		top: 20lvh;
	}

	:root::view-transition-group(row-4-right) {
		animation: translateInFromRight 2s ease-in-out 0.1s;
		top: 30lvh;
	}

	:root::view-transition-group(row-5-right) {
		animation: translateInFromRight 2s ease-in-out;
		top: 40lvh;
	}
}

/* Lines left to right */

.page-transition.left:nth-of-type(6) {
	top: 50lvh;
	background: #FEE7BD;
	view-transition-name: row-1-left;
}

.page-transition.left:nth-of-type(7) {
	top: 60lvh;
	background: #72C2A9;
	view-transition-name: row-2-left;
}

.page-transition.left:nth-of-type(8) {
	top: 70lvh;
	background: #563B2A;
	view-transition-name: row-3-left;
}

.page-transition.left:nth-of-type(9) {
	top: 80lvh;
	background: #DB7027;
	view-transition-name: row-4-left;
}

.page-transition.left:nth-of-type(10) {
	top: 90lvh;
	background: #ED9E35;
	view-transition-name: row-5-left;
}

@media (prefers-reduced-motion: no-preference) {
	:root::view-transition-group(row-1-left) {
		animation: translateInFromLeft 2s ease-in-out;
		top: 50lvh;
	}

	:root::view-transition-group(row-2-left) {
		animation: translateInFromLeft 2s ease-in-out 0.1s;
		top: 60lvh;
	}

	:root::view-transition-group(row-3-left) {
		animation: translateInFromLeft 2s ease-in-out 0.2s;
		top: 70lvh;
	}

	:root::view-transition-group(row-4-left) {
		animation: translateInFromLeft 2s ease-in-out 0.3s;
		top: 80lvh;
	}

	:root::view-transition-group(row-5-left) {
		animation: translateInFromLeft 2s ease-in-out 0.4s;
		top: 90lvh;
	}
}

/* Keyframes */

@keyframes translateInFromLeft {
	0% {
	transform: translateX(-100%);
	}
	50% {
	transform: translateX(0);
	width: 110%;
	}
	70% {
	transform: translateX(0);
	width: 110%;
	}
	100% {
		transform: translateX(-100%); 
	}
}

@keyframes translateInFromRight {
	0% {
	transform: translateX(100%);
	}
	50% {
	transform: translateX(-10%);
	width: 110%;
	}
	80% {
	transform: translateX(-10%);
	width: 110%;
	}
	100% {
		transform: translateX(100%); 
	}
}
	
</style>