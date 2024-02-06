import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import "prettier";
/* empty css                                                        */import { N as NavDark, M as MobileMenu, F as Footer } from "../../../chunks/MobileMenu.js";
import { V as Vector } from "../../../chunks/Location.svelte_svelte_type_style_lang.js";
import { V as VectorPlant } from "../../../chunks/vectorplant.js";
const css$6 = {
  code: "header.svelte-on7310{position:relative;display:flex;justify-content:center;align-items:center;width:100%;height:90vh}div.svelte-on7310{position:absolute;width:100%;height:100%;z-index:-1}header.svelte-on7310::after{content:'';position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.117)}img.svelte-on7310{width:100%;height:100%;object-fit:cover}h1.svelte-on7310{color:white;font-size:6vw;z-index:2;view-transition-name:h1}",
  map: null
};
const KastImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$6);
  return `<header class="svelte-on7310"><div class="svelte-on7310"><img${add_attribute("src", data.kastHeaders[0].image.url, 0)} alt="" class="svelte-on7310"></div> <h1 class="svelte-on7310" data-svelte-h="svelte-54elew">De Kast</h1> </header>`;
});
const img1 = "/_app/immutable/assets/tweede.817ff5ea.avif";
const css$5 = {
  code: "section.svelte-sfkgcj{position:sticky;top:0;padding:2em;height:90vh;width:100%;overflow:hidden;color:var(--main-offwhite);color:rgb(255, 217, 184);margin-bottom:55vh}.wrapper-block.svelte-sfkgcj{height:100%;width:100%;background-color:rgb(73, 27, 2);display:flex;border-radius:1em;padding:2em}.left-content.svelte-sfkgcj{width:100%}.right-content.svelte-sfkgcj{height:100%;width:100%}img.svelte-sfkgcj{height:100%;width:100%;object-fit:cover;border-radius:1em}h3.svelte-sfkgcj{font-size:5em;font-weight:900;max-width:90%;line-height:1em;margin-bottom:1.2rem}p.svelte-sfkgcj{max-width:75%}@media screen and (max-width: 1122px){}@media screen and (max-width: 700px){h3.svelte-sfkgcj{font-size:2em}p.svelte-sfkgcj{max-width:100%;padding-bottom:1em}img.svelte-sfkgcj{height:60%;width:100%;object-fit:cover;border-radius:1em}.wrapper-block.svelte-sfkgcj{flex-direction:column;padding:1em;justify-content:space-between;align-items:center}}",
  map: null
};
const TheMaking = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<section class="svelte-sfkgcj" data-svelte-h="svelte-1q4e98p"><div class="wrapper-block svelte-sfkgcj"><div class="left-content svelte-sfkgcj"><h3 class="svelte-sfkgcj">The making of... de kast</h3> <p class="svelte-sfkgcj">De eerste Buurtcampus stekjeskast is gemaakt door kinderen van de Maakplaats 021 in de OBA Javaplein. Hier leren kinderen uit de buurt vanaf 8 jaar onder anderen 3D-printen, lasersnijden, programmeren of muziekinstrumenten maken.</p></div> <div class="right-content svelte-sfkgcj"><img${add_attribute("src", img1, 0)} alt="" class="svelte-sfkgcj"></div></div> </section>`;
});
const img$2 = "/_app/immutable/assets/bovenste.63dbcf15.avif";
const css$4 = {
  code: "section.svelte-rwwoqm{position:sticky;top:2em;padding:2em;height:90vh;width:100%;overflow:hidden;color:rgb(73, 27, 2);margin-bottom:55vh}.wrapper-block.svelte-rwwoqm{height:100%;width:100%;background-color:rgb(255, 154, 65);display:flex;border-radius:1em;padding:2em}.left-content.svelte-rwwoqm{width:100%}.right-content.svelte-rwwoqm{height:100%;width:100%;padding-left:2em}img.svelte-rwwoqm{height:100%;width:100%;object-fit:cover;border-radius:1em}h3.svelte-rwwoqm{font-size:5em;font-weight:900;max-width:90%;line-height:1em;margin-bottom:1.2rem}p.svelte-rwwoqm{max-width:75%}@media screen and (max-width: 1122px){}@media screen and (max-width: 700px){h3.svelte-rwwoqm{font-size:2em}p.svelte-rwwoqm{max-width:100%;padding-bottom:1em}img.svelte-rwwoqm{height:100%;width:100%;object-fit:cover;border-radius:1em}.wrapper-block.svelte-rwwoqm{flex-direction:column;padding:1em;justify-content:space-between;align-items:center}.left-content.svelte-rwwoqm{height:35%}.right-content.svelte-rwwoqm{padding-left:0em;padding-top:1em}}",
  map: null
};
const TheMaking2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section class="svelte-rwwoqm" data-svelte-h="svelte-ihi2om"><div class="wrapper-block svelte-rwwoqm"><div class="left-content svelte-rwwoqm"><img${add_attribute("src", img$2, 0)} alt="" class="svelte-rwwoqm"></div> <div class="right-content svelte-rwwoqm"><h3 class="svelte-rwwoqm">Toen de kast gemaakt werd...</h3> <p class="svelte-rwwoqm">Een van de begeleiders van de Maakplaats 021 bedacht het ontwerp van de kast, die - met het oog op duurzaamheid - volledig gemaakt is van een gebruikte pallet en afvalhout</p></div></div> </section>`;
});
const img$1 = "/_app/immutable/assets/derde.bbba9ac1.avif";
const css$3 = {
  code: "section.svelte-hq4lr5{position:sticky;top:4em;padding:2em;height:90vh;width:100%;overflow:hidden;color:rgb(255, 217, 184);margin-bottom:55vh}.wrapper-block.svelte-hq4lr5{height:100%;width:100%;background-color:rgb(59, 89, 62);display:flex;border-radius:1em;padding:2em}.left-content.svelte-hq4lr5{width:100%}.right-content.svelte-hq4lr5{height:100%;width:100%;padding-left:2em}img.svelte-hq4lr5{height:100%;width:100%;object-fit:cover;border-radius:1em}h3.svelte-hq4lr5{font-size:5em;font-weight:900;max-width:90%;line-height:1em;margin-bottom:1.2rem}p.svelte-hq4lr5{max-width:75%}@media screen and (max-width: 1122px){}@media screen and (max-width: 700px){h3.svelte-hq4lr5{font-size:2em}p.svelte-hq4lr5{max-width:100%;padding-bottom:1em}img.svelte-hq4lr5{height:100%;width:100%;object-fit:cover;border-radius:1em}.wrapper-block.svelte-hq4lr5{flex-direction:column;padding:1em;justify-content:space-between;align-items:center}.left-content.svelte-hq4lr5{height:35%}.right-content.svelte-hq4lr5{padding-left:0em;padding-top:1em}}",
  map: null
};
const TheMaking3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="svelte-hq4lr5" data-svelte-h="svelte-vn1560"><div class="wrapper-block svelte-hq4lr5"><div class="left-content svelte-hq4lr5"><img${add_attribute("src", img$1, 0)} alt="" class="svelte-hq4lr5"></div> <div class="right-content svelte-hq4lr5"><h3 class="svelte-hq4lr5">... met heel veel hulp</h3> <p class="svelte-hq4lr5">De kinderen mochten zelf de kleurontwerpen bedenken. Hierdoor heeft de kast een volledig uniek uiterlijk waar de stekjes vanuit alle kanten van de bieb te bewonderen zijn.</p></div></div> </section>`;
});
const img = "/_app/immutable/assets/laatste.e2e2a484.avif";
const css$2 = {
  code: "section.svelte-102eysf{position:sticky;top:6em;padding:2em;height:90vh;width:100%;color:rgb(59, 89, 62);margin-bottom:55vh}.wrapper-block.svelte-102eysf{height:100%;width:100%;background-color:rgb(255, 217, 184);display:flex;border-radius:1em;padding:2em}.left-content.svelte-102eysf{width:100%}.right-content.svelte-102eysf{height:100%;width:100%}img.svelte-102eysf{height:100%;width:100%;object-fit:cover;border-radius:1em}h3.svelte-102eysf{font-size:5em;font-weight:900;max-width:90%;line-height:1em;margin-bottom:1.2rem}p.svelte-102eysf{max-width:75%}@media screen and (max-width: 1122px){}@media screen and (max-width: 700px){h3.svelte-102eysf{font-size:2em}p.svelte-102eysf{max-width:100%;padding-bottom:1em;line-height:1em}img.svelte-102eysf{height:60%;width:100%;object-fit:cover;border-radius:1em}.wrapper-block.svelte-102eysf{flex-direction:column;padding:1em;justify-content:space-between;align-items:center}}",
  map: null
};
const TheMaking4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="svelte-102eysf" data-svelte-h="svelte-ledxpl"><div class="wrapper-block svelte-102eysf"><div class="left-content svelte-102eysf"><h3 class="svelte-102eysf">En nu wordt de kast met liefde gebruikt!</h3> <p class="svelte-102eysf">Tijdens de Groendag van de OBA Linnaeus in de zomer van 2023 is de kast
        officieel geopend. Het idee is om elke OBA waar een Buurtcampus
        gevestigd is een eigen stekjeskast gemaakt door kinderen uit de buurt te
        geven, zodat in alle stadsdelen van Amsterdam buurtbewoners gratis
        stekjes kunnen ruilen.</p></div> <div class="right-content svelte-102eysf"><img${add_attribute("src", img, 0)} alt="" class="svelte-102eysf"></div></div> </section>`;
});
const Pkast_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "p.svelte-1tuj4gy{width:60%}@media screen and (max-width: 767px){p.svelte-1tuj4gy{width:100%}}",
  map: null
};
const Pkast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<p class="svelte-1tuj4gy" data-svelte-h="svelte-b9s0q7">Natuurlijk! Workshops zijn fantastische leermogelijkheden waarbij deelnemers praktische
	vaardigheden kunnen verwerven, nieuwe kennis kunnen opdoen en vaak ook nieuwe mensen kunnen
	ontmoeten. Het idee achter jouw website om een overzicht te bieden van beschikbare workshops is
	geweldig.
</p>`;
});
const InfoKast_svelte_svelte_type_style_lang = "";
const css = {
  code: ".info-workshop.svelte-thc74m.svelte-thc74m{position:relative;display:flex;gap:var(--padding);background-color:var(--background-color-light);border-radius:var(--bradius);height:15rem;margin:var(--margin) var(--margin) 0 var(--margin);padding:var(--padding);overflow:hidden}.info-paragraph.svelte-thc74m.svelte-thc74m{width:60%}#one.svelte-thc74m.svelte-thc74m{position:absolute;top:10rem;right:18rem}#two.svelte-thc74m.svelte-thc74m{position:absolute;top:-150px;right:10rem;transform:rotate(250deg)}#three.svelte-thc74m.svelte-thc74m{position:absolute;top:6rem;right:-7rem;transform:rotate(-10deg)}@media screen and (max-width: 767px){.info-workshop.svelte-thc74m.svelte-thc74m{width:100%;margin:0;margin-top:2rem;padding:1rem;height:100%}.info-paragraph.svelte-thc74m.svelte-thc74m{width:0%}.vector.svelte-thc74m img.svelte-thc74m{width:30px}}",
  map: null
};
const InfoKast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="info-workshop svelte-thc74m"><div class="vector svelte-thc74m" data-svelte-h="svelte-3iwfkp"><img${add_attribute("src", Vector, 0)} alt="icon info tekst" class="svelte-thc74m"></div> ${validate_component(Pkast, "ParagraphKast").$$render($$result, {}, {}, {})} <div class="info-paragraph svelte-thc74m" data-svelte-h="svelte-jwmha0"><img id="one"${add_attribute("src", VectorPlant, 0)} alt="incon plant" class="svelte-thc74m"> <img id="two"${add_attribute("src", VectorPlant, 0)} alt="incon plant" class="svelte-thc74m"> <img id="three"${add_attribute("src", VectorPlant, 0)} alt="incon plant" class="svelte-thc74m"></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(NavDark, "NavDark").$$render($$result, {}, {}, {})} ${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})} ${validate_component(KastImage, "HeaderKast").$$render($$result, { data }, {}, {})} ${validate_component(InfoKast, "InfoKast").$$render($$result, {}, {}, {})} ${validate_component(TheMaking, "TheMaking").$$render($$result, {}, {}, {})} ${validate_component(TheMaking2, "TheMaking2").$$render($$result, {}, {}, {})} ${validate_component(TheMaking3, "TheMaking3").$$render($$result, {}, {}, {})} ${validate_component(TheMaking4, "TheMaking4").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
