

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contactFormSucces/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.3df745ef.js","_app/immutable/chunks/scheduler.ed9c3e2c.js","_app/immutable/chunks/index.12313480.js"];
export const stylesheets = ["_app/immutable/assets/5.b7aee42a.css"];
export const fonts = [];
