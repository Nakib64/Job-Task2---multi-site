const fs = require("fs-extra");
const path = require("path");
const { parse } = require("csv-parse/sync");
const { execSync } = require("child_process");

// 1️⃣ Read CSV file
const csvFile = path.join(__dirname, "websites.csv");
const data = fs.readFileSync(csvFile, "utf-8");
const rows = parse(data, { columns: true, trim: true });

console.log(`\nFound ${rows.length} sites in CSV.`);

// 2️⃣ Ensure build folder exists
const buildDir = path.join(__dirname, "build");
fs.ensureDirSync(buildDir);

// 3️⃣ Loop through each site and generate app
rows.forEach((site) => {
  const siteDir = path.join(buildDir, site.domain);
  console.log(`\n=== Generating site: ${site.domain} ===`);

// Instead of fs.copySync("template", siteDir);
fs.copySync(
  path.join(__dirname, "template"),
  siteDir,
  {
    filter: (src) => !src.includes("node_modules")
  }
);

  // Write site.json (used by page.js to load CSV data)
  fs.writeJsonSync(path.join(siteDir, "site.json"), site, { spaces: 2 });

  // Install dependencies
  console.log("Installing dependencies...");
  execSync("npm install", { cwd: siteDir, stdio: "inherit" });

  // Build Next.js app
  console.log("Building Next.js site...");
  execSync("npm run build", { cwd: siteDir, stdio: "inherit" });

  console.log(`✅ Site built: ${site.domain}`);
});

console.log("\n🎉 All sites generated inside /build");
