<script>
    import img from "$lib/assets/bovenste.avif"
</script>


<section>
	<div class="wrapper-block">
		<div class="left-content">
            <img
            src={img}
            alt=""
        />
	
		</div>
		<div class="right-content">
		

            <h3>Toen de kast gemaakt werd...</h3>
			<p>
				Een van de begeleiders van de Maakplaats 021 bedacht het ontwerp van de kast, die - met het oog op duurzaamheid - volledig gemaakt is van een gebruikte pallet en afvalhout
			</p>
		</div>
	</div>
</section>

<style>
	section {
        position: sticky;
        top: 2em;
		padding: 2em;
		height: 90vh;
		width: 100%;
		overflow: hidden;
        color: rgb(73, 27, 2);
		margin-bottom: 55vh;
	}

	.wrapper-block {
		height: 100%;
		width: 100%;
		background-color: rgb(255, 154, 65);
		display: flex;
		border-radius: 1em;
        padding: 2em;
	}

	.left-content {
        width: 100%;
	}

	.right-content {
		height: 100%;
		width: 100%;
        padding-left: 2em;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 1em;
	}

    h3 {
		font-size: 5em;
		font-weight: 900;
        max-width: 90%;
        line-height: 1em;
        margin-bottom: 1.2rem;
	}

	p {
		max-width: 75%;
	}

	@media screen and (max-width: 1122px) {

}

@media screen and (max-width: 700px) {

h3 {
	font-size: 2em;
}

p {
	max-width: 100%;
	padding-bottom: 1em;
}

img {
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 1em;
}


.wrapper-block {
	flex-direction: column;
	padding: 1em;
	justify-content: space-between;
	align-items: center;
}

.left-content {
	height: 35%;
}

.right-content {
        padding-left: 0em;
		padding-top: 1em;
	}

}
</style>
