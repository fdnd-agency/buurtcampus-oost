<script>
	export let data;
	// console.log(data.footers[0])
    import { LeafRight, LeafLeft } from '$lib/index.js';
</script>

<footer>
	<section class="background">
		<div class="right-svg">
			<LeafRight />
		</div>
		<div class="left-svg">
			<LeafLeft />
		</div>
	</section>
	<section class="information">
			<ul>
				<li class="title">{data.footers[0].titleAdres}</li>
				<li>{data.footers[0].location}</li>
				<li><a target="_blank" href="https://www.google.com/maps/dir/?api=1&destination={data.footers[0].adres}">{data.footers[0].adres}</a></li>
				<li>{data.footers[0].postalCode}</li>
			</ul>
			<ul>
				<li class="title">{data.footers[0].titleContact}</li>
				<li><a href="mailto:data.footers[0].email">{data.footers[0].email}</a></li>
				<li><a href="tel:{data.footers[0].number}">{data.footers[0].number}</a></li>
				<li>{data.footers[0].btwCode}</li>
			</ul>
			<ul>
				<li class="title">{data.footers[0].titleCollaborate}</li>
				<li>{data.footers[0].collaborateParagraph}</li>
			</ul>
	</section>
</footer>

<style>
	footer {
		position: relative;
		width: 100%;
		height: 70vh;
		background-color: var(--main-color-beige);
		overflow: hidden;
		padding: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
	}

	footer::after {
        content: "";
        position: absolute;
        inset: 0;
        background-image: 
            url('/assets/crack1.png'),
            url('/assets/crack2.png'),
            url('/assets/crack1.png'),
            url('/assets/crack4.png');
        background-position: 
            top right,
            bottom right,
            bottom left,
            center; 
        background-size: 
            40%, 
            30%,
            50%;
        background-repeat: no-repeat;
        z-index: 1000;

        @supports (animation-timeline: scroll()) {
            animation: opacity linear;
            animation-timeline: scroll(root y);
	    }
    }

	footer a {
		text-decoration: none;
		color: inherit;
	}
	.background {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.right-svg, .left-svg {
		position: absolute;
		z-index: 0;
		opacity: .3;
		transition: .6s;
	}
	.right-svg {
		background-image: url(/assets/right-footer-leaf.svg);
		top: 0;
		right: -20%;
	}
	.left-svg {
		background-image: url(/assets/left-footer-leaf.svg);
		top: 20%;
		left: -20%;
	}
	.information {
		display: flex;
		align-items: top;
		width: 90%;
		justify-content: space-evenly;
		color: var(--main-color-green);
		z-index: 1;
	}
    ul { 
        width: 30%;
    }
	li {
		list-style-type: none;
	}
	.title {
		font-size: 2em;
		margin-bottom: 1rem;
		font-weight: 700;
	}
    .background:hover .left-svg {
        transform: translateY(20%) translateX(-20%) rotate(-20deg);
    }
    .background:hover .right-svg {
        transform: translateY(-5%) translateX(20%) rotate(20deg);
    }

	/* MEDIA QUERY MOBILE = 1400px */

	@media (min-width: 87.5em) {
		.information {
			width: 50%;
		}
	}

	/* MEDIA QUERY MOBILE = 1000px */
	@media (min-width: 62.5em) {
		.information {
			width: 70%;
		}
	}

	/* MEDIA QUERY MOBILE = 700px */
	@media (max-width: 43.75em) {
		footer {
			height: max-content;
			padding: 4em 1em;
		}
		.information {
			flex-direction: column;
			gap: 1em;
			width: 80%;
		}
		ul { 
			width: 100%;
			z-index: 2;
		}
		.title {
			font-size: 2em;
			margin-bottom: 0rem;
			font-weight: 700;
		}
		.right-svg {
			display: none;
		}
	}

</style>
