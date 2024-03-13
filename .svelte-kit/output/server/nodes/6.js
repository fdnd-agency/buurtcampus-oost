import * as server from '../entries/pages/maken/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/maken/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/maken/+page.server.js";
export const imports = ["_app/immutable/nodes/6.a8b648f6.js","_app/immutable/chunks/scheduler.ed9c3e2c.js","_app/immutable/chunks/index.12313480.js","_app/immutable/chunks/TheMaking4.svelte_svelte_type_style_lang.41b23532.js","_app/immutable/chunks/Footer.aa91bd3d.js","_app/immutable/chunks/Navigation.993fa8f3.js"];
export const stylesheets = ["_app/immutable/assets/Location.b0fd8c79.css","_app/immutable/assets/TheMaking4.e14d930a.css","_app/immutable/assets/Footer.062d8eb5.css","_app/immutable/assets/Navigation.036387f2.css"];
export const fonts = [];
