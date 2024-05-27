<script>
    export let heroInfo;
</script>

<header>
    <div class="overlay"></div>
    <h1>{heroInfo.heading1}</h1>   
    <img src="{heroInfo.image.url}" alt="stekjes">
</header>

<section>
<p>{heroInfo.description}</p>
</section>

<style>
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 40vh;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.67) 0%, rgba(0, 0, 0, 0.1) 100%);
    } 
    header{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    h1{
        position: absolute;
        color: var(--text-color-white);
        font-size: 4.5rem;
    }
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
    } 
    section{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p{
        position: absolute;
        margin-top: 2em;
        padding: 2em;
        width: 60vw;
        background-color: var(--main-color-beige);
        color: var(--main-color-brown);
        font-weight: 900;
        border-radius: 17px;
        
    }
    p::before{
        content: url('/assets/Circle-Orange.svg');
        display: inline-flex;
        padding: 0  1em 0 1em;
    }
    
    @media (min-width: 48rem){
        p{
            margin-top: 0em;
        } 
    }
    @media (min-width: 64rem) {

        .overlay, img{
            width: 100%;
            height: 50vh;
        } 
    }


</style>