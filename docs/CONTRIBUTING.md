# Richtlijnen bijdragen aan het project

## Inhoudsopgave
- [Branches](#branches)
- [Commits](#commits)
- [Pull requests](#pull-requests)
- [Code conventies](#code-conventies)

---

## Branches

> Voor het maken van branches zijn er verschillende manieren waarop je de namen kunt schrijven. Wij (team S3 2025) gebruikten er meerderen door elkaar, niet geheel efficiënt dus. Kies er dus _**één**_ die jullie fijn en duidelijk lijkt en probeer je daar als team aan te houden.

- **#issuenumber-short-description:**
  
  Bijvoorbeeld `#274-email-implementation`

- **naam-feature:**

  Bijvoorbeeld `john-stekjes-responsive`

- **feature-naam:**

  Bijvoorbeeld `stekjes-responsive-john`

- **feature:**

  Bijvoorbeeld `homepage-responsive-fixes`

---

## Commits

> Het maken van duidelijke commits is belangrijk voor jezelf en het team, om makkelijk veranderingen in de code terug te vinden en meteen te weten wát er toen veranderd is.
Het is dan ook belangrijk om regelmatig je code te committen, dit hoeft niet maar 1 keer aan het einde van de dag, maar kan ook na 2 regels code.

> Wij vonden het fijn om dit op issue basis te doen. Je schrijft als commit summary het issue nummer, en een korte beschrijving wat de verandering is. Mocht je meer informatie willen toevoegen, kan dat in de description eronder (in Github Desktop). Het is best practice om dit in het engels te doen.

**Bijvoorbeeld:**

Je werkt aan [#343](https://github.com/fdnd-agency/buurtcampus-oost/issues/343), en je wilt de code die je hebt geschreven committen. Dan schrijf je dit als volgt in de commit summary:

 ![image](https://github.com/user-attachments/assets/63eb5022-99d0-4bc2-9add-dcdd89d4a570)

---

## Pull requests

> Voor het maken van pull requests gebruiken wij een template met daarin belangrijke informatie over jouw veranderingen. Denk aan wat er inhoudelijk is veranderd, hoe je het getest hebt, before & after foto's en hoe je teamleden het moeten reviewen. Bedenk een korte en duidelijke titel voor je pull request.

**Pull request template:**

```
## What does this change?

Fixes issue #issuenumber

<!-- A PR should have enough detail to be understandable far in the future. e.g what is the problem/why is the change needed,
how does it solve it and any questions or points of discussion.
Prefer copying information from a GitHub issue over linking to it;
the card may not always exist and reviewers may not have access to the board. -->


## How Has This Been Tested?

- [x] [User test](https://link-to-your-test.com)
- [ ] Accessibility test
- [ ] Performance test
- [ ] Responsive Design test
- [ ] Device test
- [ ] Browser test

## Images

### Before / After

<!-- Usually only applicable to UI changes, what did it look like before and what will it look like after? -->

## How to review

<!-- Provide instructions to help others verify the change.
This could take the form of "On PROD, do X and witness Y. On this branch, do X and witness Z. " -->

- [ ] Check code conventions
- [ ] Test on the live preview
- [ ] Test on mobile device
```
Wanneer je een PR van een teamlid reviewed, kijk je naar de code bij "files changed" en laat je een comment achter met je review. Zijn er nog dingen in de code die aangepast moeten worden? wordt er aan de code conventies gehouden? Naast de code kun je ook de live preview testen, mits die er is, en comments daarover achterlaten met een duidelijke beschrijving van de feedback, én een foto als het over UI gaat.

> Je verwerkt altijd eerst de feedback voordat je een PR sluit!

- [Voorbeeld van een gesloten, gereviewde pull request](https://github.com/fdnd-agency/buurtcampus-oost/pull/332)

---

## Code conventies

In het project gebruiken wij een aantal code conventies:

### Algemeen
- Engelse naamgeving.
- Progressive Enhancement.
- Gebruiksvriendelijk (Accessibility).
- Comments (kleine toelichting code).

### HTML
- Mobile first aanpak.
- Dynamische content.
- Semantisch HTML code.

### CSS
- DRY aanpak.
- Kebab-case voor classes en id's.
- Media queries aan de einde van de css-bestand.
- CSS in dezelfde volgorde als de HTML-structuur.
- Classes en id's duidelijke (logische) namen geven.
- Custom properties (kleuren, waardes enz) voor nettere code.


* [Originele issue over code conventies](https://github.com/fdnd-agency/buurtcampus-oost/issues/117)

