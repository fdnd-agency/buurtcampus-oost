export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-96x96.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","mstile-150x150.png","safari-pinned-tab.svg","site.webmanifest","style.css"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.bd1ab434.js","app":"_app/immutable/entry/app.64c94546.js","imports":["_app/immutable/entry/start.bd1ab434.js","_app/immutable/chunks/scheduler.ed9c3e2c.js","_app/immutable/chunks/singletons.a389a647.js","_app/immutable/entry/app.64c94546.js","_app/immutable/chunks/scheduler.ed9c3e2c.js","_app/immutable/chunks/index.12313480.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
