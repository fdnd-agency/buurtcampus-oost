import * as server from '../entries/pages/_slug_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.f3742a7d.js","_app/immutable/chunks/scheduler.ed9c3e2c.js","_app/immutable/chunks/index.12313480.js","_app/immutable/chunks/Footer.aa91bd3d.js","_app/immutable/chunks/vectorplant.9c23bb20.js"];
export const stylesheets = ["_app/immutable/assets/3.b33c2a6d.css","_app/immutable/assets/Carouselstekje.eaa4e28a.css","_app/immutable/assets/Footer.062d8eb5.css"];
export const fonts = [];
