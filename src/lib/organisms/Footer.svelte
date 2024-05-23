<script>
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
			<li class="title">ADRES</li>
			<li>OBA Linnaeusstraat</li>
			<li>Linnaeusstraat 44</li>
			<li>1092 CL Amsterdam</li>
		</ul>
		<ul>
			<li class="title">CONTACT</li>
			<li>buurtcampusoost@hva.nl</li>
			<li>06 43450198</li>
			<li>BTW 0055.81.205.B01</li>
		</ul>
		<ul>
			<li class="title">SAMENWERKEN</li>
			<li>
				Wil jij met andere organisaties, buurtbewoners en studenten samenwerken aan de stedelijke
				uitdagingen van Amsterdam Oost? Stuur een e-mail naar buurtcampusoost@hva.nl.
			</li>
		</ul>
	</section>
</footer>

<style>
	footer {
		position: relative;
		width: 100%;
		height: 50vh;
		background-color: var(--main-color-beige);
		overflow: hidden;
		padding: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
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
