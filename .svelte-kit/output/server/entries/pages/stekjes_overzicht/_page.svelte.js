import { c as create_ssr_component, d as add_attribute, v as validate_component, f as each, e as escape, h as null_to_empty } from "../../../chunks/ssr.js";
import "prettier";
/* empty css                                                        */import { N as NavDark, M as MobileMenu, F as Footer } from "../../../chunks/MobileMenu.js";
import { V as Vector } from "../../../chunks/Location.svelte_svelte_type_style_lang.js";
import { V as VectorPlant } from "../../../chunks/vectorplant.js";
const css$3 = {
  code: "header.svelte-57lkgg{position:relative;display:flex;justify-content:center;align-items:center;width:100%;height:90vh}div.svelte-57lkgg{position:absolute;width:100%;height:100%;z-index:-1}header.svelte-57lkgg::after{content:'';position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.117)}img.svelte-57lkgg{width:100%;height:100%;object-fit:cover}h1.svelte-57lkgg{color:white;font-size:6vw;z-index:2;view-transition-name:h1}",
  map: null
};
const ImageOverzicht = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$3);
  return `<header class="svelte-57lkgg"><div class="svelte-57lkgg"><img${add_attribute("src", data.stekjesHeaders[0].image.url, 0)} alt="" class="svelte-57lkgg"></div> <h1 class="svelte-57lkgg" data-svelte-h="svelte-hkf0vv">Stekjes</h1> </header>`;
});
const css$2 = {
  code: ".info-Stekjes.svelte-1qpbyvd.svelte-1qpbyvd{position:relative;display:flex;gap:var(--padding);background-color:var(--background-color-light);border-radius:var(--bradius);width:25%;height:30vh;padding:var(--padding);overflow:hidden;margin-top:1rem}.info-Stekjes.svelte-1qpbyvd p.svelte-1qpbyvd{z-index:10}.info-paragraph.svelte-1qpbyvd.svelte-1qpbyvd{width:60%}#one.svelte-1qpbyvd.svelte-1qpbyvd{position:absolute;top:10rem;right:18rem}#two.svelte-1qpbyvd.svelte-1qpbyvd{position:absolute;top:-150px;right:10rem;transform:rotate(250deg)}#three.svelte-1qpbyvd.svelte-1qpbyvd{position:absolute;top:6rem;right:-7rem;transform:rotate(-10deg)}@media(max-width: 425px){.info-Stekjes.svelte-1qpbyvd.svelte-1qpbyvd{width:100%}}@media(min-width: 425px){.info-Stekjes.svelte-1qpbyvd.svelte-1qpbyvd{width:100%}}@media(min-width: 768px){.info-Stekjes.svelte-1qpbyvd.svelte-1qpbyvd{width:100%;justify-content:center}}@media(min-width: 1024px){.info-Stekjes.svelte-1qpbyvd.svelte-1qpbyvd{width:24%;min-height:60vh}}",
  map: null
};
const InfoStekjes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="info-Stekjes svelte-1qpbyvd" data-svelte-h="svelte-teuupv"><div class="vector"><img${add_attribute("src", Vector, 0)} alt="icon info tekst"></div> <p class="svelte-1qpbyvd">Heb jij een of meerdere plantenstekjes over en zou je die graag
    willen ruilen voor een nieuwe plantje? Bekijk hieronder ons
    aanbod.</p> <div class="info-paragraph svelte-1qpbyvd"><img id="one"${add_attribute("src", VectorPlant, 0)} alt="incon plant" class="svelte-1qpbyvd"> <img id="two"${add_attribute("src", VectorPlant, 0)} alt="incon plant" class="svelte-1qpbyvd"> <img id="three"${add_attribute("src", VectorPlant, 0)} alt="incon plant" class="svelte-1qpbyvd"></div> </div>`;
});
const css$1 = {
  code: "section.svelte-158ib8v.svelte-158ib8v{display:flex;flex-direction:row;flex-wrap:wrap;gap:1rem}article.svelte-158ib8v.svelte-158ib8v{position:relative;min-height:50vh;width:24%;padding:1rem;border-radius:var(--bradius);overflow:hidden;margin-top:1rem}img.svelte-158ib8v.svelte-158ib8v{position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover}h3.svelte-158ib8v.svelte-158ib8v{position:relative;color:white;font-size:2rem;line-height:1.5em;z-index:5}article.svelte-158ib8v a.svelte-158ib8v{position:absolute;bottom:2rem;left:1rem;text-decoration:none;color:white;background-color:var(--button-color);padding:0.5rem 1rem;border-radius:var(--bradius);cursor:pointer;z-index:5;transition:0.2s}article.svelte-158ib8v a.svelte-158ib8v:hover{background-color:white;color:var(--button-color)}article.svelte-158ib8v a:hover i.svelte-158ib8v{font:orange}article.svelte-158ib8v.svelte-158ib8v::after{content:'';position:absolute;width:100%;height:100%;top:0;right:0;background-color:rgba(40, 40, 40, 0.199);z-index:1}@media(max-width: 425px){article.svelte-158ib8v.svelte-158ib8v{width:100%}}@media(min-width: 425px){article.svelte-158ib8v.svelte-158ib8v{width:100%}}@media(min-width: 768px){article.svelte-158ib8v.svelte-158ib8v{width:47%}}@media(min-width: 1024px){article.svelte-158ib8v.svelte-158ib8v{width:24%;min-height:60vh}}",
  map: null
};
const StekjesCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<section class="svelte-158ib8v">${validate_component(InfoStekjes, "StekjesInfo").$$render($$result, {}, {}, {})} ${each(data.stekjes, (stekje) => {
    return `<article class="${escape(null_to_empty(stekje.categories.naam), true) + " svelte-158ib8v"}"><img${add_attribute("src", stekje.fotos[0].url, 0)} loading="lazy" height="60vh" width="24%" alt="${"een volwassen " + escape(stekje.naam, true) + " stekje "}" class="svelte-158ib8v"> <a${add_attribute("href", stekje.slug, 0)} class="svelte-158ib8v">Bekijk stekje <i class="fa-solid fa-play svelte-158ib8v"></i></a> <h3 class="svelte-158ib8v">${escape(stekje.naam)}</h3> </article>`;
  })} </section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-olgyn6{display:flex;flex-direction:row;flex-wrap:wrap;gap:1%;margin:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(NavDark, "NavDark").$$render($$result, {}, {}, {})} ${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})} ${validate_component(ImageOverzicht, "HeaderStekje").$$render($$result, { data }, {}, {})} <main class="svelte-olgyn6"> ${validate_component(StekjesCard, "StekjeCard").$$render($$result, { data }, {}, {})}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
