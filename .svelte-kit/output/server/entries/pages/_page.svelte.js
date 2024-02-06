import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import Page$1 from "./home/_page.svelte.js";
import { N as NavDark, M as MobileMenu, F as Footer } from "../../chunks/MobileMenu.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(NavDark, "NavDark").$$render($$result, {}, {}, {})} ${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})} ${validate_component(Page$1, "Home").$$render($$result, { data }, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
