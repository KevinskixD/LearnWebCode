const path = require("path");
const postCSSPlugins = [
    require("postcss-import"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer"),
]

module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        filename: "bundled.js",
        path: path.resolve(__dirname, "app"),
    },
    mode: "development",
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i, // Regular Expression dass es nur auf CSS Dateien zutrifft
                use: ["style-loader" ,"css-loader", {loader: "postcss-loader", options:{plugins: postCSSPlugins}}] // Only if File Ends in CSS -> Use CSS-Loader for Bundling -> Style-Loader to apply CSS
            }
        ]
    }
}