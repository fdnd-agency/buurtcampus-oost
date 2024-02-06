import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { V as Vector } from "../../../chunks/Location.svelte_svelte_type_style_lang.js";
import { N as NavDark, M as MobileMenu, F as Footer } from "../../../chunks/MobileMenu.js";
const css$4 = {
  code: "h2.svelte-1qd3i2m.svelte-1qd3i2m{font-size:40px }div.svelte-1qd3i2m.svelte-1qd3i2m{display:flex;gap:1rem}div.svelte-1qd3i2m img.svelte-1qd3i2m{height:2rem;width:auto;margin-top:1rem}section.svelte-1qd3i2m.svelte-1qd3i2m{width:80%}p.svelte-1qd3i2m.svelte-1qd3i2m{width:100%;margin-top:0.5rem}",
  map: null
};
const NewContactInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section class="svelte-1qd3i2m" data-svelte-h="svelte-9s7ziu"><div class="svelte-1qd3i2m"><img${add_attribute("src", Vector, 0)} alt="icon info tekst" class="svelte-1qd3i2m"> <h2 class="svelte-1qd3i2m">Contact</h2></div> <p class="svelte-1qd3i2m">Vragen, suggesties of gewoon zin in een groene babbel? Neem contact op en laten we praten over
		planten!</p> </section>`;
});
const css$3 = {
  code: "section.svelte-1rdvkxy{display:flex;flex-direction:column;width:100%;padding-right:var(--padding)}form.svelte-1rdvkxy{display:flex;flex-direction:column;width:100%;gap:4px;margin-top:2rem}.radio-2.svelte-1rdvkxy{margin-bottom:0.5rem}input[type='text'].svelte-1rdvkxy,input[type='email'].svelte-1rdvkxy,input[type='tel'].svelte-1rdvkxy,textarea.svelte-1rdvkxy{border:none;padding:0.5rem;margin-bottom:0.5rem;border-radius:var(--bradius);font-family:'Mulish', sans-serif}input[type='submit'].svelte-1rdvkxy{margin-top:1rem;margin-bottom:2rem;border:none;border-radius:var(--bradius);padding:0.5rem;width:6rem;background-color:var(--button-color);color:var(--text-color);font-weight:bold}input[type='submit'].svelte-1rdvkxy:hover{color:var(--button-color);background-color:var(--text-color)}@media(min-width: 760px){section.svelte-1rdvkxy{width:50%}}",
  map: null
};
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section class="svelte-1rdvkxy">${validate_component(NewContactInfo, "ContactInfo").$$render($$result, {}, {}, {})} <form action="https://api.web3forms.com/submit" method="POST" class="svelte-1rdvkxy" data-svelte-h="svelte-1h0ky7j"><input type="hidden" name="access_key" value="59b62920-afbb-4637-be5f-736618bec604">   <input type="hidden" name="redirect" value="https://web3forms.com/success">  <input type="checkbox" name="botcheck" class="hidden" style="display: none;"> <label for="reason">Reden voor contact:</label> <div><input type="radio" id="question" name="contact-reason" value="question" checked> <label for="question">Ik heb een vraag</label></div> <div class="radio-2 svelte-1rdvkxy"><input type="radio" id="workshop" name="contact-reason" value="workshop"> <label for="workshop">Ik wil mij aanmelden voor een workshop</label></div> <label for="name">Voornaam:</label> <input type="text" id="name" name="name" placeholder="Voer je voornaam in" required class="svelte-1rdvkxy"> <label for="lastname">Achternaam:</label> <input type="text" id="lastname" name="lastname" placeholder="Voer je achternaam in" required class="svelte-1rdvkxy"> <label for="email">E-mail:</label> <input type="email" id="email" name="email" placeholder="Voer je e-mailadres in" required class="svelte-1rdvkxy"> <label for="phone-number">Telefoonnummer:</label> <input type="tel" id="phone-number" name="phone-number" inputmode="numeric" pattern="[0-9]*" placeholder="Voer je telefoonnummer in" required class="svelte-1rdvkxy"> <label for="message">Stel je vraag of vertel voor welke workshop je je wilt
      aanmelden!</label> <textarea id="message" name="message" cols="30" rows="10" placeholder="Typ hier je bericht" required class="svelte-1rdvkxy"></textarea> <input type="submit" value="Verzenden" class="svelte-1rdvkxy"></form> </section>`;
});
const css$2 = {
  code: "iframe.svelte-s5szlx{border-radius:var(--bradius);width:50%;height:auto}@media screen and (max-width: 700px){iframe.svelte-s5szlx{border-radius:var(--bradius);width:100%;height:auto}}",
  map: null
};
const Location = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<iframe title="locactie van buurtcampus op google maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9746.694701928573!2d4.90776298107777!3d52.35820356282836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6097132bffcc7%3A0x290544c1d1a9e37c!2sOBA%20Linnaeus!5e0!3m2!1snl!2snl!4v1701117358615!5m2!1snl!2snl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="svelte-s5szlx"></iframe>`;
});
const ContactImage_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-on7310{position:relative;display:flex;justify-content:center;align-items:center;width:100%;height:90vh}div.svelte-on7310{position:absolute;width:100%;height:100%;z-index:-1}header.svelte-on7310::after{content:'';position:absolute;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.117)}img.svelte-on7310{width:100%;height:100%;object-fit:cover}h1.svelte-on7310{color:white;font-size:6vw;z-index:2;view-transition-name:h1}",
  map: null
};
const ContactImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  return `<header class="svelte-on7310" data-svelte-h="svelte-xf37rf"><div class="svelte-on7310"> <img src="https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="svelte-on7310"></div> <h1 class="svelte-on7310">Contact</h1> </header>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-12fe41{padding:var(--padding);flex-wrap:wrap;gap:2rem;padding:var(--padding);width:100%}.wrapper.svelte-12fe41{width:100%;padding:var(--padding);background-color:var(--background-color-light);border-radius:var(--bradius);display:flex}@media screen and (max-width: 700px){.wrapper.svelte-12fe41{flex-direction:column}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(NavDark, "NavDark").$$render($$result, {}, {}, {})} ${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})} ${validate_component(ContactImage, "ContactImage").$$render($$result, { data }, {}, {})} <main class="svelte-12fe41"><div class="wrapper svelte-12fe41">${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})} ${validate_component(Location, "Location").$$render($$result, {}, {}, {})}</div></main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
