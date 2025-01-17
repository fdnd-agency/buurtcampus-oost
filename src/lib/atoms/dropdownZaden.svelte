<script>
    export let data;
</script>

{#if data.zaden.landvanherkomst}
    <details name="kenmerken" open>
        <summary>
            <img src="/assets/land-icon.svg" alt="icoon van wereldbol">
            Landherkomst
        </summary>
        <p>{data.zaden.landvanherkomst}</p>
    </details>
{/if}

{#if data.zaden.voeding}
    <details name="kenmerken">
        <summary>
            <img src="/assets/voeding-icon.svg" alt="Voeding icoon">
            Voeding
        </summary>
        <p>{data.zaden.voeding}</p>
    </details>
{/if}

{#if data.zaden.temperatuur}
    <details name="kenmerken">
        <summary>
            <img src="/assets/temperatuur-icon.svg" alt="Temperatuur icoon">
            Kenmerken
        </summary>
        <p>{data.zaden.temperatuur}</p>
    </details>
{/if}

{#if data.zaden.giftig}
    <details name="kenmerken">
        <summary>
            <img src="/assets/giftig-icon.svg" alt="Giftig icoon">
            Giftig
        </summary>
        <p>{data.zaden.giftig}</p>
    </details>
{/if}

{#if data.zaden.verpotten}
    <details name="kenmerken">
        <summary>
            <img src="/assets/verpotten-icon.svg" alt="Verpotten icoon">
            Verpotten
        </summary>
        <p>{data.zaden.verpotten}</p>
    </details>
{/if}

{#if data.zaden.watergeven}
    <details name="kenmerken">
        <summary>
            <img src="/assets/watergeven-icon.svg" alt="Watergeven icoon">
            Watergeven
        </summary>
        <p>{data.zaden.watergeven}</p>
    </details>
{/if}

{#if data.zaden.zonlicht}
    <details name="kenmerken">
        <summary>
            <img src="/assets/zonlicht-icon.svg" alt="Zonlicht icoon">
            Zonlicht
        </summary>
        <p>{data.zaden.zonlicht}</p>
    </details>
{/if}

{#if data.zaden.stekken}
    <details name="kenmerken">
        <summary>
            <img src="/assets/stekken-icon.svg" alt="Stekken icoon">
            Stekken
        </summary>
        <p>{data.zaden.stekken}</p>
    </details>
{/if}

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