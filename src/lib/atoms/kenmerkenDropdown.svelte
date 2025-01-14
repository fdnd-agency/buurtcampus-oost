<script>
    export let data;
</script>

<details name="kenmerken" open>
    <summary>
        <img src="/assets/land-icon.svg" alt="icoon van wereldbol">
        Landherkomst
    </summary>
    <p>{data.stekje.landvanherkomst}</p>
</details>


<details name="kenmerken">
    <summary>
        <img src="/assets/voeding-icon.svg" alt="Voeding icoon">
       Voeding
    </summary>
    <p>{data.stekje.voeding}</p>
</details>

<details name="kenmerken">
    <summary>
        <img src="/assets/temperatuur-icon.svg" alt="Voeding icoon">
        Kenmerken
    </summary>
    <p>{data.stekje.temperatuur}</p>
</details>

<details name="kenmerken">
    <summary>
        <img src="/assets/giftig-icon.svg" alt="Voeding icoon">
        Giftig
    </summary>
    <p>{data.stekje.giftig}</p>
</details>

<details name="kenmerken">
    <summary>
        <img src="/assets/verpotten-icon.svg" alt="Voeding icoon">
        Verpotten
    </summary>
    <p>{data.stekje.verpotten}</p>
</details>

<details name="kenmerken">
    <summary>
        <img src="/assets/watergeven-icon.svg" alt="Voeding icoon">
        Watergeven
    </summary>
    <p>{data.stekje.watergeven}</p>
</details>

<details name="kenmerken">
    <summary>
        <img src="/assets/zonlicht-icon.svg" alt="Voeding icoon">
        Zonlicht
    </summary>
    <p>{data.stekje.zonlicht}</p>
</details>

<details name="kenmerken">
    <summary>
        <img src="/assets/stekken-icon.svg" alt="Voeding icoon">
        Stekken
    </summary>
    <p>{data.stekje.stekken}</p>
</details>

<style>
    details {
        position: relative;
        width: 100%;
    }
    summary {
        display: flex;
        align-items: center;
       
        font-family: var(--sub-header-font);
        text-transform: uppercase;
        font-weight: 600;
        border-radius: var(--border-card);
       
        padding: 0.9375em;
        
        background-color: #fbc980;
        color: var(--main-color-brown); 
        transition: background-color 0.3s;
        cursor: pointer;
    }
    summary img {
        padding-right: 0.9375em;
    }
    summary:hover,
    details[open] summary,
    details[open] p {
      background-color: #f5c275;
    }
    details[open] {
        min-height: 3.75rem;
    }
    details[open] summary {
        border-radius: 1em 1em 0 0 ;
    }

    details p {
        border-radius: 1em 1em 0 0 ;
        background-color: #fbc980;
        padding: 0.9375em;
        color: #000;
    }
    details[open] p {
        border-radius: 0em 0em 1em 1em ;
    }

    summary::after {
        content: "+";
        position: absolute;
        right: 0.9375em;
    }
    details[open] summary::after{
        content: "-";
    }
</style>