import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.027e9b49.js","_app/immutable/chunks/scheduler.b3201d0c.js","_app/immutable/chunks/index.12f54fa1.js","_app/immutable/nodes/6.99fc0f0e.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/MobileMenu.962e516a.js"];
export const stylesheets = ["_app/immutable/assets/6.0f7c142b.css","_app/immutable/assets/MobileMenu.35b5299f.css"];
export const fonts = [];
