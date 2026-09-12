# SystemLens UI Rules

## General
- Canvas-first experience; avoid unnecessary panels and UI chrome.
- Controls should be compact and preserve map space.
- Preserve both Classic and Refined modes.
- Reuse shared controls, node renderers, icon mapping, playback controls, and inspectors rather than duplicating them per view.

## Category color rules
Centralize category colors and derive view variants from the same tokens:
- Application → pink
- Service / Services → orange or peach
- Data → green
- External System / External Systems → blue

Do not scatter hard-coded category colors across view implementations.

## Icons
Maintain one central node-type → icon mapping for common types such as Application, Service, Database, API, Gateway, Queue, Customer, External System, Metric, and Problem. Infrastructure-oriented icons should remain compact, recognizable, and consistent with the established isometric/2.5D SystemLens direction where used.

## Views
- Classic: preserve the established original SystemLens visual language and interactions.
- Refined: may use a cleaner treatment but must represent the same underlying graph.
- Top View: architecture overview; do not create duplicate entities.
- Simple / Standard / Detailed, where available, should change information density without changing graph meaning.

## Explain / Trace animation
- Shared playback logic should be reused wherever the same animation engine applies.
- Speeds: 0.25x, 0.5x, 1x, 1.5x, 2x; default 1x.
- Playback speed affects connector pulse, step/highlight progression, and linked camera movement, not control responsiveness.
- Keep pause/resume and previous/next responsive.
- Respect reduced-motion settings; do not force moving pulse animation.
- Moving trace pulse is intentionally slightly larger than the original for legibility while remaining compact.

## Interaction consistency
Selection, active paths, graph edits, recent-prompt focus, and Add/commit behavior should reuse existing graph/canvas primitives. Do not introduce a second rendering system for AI-generated content.
