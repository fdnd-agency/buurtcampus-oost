<script>
import {Accessibility, Moon, Translate, FontIncrease} from '$lib/index.js'; //Switch
</script>

<form aria-label="Accessibility Options">
    <label for="menu" class="accessibilityIcon">
        <input type="checkbox" id="menu">
         <Accessibility />
    </label>
    <div class="accessibilityContent">
        <ul>
            <li>
                <label for="toggle-darkmode">
                    <div class="label-container">
                        <Moon/>
                        <span>Dark mode</span>
                    </div>
                    <input type="checkbox" id="toggle-darkmode" role="switch">
                    <span class="state">
                        <span class="container">
                          <span class="position"> </span>
                        </span>
                    </span>
                </label>
            </li>
            <li>
                <label for="font-size">
                    <div class="label-container">
                        <FontIncrease />
                        <span>Grotere letters</span>
                    </div>
                    <input type="checkbox" id="font-size" role="switch">
                    <span class="state">
                        <span class="container">
                          <span class="position"> </span>
                        </span>
                    </span>
                </label>
            </li>
            <li id="google_translate_element">
                <div class="label-container">
                    <Translate />
                    <span>Vertaal deze website</span>  
                </div>  
            </li>
        </ul>
    </div>
</form>

<style>

label input[role="switch"] {
  opacity: 0;
  cursor: pointer;
}

label input[role="switch"] ~ .state {
  display: inline-block;
  user-select: none;
}

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

label input[role="switch"]:checked ~ .state > .container > .position {
  left: 20px;
  background: #fff;
}

label input[role="switch"]:checked ~ .state > .container {
  border: 2px solid #005CDC;
  background: #005CDC;
}

.accessibilityContent ul {
        padding: 0.5rem
}

.accessibilityContent div {
    display: flex;
    gap: 1rem;
}

.accessibilityContent label {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.accessibilityContent label:hover {
  cursor: pointer;
}

form {
    position: fixed;
    top: 20vh;
    left: -15rem; /* Hidden by default */
    z-index: 10000;
    display: flex;
    flex-direction: row-reverse;
    width: calc(14rem + 5rem);
    transition: left .3s;
}

/* Menu is shown when checkbox is checked */
form:has(.accessibilityIcon input:checked) {
    transition: left .3s;
    left: -1rem; /* Slide out to show the menu */
}

/* Hide the content when checkbox is unchecked */
form:not(:has(.accessibilityIcon input:checked)) > .accessibilityContent ul {
    display: none;
    transition: left .3s;
}

.accessibilityContent {
    width: 14rem;
    height: max-content;
    
    background-color: white;
    border-radius: 0px 0px 10px 0px;
}

.accessibilityContent ul li {
    list-style: none;
    margin: .4rem;
}


.accessibilityIcon {
    /* display: flex;
    justify-content: center;
    
    margin: 0px; */
    padding: 5px;
    
    width: 4rem;
    height: 4rem;
    
    background-color: white;
    border-radius: 0px 10px 10px 0px;
    
    cursor: pointer;
}

/* Extra's */

form:not(:has(.accessibilityIcon input:checked)) > .accessibilityContent {
    height: 117.781px;
}

input[type="checkbox"][id^="menu"] {
    position: absolute;
    left: -50%;
}
</style>