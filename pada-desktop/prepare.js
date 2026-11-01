// 1. Writes src/fonts/fonts.js: a list of every font file in src/fonts (except the two built-in ones).
// 2. Copies the PADA web files (index.html and src/) into pada-desktop/www,
//    so both "npm start" and the packaged installer contain the same files.
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const fontsDir = path.join(root, "src", "fonts");
const builtIn = ["Monospace.woff2", "Virgil.woff2"];
const fontExt = [".woff2", ".woff", ".ttf", ".otf"];

// Font list for the Text / Note font dropdown
const files = fs
  .readdirSync(fontsDir)
  .filter((f) => fontExt.includes(path.extname(f).toLowerCase()) && !builtIn.includes(f));
const list = files.map((file) => {
  const label = path.basename(file, path.extname(file));
  const key = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return { key, label, file };
});
fs.writeFileSync(
  path.join(fontsDir, "fonts.js"),
  "// Written by pada-desktop/prepare.js from the files in src/fonts\n" +
    `window.PADA_FONTS = ${JSON.stringify(list, null, 2)};\n`
);

// Copy the web files for the desktop app
const dest = path.join(__dirname, "www");
fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest, { recursive: true });
fs.copyFileSync(path.join(root, "index.html"), path.join(dest, "index.html"));
fs.cpSync(path.join(root, "src"), path.join(dest, "src"), { recursive: true });
console.log(`PADA: ${list.length} extra font(s) listed; web files copied to www/`);
