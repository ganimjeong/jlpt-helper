# Codex Harness

This repository uses a small Codex harness to keep project context, work rules,
and verification steps explicit.

## Work Target

- Primary project: `jlpt-helper`
- Main source directory: `src/`
- AI context directory: `.ai/`
- Verification scripts: `scripts/`

## Read Order

Before making project changes, read these files in order:

1. `AGENTS.md`
2. `.ai/MEMORY.md`
3. `.ai/RULES.md`
4. `.ai/PLAN.md`
5. `DESIGN.md` when the task touches UI, visual design, motion, interaction,
   layout, or frontend polish

## Work Loop

Use this loop for normal changes:

1. Read the harness documents.
2. Inspect the relevant source files.
3. Read `DESIGN.md` before UI, visual design, motion, interaction, layout, or
   frontend polish work.
4. Make the smallest scoped change that satisfies the task.
5. Run `npm run harness:smoke`.
6. Run `npm run harness:report` when output or edge behavior matters.
7. Run `npm test` when a real test suite exists or the change has broad risk.
8. Update `.ai/PLAN.md` if the current implementation direction changes.

## Current State

The repository contains a Vite React TypeScript app with code-backed vocabulary
decks, localStorage-backed study state, a mobile-first study flow, Vitest tests,
and harness smoke/report scripts.
