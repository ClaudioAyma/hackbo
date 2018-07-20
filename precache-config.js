var SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

module.exports = {
    navigateFallback:"/index.html",
    navigateFallbackWhitelist: [/^(?!\/_)/], // necesario para la firebase
    stripPrefix: "dist",
    root: "dist/",
    plugins: [
        new SWPrecacheWebpackPlugin({
            cacheId: "firestarter",
            filename: "service-worker.js",
            staticFileGlobs: [
                "dist/index.html",
                "dist/**.js",
                "dist/**.css"
            ],
            stripPrefix: "dist/assets/",
            mergeStaticConfig: true
        })
    ]
};