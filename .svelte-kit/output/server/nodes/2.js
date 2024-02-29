import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.7800909b.js","_app/immutable/chunks/scheduler.ed9c3e2c.js","_app/immutable/chunks/index.12313480.js","_app/immutable/chunks/Navigation.993fa8f3.js","_app/immutable/chunks/Footer.aa91bd3d.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/2.5ee6c965.css","_app/immutable/assets/Carouselstekje.eaa4e28a.css","_app/immutable/assets/Navigation.036387f2.css","_app/immutable/assets/Footer.062d8eb5.css"];
export const fonts = [];
