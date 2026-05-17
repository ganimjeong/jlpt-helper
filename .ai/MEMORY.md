# Memory

Long-lived project facts that should stay stable across Codex sessions.

## Project

- Repository: `ganimjeong/jlpt-helper`
- Local path: `/Users/ajin/jlpt-helper`
- Purpose: mobile-first JLPT vocabulary study web app
- Current state: Vite React TypeScript app with a sample vocabulary deck and
  local-first study flow
- Product direction: user-provided Japanese words are added to code-backed
  vocabulary decks, and browser-local study state tracks which words are still
  checked as not memorized
- Deck organization: use the user's provided word batches as the primary deck
  boundary, not JLPT levels
- Study rule: unchecked/memorized words do not appear in slides unless the user
  re-checks them or uses "study from the beginning" to reset the whole deck
- Deck detail rule: the deck detail screen shows every word and allows manually
  switching each word between not memorized and memorized
- Card reveal rule: Korean word meaning and Korean example translation appear
  together in the final reveal step
- List summary rule: deck detail and completion summary omit example sentences
  and example translations; they show only word form, reading, meaning, and
  status
- Sync preference: single-user cross-device study-state sync is desirable after
  the local-first version works
- Sync decision: use a GitHub-backed state file for cross-device study-state
  sync; never commit GitHub tokens or authentication secrets
- Deployment: GitHub Pages deploys the Vite app from `main` using
  `.github/workflows/deploy-pages.yml`; the Pages base path is `/jlpt-helper/`
  when building with `--mode github-pages`
- Design rule: read and follow `DESIGN.md` for UI, visual design, motion,
  interaction, layout, and frontend polish work
- Current visual direction: clean border-light mobile app surfaces, no paper
  texture, hierarchy through spacing/contrast/shadow/state color, and purposeful
  study-card motion

## Constraints

- Keep harness files lightweight and easy to update.
- Prefer project-local scripts and commands for verification.
- Current app stack is Vite, React, TypeScript, and Vitest.
- Record durable decisions here only when they are unlikely to change often.

## Verification

- `npm run harness:smoke` checks that the harness files, app source files,
  package scripts, and vocabulary data tokens are present.
- `npm run harness:report` prints a concise project and harness status report.
- `npm test` runs Vitest for vocabulary data and study-state behavior.
