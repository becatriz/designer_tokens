const path = require("path");
const { getBrands } = require("./brand");
const { buildTokens } = require("./build");

// dist/css/globals.css
// dist/css/marca-a/tema-1/dark.css

getBrands().map(async function (current) {
  const buildPath = {
    css: path.join("dist", "css", current.dest, path.sep),
  };

  await buildTokens({ current, buildPath });
});
