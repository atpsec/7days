const fs = require("fs");

const requiredFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "assets/roadmap-snapshot.png",
  "assets/favicon.png",
  ".github/workflows/deploy-pages.yml"
];

const missing = requiredFiles.filter((file) => {
  if (!fs.existsSync(file)) return true;
  return fs.statSync(file).size === 0;
});

if (missing.length) {
  console.error("Eksik veya boş dosyalar:");
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("styles.css", "utf8");

for (const text of ["DevSecOps", "skillGrid", "weekOneTable", "roadmapGrid"]) {
  if (!html.includes(text)) {
    console.error(`HTML içinde beklenen içerik yok: ${text}`);
    process.exit(1);
  }
}

const legacyOrbBackground = ["radial", "gradient"].join("-");

if (css.includes("--accent-2") || css.includes(legacyOrbBackground)) {
  console.error("Eski mor/AI gradient tasarım kalıntısı bulundu.");
  process.exit(1);
}

console.log("Statik site dosyaları hazır.");
