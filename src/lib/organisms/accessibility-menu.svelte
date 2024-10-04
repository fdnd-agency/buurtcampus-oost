<script>
import {Accessibility, Moon, Translate, FontIncrease} from '$lib/index.js'; //Switch
</script>

<form title="Accessibility Options" aria-label="Accessibility Options">
    <label for="menu" class="icon">
        <input type="checkbox" id="menu">
         <Accessibility />
    </label>
    <div class="content">
        <ul>
            <li>
                <label for="toggle-darkmode">
                    <div>
                        <Moon/>
                        <span>Dark mode</span>
                    </div>
                    <input type="checkbox" id="toggle-darkmode" role="switch">
                    <span class="state">
                        <span class="container">
                          <span class="position"></span>
                        </span>
                    </span>
                </label>
            </li>
            <li>
                <label for="font-size">
                    <div>
                        <FontIncrease />
                        <span>Grotere letters</span>
                    </div>
                    <input type="checkbox" id="font-size" role="switch">
                    <span class="state">
                        <span class="container">
                          <span class="position"></span>
                        </span>
                    </span>
                </label>
            </li>
            <li id="google_translate_element">
                <div>
                    <Translate />
                    <span>Vertaal deze website</span>  
                </div>  
            </li>
        </ul>
    </div>
</form>

<style>

/* Form Styles */
form {
    position: fixed;
    top: 20vh;
    left: -15rem; /* Hidden by default */
    z-index: 10000;
    display: flex;
    flex-direction: row-reverse;
    width: calc(14rem + 5rem);
    transition: left 0.3s;
}

/* Menu is shown when checkbox is checked */
form:has(.icon input:checked) {
    left: -1rem; /* Slide out to show the menu */
    transition: left 0.3s;
}

/* Hide content when checkbox is unchecked */
form:not(:has(.icon input:checked)) > .content ul {
    display: none;
}

/* Accessibility menu hidden height */
form:not(:has(.icon input:checked)) > .content {
    height: 117.781px;
}

/* Menu toggle checkbox hidden off-screen */
input[type="checkbox"][id^="menu"] {
    position: absolute;
    left: -50%;
}

/* Icon container for the menu */
.icon {
    padding: 5px;
    width: 4rem;
    height: 4rem;
    background-color: white;
    border-radius: 0px 10px 10px 0px;
    cursor: pointer;
}

/* Focus outline for icon */
.icon:has(input:focus) {
    border: 2px solid red;
}

/* Content styles */
.content {
    width: 14rem;
    height: max-content;
    background-color: white;
    border-radius: 0px 0px 10px 0px;
}

/* List styles inside the content */
.content ul {
    padding: 0.5rem;
}

.content ul li {
    list-style: none;
    margin: 0.4rem;
}

/* Label and interactive elements */
.content label {
    display: flex;
    justify-content: space-between;
}

/* Focus and hover state for label */
.content label:hover {
    cursor: pointer;
}

.content label:focus-within {
    outline: 3px solid red;
    outline-offset: 3px;
    border-radius: 5px;
}

/* Container for icons and text in labels */
.content div {
    display: flex;
    align-items: center;
    gap: 1rem;
}

/* Switch input styles */
label input[role="switch"] {
    opacity: 0; /* Hidden but focusable */
    cursor: pointer;
}

/* State container for switch */
label input[role="switch"] ~ .state {
    display: inline-block;
    user-select: none;
}

/* Switch container */
label input[role="switch"] ~ .state > .container {
    position: relative;
    top: 4px;
    display: inline-block;
    border: 2px solid #919191;
    background: #919191;
    width: 40px;
    height: 20px;
    border-radius: 11px;
    transition: 0.1s ease-in-out;
}

/* Hover state for switch container */
label input[role="switch"]:hover ~ .state > .container {
    border: 2px solid #3D3D3D;
    background: #3D3D3D;
}

/* Switch position (knob) */
label input[role="switch"] ~ .state > .container > .position {
    position: absolute;
    top: 1px;
    left: 2px;
    display: inline-block;
    border-radius: 9px;
    width: 14px;
    height: 14px;
    background: #fff;
    transition: 0.1s ease-in-out;
}

/* Checked state for switch knob */
label input[role="switch"]:checked ~ .state > .container > .position {
    left: 20px;
    background: #fff;
}

/* Checked state for switch container */
label input[role="switch"]:checked ~ .state > .container {
    border: 2px solid #005CDC;
    background: #005CDC;
}

/* Hover state for checked switch */
label input[role="switch"]:checked:hover ~ .state > .container {
    border: 2px solid #3D94FF;
    background: #3D94FF;
}

</style>