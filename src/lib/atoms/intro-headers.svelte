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
        position: relative;
        gap: 1.5em;
        margin: -2em auto;
        padding: 1.5em 1.5em 1.5em .5em;
        width: 80vw;
        background-color: var(--main-color-beige);
        color: var(--main-color-brown);
        font-weight: 500;
        font-size: 1.4em;
        border-radius: 17px;
        
    }
 
    section::before{
        content: url('/assets/Circle-Orange.svg');
        display: inline-flex;

    }
    
    @media (min-width: 48rem){
        section{
            margin:-2em auto;
            align-items: center;
            width: 60vw;
            padding: 2em;
        } 
    }

</style>