# SystemLens Architecture

## System shape
SystemLens is a single-page canvas application centered on one graph object. The graph contains nodes, edges/relationships, groups, view metadata/positions, and optional domain structures such as CHAIN and causal/root-cause information.

## Rendering architecture
1. Project graph is loaded or generated.
2. A selected view derives/filter/repositions graph entities rather than creating a second source graph.
3. The shared canvas renders nodes, connectors, labels, selection/highlight state, zoom/pan, and playback state.
4. View-specific logic changes projection, traversal, grouping, detail level, and annotations.

## Major modules visible in the current bundle
- Project/template creation and project persistence.
- Graph validation and local repair helpers.
- Shared node/edge canvas rendering and layout helpers.
- Customer Flow / Product Flow / Workflow / Infrastructure projections.
- CHAIN mapping, step/link validation, request/response/fallback/compensation metadata, and playback.
- Explain/Trace traversal and playback.
- Root Cause investigation/evidence/failure propagation logic.
- System Thinking causal relationships and loop detection.
- Top View / Classic / Refined presentation paths.
- Live AI / JSON graph generation and recent-prompt/add workflows.

## State management
The application currently keeps client-side project and UI state inside the bundled application. Project graph mutations should update the existing project graph, while view changes derive from that graph. Temporary prompt/recent-prompt state must not become a second permanent graph.

## Graph engine principles
- Unique node IDs.
- Edge source/target references must resolve to real nodes.
- Relationship semantics should drive traversal and view behavior.
- Small deterministic validation/repair should happen locally where safe.
- Avoid duplicating entities for different views; same entity, different projection.

## AI integration abstraction
Normal map generation should exchange compact structured graph information: user instruction, relevant graph/schema, node taxonomy, necessary view rules, and generated nodes/edges/groups/metadata. Do not send the complete application source for ordinary map generation.

## Project storage and source control
- Repository: `sabziidea/Sadgu`
- Branch: `main`
- SystemLens root: `/SystemLens`
- The selected GitHub project path is established, but the exact initial application bundle has not yet been transferred intact; see `SOURCE_SYNC_STATUS.md`.
- Future completed development changes must update this GitHub source and the working preview together.

## Commit workflow
Inspect context → inspect minimum affected source → change → validate → update source chunks if the standalone bundle changed → one clean commit.
