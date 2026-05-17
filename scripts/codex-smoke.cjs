#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const requiredFiles = [
  "AGENTS.md",
  ".ai/MEMORY.md",
  ".ai/PLAN.md",
  ".ai/RULES.md",
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
  "scripts/codex-smoke.cjs",
  "scripts/codex-report.cjs"
];

const requiredScripts = ["dev", "build", "harness:smoke", "harness:report", "test"];

const failures = [];

for (const file of requiredFiles) {
  const absolute = path.join(root, file);
  if (!fs.existsSync(absolute)) {
    failures.push(`missing required file: ${file}`);
  }
}

const packageJsonPath = path.join(root, "package.json");
if (fs.existsSync(packageJsonPath)) {
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    for (const script of requiredScripts) {
      if (!packageJson.scripts || !packageJson.scripts[script]) {
        failures.push(`missing package script: ${script}`);
      }
    }
  } catch (error) {
    failures.push(`package.json is not valid JSON: ${error.message}`);
  }
}

const decksPath = path.join(root, "src/data/decks.ts");
if (fs.existsSync(decksPath)) {
  const decksSource = fs.readFileSync(decksPath, "utf8");
  for (const token of [
    "meaningKo",
    "exampleJa",
    "exampleKo",
    "VocabularyDeck",
    "VocabularyWord"
  ]) {
    if (!decksSource.includes(token)) {
      failures.push(`src/data/decks.ts does not include ${token}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Codex harness smoke check failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Codex harness smoke check passed.");
