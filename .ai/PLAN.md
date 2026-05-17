# Plan

Current implementation direction and next work points.

## Current Goal

Plan and then build a mobile-first JLPT vocabulary study web app. The app will
store vocabulary decks as code data. A word remains in study sessions only while
it is checked as not memorized; unchecked words stay out of slides until the user
re-checks them or resets the deck from the beginning. Cross-device study-state
sync will use a GitHub-backed state file after the local-first version works.

## Implemented Harness

- Root entry document: `AGENTS.md`
- AI context documents:
  - `.ai/MEMORY.md`
  - `.ai/PLAN.md`
  - `.ai/RULES.md`
- Verification scripts:
  - `scripts/codex-smoke.cjs`
  - `scripts/codex-report.cjs`

## Product Direction

- Human-facing product plan: `docs/PRODUCT_PLAN.md`
- Design guidance: read `DESIGN.md` before UI, motion, interaction, layout, or
  frontend polish changes
- App shape: static mobile-first web app
- Deployment: GitHub Pages via `.github/workflows/deploy-pages.yml` from `main`
- Initial stack recommendation: Vite, React, TypeScript, Vitest
- Core workflow:
  1. Add user-provided Japanese words to code-backed vocabulary decks.
     Decks are organized by the user's provided batches.
  2. Show decks on a mobile-first deck list screen.
  3. Allow opening a deck detail screen to view every word and manually switch
     each word between memorized and not memorized.
  4. Study one word per card with progressive reveal: kanji, kana, short example,
     then Korean meaning plus Korean example translation.
  5. Mark each word as memorized or not memorized with buttons and mobile swipe.
  6. After a full pass, restart with checked words only, reset the deck from the
     beginning, or return to the deck list.

## Next Steps

1. Add real user-provided vocabulary batches to `src/data/decks.ts`.
2. Add richer data validation for duplicate words and example length guidance.
3. Continue UI polish under `DESIGN.md`: clean border-light surfaces,
   purposeful card/reveal/swipe motion, and mobile-first repeated-use density.
4. Add `docs/ARCHITECTURE.md` once the app structure needs a human-facing
   architecture note.
5. Later, add single-user cross-device study-state sync using a GitHub-backed
   `.sync/study-state.json` file.

## Open Questions

- Should GitHub sync settings live inside the initial screen or a separate
  settings screen?
- Is storing a user-provided GitHub fine-grained token in browser local storage
  acceptable for the first sync version?
