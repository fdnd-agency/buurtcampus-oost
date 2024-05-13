<script>
    export let heroInfo;
</script>

<section>
<div class="overlay"></div>
<!-- <h1>{heroInfo.heading1}</h1>    -->
<img src="{heroInfo.image.url}" alt="stekjes">
<!-- <p>{heroInfo.heading2}</p> -->
</section>

<style>
    img{
        width: 100%;
        height: 50vh;
        object-fit: cover;
    } 
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 90vh;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0.1) 100%);
    } 

</style>