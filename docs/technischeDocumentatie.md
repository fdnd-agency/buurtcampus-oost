# Technische documentatie
Hier leggen we een aantal technische aspecten van het project uit.

## Structuur code
![image](https://github.com/user-attachments/assets/ade5daa9-5f3d-4d1f-a5fb-ac07d917ab2a)

De sctructuur spreekt voor zich. In de lib-folder zitten alle componenten onderverdeeld, onder routes zitten mapjes met alle pagina's + de standaard pagina's zoals error.svelte. En onder static zitten de CSS bestanden + de assets.

## CMS
We gebruiken HyGraph als CMS. Jullie moeten bij Joost zijn om hier in te komen. Bijna alle data/tekst op de website komt uit hygraph. Voor alle dynamische pagina's hebben we een +page.server.js bestand waar we de HyGraph data ophalen.
https://github.com/fdnd-agency/buurtcampus-oost/blob/47689846a6a7d57683fb55c11c8a78f1c18603ff/src/routes/stekjes/%2Bpage.server.js#L1-L50

## Harry
Harry is de mascotte van het Bieb in Bloei project en te vinden op de home, stekjes en zaden pagina's. 
Alle code rondom Harry is te vinden in deze bestanden:
- JS: /src/lib/atoms/buttons/harryWeather.svelte
- SVG: /src/lib/atoms/harry.svelte
- CSS: /static/harryWeather.css
- CSS: /static/harry.css

### Harry Styles+animaties
In het HarryWeather.css bestand kan je alle styling van Harry vinden. Wat dingen om op te letten:
- https://github.com/fdnd-agency/buurtcampus-oost/blob/47689846a6a7d57683fb55c11c8a78f1c18603ff/static/harryWeather.css#L80
- Dit zorgt ervoor dat op de home-pagina plant/zaad specifieke tekst niet wordt weergegeven in de tekstwolk.

- Vanag regel 85 beginnen de animaties, de animaties classes zijn pagina-specifiek. 

### Harry JS
In het harryWeather.svelte bestand is alle JS code rondom Harry te vinden.

Dit zijn alle relevante variabelen. Mood en environment hebben te maken met de SVG, sentence is de standaard-zin voor bijv. op de home-pagina, met een alternatief mocht de standaard-zin niet mogelijk zijn. Detail is de plant/zaad specifieke informatie. isDesktop en IsVisible hebben te maken met dat er alleen op grote schermen (>48rem) een langere tekst met regen wordt toegevoegd naast de temperatuur, en als je op het kruisje drukt dat harry verdwijnt. 
https://github.com/fdnd-agency/buurtcampus-oost/blob/47689846a6a7d57683fb55c11c8a78f1c18603ff/src/lib/atoms/buttons/harryWeather.svelte#L7-L20

Dit zijn alle opties voor Harry in een switch, momenteel 7 dingen, maar kan worden uitgebreid mochten er meer Harry-moods gemaakt worden, of bijv. feestdagen toevoegen.
https://github.com/fdnd-agency/buurtcampus-oost/blob/47689846a6a7d57683fb55c11c8a78f1c18603ff/src/lib/atoms/buttons/harryWeather.svelte#L37

Aan de hand hiervan wordt er gekeken op welke pagina je zit, en wordt er een class toegevoegd. Hiermee kunnen we op verschillende pagina's verschillende animaties toevoegen.
https://github.com/fdnd-agency/buurtcampus-oost/blob/47689846a6a7d57683fb55c11c8a78f1c18603ff/src/lib/atoms/buttons/harryWeather.svelte#L89-L104

## Harry gebruiken
Harry kan met deze 2 regels in elk bestand gebruikt worden, je moet wel rekening houden met dat niet alle CSS zal werken direct.
https://github.com/fdnd-agency/buurtcampus-oost/blob/47689846a6a7d57683fb55c11c8a78f1c18603ff/src/routes/stekjes/%5Bslug%5D/%2Bpage.svelte#L3
https://github.com/fdnd-agency/buurtcampus-oost/blob/47689846a6a7d57683fb55c11c8a78f1c18603ff/src/routes/stekjes/%5Bslug%5D/%2Bpage.svelte#L15

### Harry SVG
> Larissa legt dit nog uit.
