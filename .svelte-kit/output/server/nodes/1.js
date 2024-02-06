

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.eb730a8d.js","_app/immutable/chunks/scheduler.b3201d0c.js","_app/immutable/chunks/index.12f54fa1.js","_app/immutable/chunks/singletons.9e8067ee.js"];
export const stylesheets = [];
export const fonts = [];
