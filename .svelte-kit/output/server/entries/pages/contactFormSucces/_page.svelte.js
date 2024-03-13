import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
const FormSuccesfullSubmittedPage_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-bqy7mx{height:100vh;width:100%;background-color:var(--main-blue);display:flex;flex-direction:column;align-items:center;justify-content:center;color:var(--main-offwhite)}h6.svelte-bqy7mx{font-size:5vw;max-width:60%;text-align:center;line-height:1em}",
  map: null
};
const FormSuccesfullSubmittedPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="svelte-bqy7mx" data-svelte-h="svelte-1xs9xyn"><h6 class="svelte-bqy7mx">Bedankt voor uw aanvraag!</h6> <p>Wij nemen spoedig contact met u op.</p> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(FormSuccesfullSubmittedPage, "FormSuccesfullSubmittedPage").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
