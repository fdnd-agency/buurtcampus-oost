
<form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="59b62920-afbb-4637-be5f-736618bec604"/>
    <fieldset class="question">
        <legend>Reden voor contact:</legend>
            <label  for="question">Ik heb een vraag</label>
            <input
                class="radio-question"
                type="radio"
                id="question"
                name="contact-reason"
                value="question"
                checked
            />
            <label for="workshop" >
                Ik wil mij aanmelden voor een workshop
            </label>
            <input
                class="radio-question"
                type="radio"
                id="workshop"
                name="contact-reason"
                value="workshop"
            />
    </fieldset>
    <fieldset>
        <label for="name">Voornaam:</label>
        <input type="text" id="name" name="name" placeholder="Voer je voornaam in" required/>

        <label for="lastname">Achternaam:</label>
        <input type="text" id="lastname" name="lastname"placeholder="Voer je achternaam in" required/>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" placeholder="Voer je e-mailadres in" required/>

        <label for="phone-number">Telefoonnummer:</label>
        <input
            type="tel"
            id="phone-number"
            name="phone-number"
            inputmode="numeric"
            pattern="[0-9]*"
            placeholder="Voer je telefoonnummer in"
            required
        />

        <label for="message">
            Stel je vraag of vertel voor welke workshop je je wilt
            aanmelden!
        </label>

        <textarea
            id="message"
            name="message"
            cols="30"
            rows="10"
            placeholder="Typ hier je bericht"
            required
        ></textarea>
    </fieldset>

    <input type="submit" value="Verzenden" />

</form>


<style>

form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: .8em;
    margin-top: 2rem;
    color: var(--card-color-green);
    font-family: var(--sub-header-font);
}
fieldset{
    display: flex;
    flex-direction: column;
    border: none;
    gap: .5em;
    transition: all .2s;
}
.question{
    display: grid;
    grid-template-columns: 1.5em 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 
        'radio1 question1' 
        'radio2 question2'
    ;
}
.question legend{
    padding: .5em 0;
}
.question input:nth-of-type(1) {
    grid-area: radio1;
}
.question input:nth-of-type(2) {
    grid-area: radio2;
}
.question label:nth-of-type(1) {
    grid-area: question1;
}
.question label:nth-of-type(2) {
    grid-area: question2;
}
.radio-question{
    grid-area: radio;
    width: 1.5em;
    height: 1.5em;
    accent-color: var(--main-color-green);
    margin-right: .5em;
    cursor: pointer;
}
fieldset input[type='text'],
fieldset input[type='email'],
fieldset input[type='tel'],
fieldset textarea { 
    border: none;
    padding: 0.5rem;
    border-radius: var(--border-card);
}

/* form focus styling  */
fieldset input[type='text']:focus,
fieldset input[type='email']:focus,
fieldset input[type='tel']:focus,
fieldset textarea:focus { 
    background-color: lightgoldenrodyellow;
}

/* form focus valid  */
fieldset input[type='text']:valid,
fieldset input[type='email']:valid,
fieldset input[type='tel']:valid,
fieldset textarea:valid { 
    border: 2px solid var(--main-color-green);
    background-color: rgb(237 255 237);
}

/* form focus invalid  */
fieldset input[type='text']:user-invalid,
fieldset input[type='email']:user-invalid,
fieldset input[type='tel']:user-invalid,
fieldset textarea:user-invalid { 
    border: 2px solid var(--invalid-color-red);
    background-color: #fffcfc;
}

input[type='submit'] {
    border-radius: 2em;
    padding: 0.4em 1em;
    text-decoration: none;
    font-size: 1em;
    transition: ease-in .1s;
    background-color: var(--main-color-green);
    color: var(	--text-color-white);
    border: none;
    cursor: pointer;
    width: 8rem;
    margin: .5em 0;
}

input[type='submit']:hover {
    background-color: var(--main-color-orange);
}


</style>