# SystemLens Context

## Purpose
SystemLens visualizes one product/system graph through multiple perspectives so customer, product, workflow, technical, causal, and diagnostic views stay connected to the same underlying model.

## Core product rule
**ONE PRODUCT/SYSTEM GRAPH** drives System Map, Customer Flow, Product Flow, Workflow, Infrastructure, CHAIN, Top View, System Thinking, Root Cause, and Documentation. Views must not become separate disconnected data models.

## Major capabilities
- Canvas-based node/edge system mapping with project templates and saved project state.
- Customer Flow, Product Flow, Workflow, Infrastructure, System Map, CHAIN, System Thinking, Root Cause, Documentation, and Top View related experiences.
- Classic and Refined visual modes.
- Generate / Ask workflows including Live AI-style prompt generation, JSON-based generation/import, recent-prompt focus, and explicit Add/commit behavior.
- Trace/Explain playback with pause/resume, previous/next, reduced-motion support, and speeds 0.25x, 0.5x, 1x, 1.5x, 2x (1x default).
- Shared graph relationships feed traversal, explanation, chain, root-cause, and causal views where applicable.

## Current technical form
- Current source is a self-contained bundled HTML application with embedded CSS and JavaScript.
- The bundle contains React/React DOM runtime code and SystemLens application logic, but a separate original modular React/TypeScript source tree is not available in the current workspace.
- Selected GitHub location: `sabziidea/Sadgu`, branch `main`, directory `SystemLens/`.
- Initial exact bundle transfer to GitHub is pending because the available connector has no native local-file upload path; see `SOURCE_SYNC_STATUS.md`.

## Development rules
- Inspect these docs first, then only the minimum relevant implementation area.
- Make focused changes; preserve working graph/state architecture.
- Validate before committing.
- Keep preview/work files synchronized with GitHub after completed changes.
- One logical user request should normally become one clean commit.
- Never store secrets in the repository.

## Known limitations
- The present source artifact is a production-style standalone bundle rather than the original modular source tree. Preserve exact behavior first; do not pretend missing source modules exist.
- Live AI behavior in a standalone browser can depend on available browser/runtime capabilities; deterministic graph generation/validation should remain the safe fallback.
