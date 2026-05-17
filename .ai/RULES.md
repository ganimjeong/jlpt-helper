# Rules

Project rules for Codex and human contributors.

## Scope

- Keep AI working context in `.ai/`.
- Keep executable harness scripts in `scripts/`.
- Do not introduce application architecture before the project requirements are
  clear.
- Keep changes scoped to the user request and the files needed to verify it.

## Documentation

- Update `.ai/PLAN.md` when the active implementation direction or next steps
  change.
- Update `.ai/MEMORY.md` only for durable facts, constraints, or decisions.
- Add human-facing design documentation under `docs/` when the project structure
  becomes complex enough to need it.
- Read `DESIGN.md` before any UI, visual design, motion, interaction, layout, or
  frontend polish change.
- When applying `DESIGN.md`, keep changes grounded in the existing app and avoid
  adding unrelated design artifacts unless the user explicitly asks for a
  separate prototype.

## Design Direction

- Prefer a clean mobile app surface over paper texture or decorative theme work.
- Avoid relying on visible borders for hierarchy; use spacing, contrast,
  restrained shadows, state color, and motion.
- Use short, purposeful motion for study cards, reveal steps, swipe exits,
  buttons, toggles, progress, and list entry states.
- Keep the study flow dense enough for repeated mobile use, with controls in
  thumb-friendly positions and no explanatory marketing sections.

## Verification Order

1. Run `npm run harness:smoke` for every change.
2. Run `npm run harness:report` when checking harness state or edge-case output.
3. Run `npm test` for broader behavior changes once a real test suite exists.
4. Run `npm run build` after frontend UI or TypeScript changes.

## Compatibility

- Preserve existing public behavior once application code exists.
- Avoid unnecessary dependency additions.
- Prefer simple Node scripts for harness checks unless the project later adopts a
  different standard toolchain.
