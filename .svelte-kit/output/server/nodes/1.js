

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.62e35303.js","_app/immutable/chunks/scheduler.ed9c3e2c.js","_app/immutable/chunks/index.12313480.js","_app/immutable/chunks/singletons.a389a647.js"];
export const stylesheets = [];
export const fonts = [];
