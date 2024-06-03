<script>
    export let heroInfo;
</script>

<section>
<p>{heroInfo.description}</p>
</section>

<style>

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

</style>