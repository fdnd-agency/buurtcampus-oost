

<a href='/stekjes_overzicht'>
<button type="button">
    Gelijk Swappen

    <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
    >
        <path
                d="M17.927 7.57075L4.41288 0.355913C2.41452 -0.710956 0 0.737063 0 3.00238V17.1041C0 19.3443 2.36618 20.7942 4.36214 19.777L17.8763 12.8901C20.0368 11.7891 20.0661 8.71276 17.927 7.57075Z"
                fill=""
        />
    </svg>
</button>
</a>

<style>
    button {
        position: absolute;
        background-color: var(--button-color);
        color: var(--text-color);
        font-family: var(--main-font);
        border: none;
        border-radius: var(--bradius);
        padding: 0.4rem 0.9rem .6rem .9rem;
        font-size: 1rem;
        transition: 0.2s;
        cursor: pointer;
        /* visibility: hidden; */
        z-index: 999;
        left: 28%;
        top: 60%;
    }

    button:hover {
        background-color: var(--text-color);
        color: orange;
    }

    button:hover svg {
        fill: orange;
    }

    svg {
        margin-left: 5px;
        transform: translateY(4px) scale(0.9);
        fill: var(--text-color);
    }

    /* MEDIA TABLET*/
    @media screen and (min-width: 48rem) {
        button {
            top: 60%;
            left: 38%;
            margin-top: 0.5rem;
            z-index: 2;
        }
    }

    /*MEDIA QUERY DESKTOP */
    @media screen and (min-width: 64rem) {
        button {
            top: 70%;
            left:45%;
        }
    }

</style>