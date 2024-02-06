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
		client: {"start":"_app/immutable/entry/start.9bc3c87a.js","app":"_app/immutable/entry/app.738f01d6.js","imports":["_app/immutable/entry/start.9bc3c87a.js","_app/immutable/chunks/scheduler.b3201d0c.js","_app/immutable/chunks/singletons.9e8067ee.js","_app/immutable/entry/app.738f01d6.js","_app/immutable/chunks/scheduler.b3201d0c.js","_app/immutable/chunks/index.12f54fa1.js"],"stylesheets":[],"fonts":[]},
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
