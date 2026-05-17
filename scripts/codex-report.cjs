#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const files = [
  "AGENTS.md",
  ".ai/MEMORY.md",
  ".ai/PLAN.md",
  ".ai/RULES.md",
  "docs/PRODUCT_PLAN.md",
  "index.html",
  "package.json",
  "src/App.tsx",
  "src/main.tsx",
  "src/data/decks.ts",
  "src/domain/studyState.ts",
  "src/domain/deckStats.ts",
  "src/components/DeckDetail.tsx",
  "src/components/DeckList.tsx",
  "src/components/StudySession.tsx",
  "src/components/WordCard.tsx",
  "src/components/SessionComplete.tsx",
  "src/styles/app.css",
  "src/test/decks.test.ts",
  "src/test/studyState.test.ts",
  "scripts/codex-smoke.cjs",
  "scripts/codex-report.cjs"
];

const packageJson = JSON.parse(
  fs.readFileSync(path.join(root, "package.json"), "utf8")
);

console.log("Codex Harness Report");
console.log("====================");
console.log(`Project: ${packageJson.name}`);
console.log(`Version: ${packageJson.version}`);
console.log("");
console.log("Files:");

for (const file of files) {
  const absolute = path.join(root, file);
  const status = fs.existsSync(absolute) ? "ok" : "missing";
  console.log(`- ${status}: ${file}`);
}

console.log("");
console.log("Scripts:");
for (const [name, command] of Object.entries(packageJson.scripts || {})) {
  console.log(`- ${name}: ${command}`);
}
