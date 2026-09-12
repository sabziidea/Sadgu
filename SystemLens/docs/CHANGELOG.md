# SystemLens Changelog

## 2026-09-12
- Selected `sabziidea/Sadgu` `main` `/SystemLens` as the SystemLens repository path.
- Added concise project context, architecture, UI rules, graph model, and source-sync status documentation for lower-context future development.
- Recorded the exact current standalone bundle SHA-256 baseline for integrity verification.
- Added Customer Focus workflow: selecting a Customer and clicking Focus now opens a customer-intent panel, resolves one validated Customer Flow object, reuses existing graph nodes first, creates only required missing journey components, and uses the same ordered node/edge path for Focus, Trace, and Explain.
- Added validated journey handling for web check-in/seat, meal during check-in, refund investigation, premium upgrade, and cancellation/refund scenarios, including orchestrator return paths for parallel refund evidence retrievals.
- Added Product Focus workflow: selecting a Product (or Product-layer feature representing a product capability) and clicking Focus now asks for the product definition, customer Job to Be Done, and optional expected outcome; SystemLens resolves one validated Product Flow object, preserves the selected Product node, reuses existing architecture first, creates only required missing capabilities/services/data/outcomes, and drives Focus, Trace, and Explain from the same ordered node/edge path.
- Product Focus now distinguishes product value from implementation (`Customer → Product → Capability → Services/Data → Customer Outcome`), supports meal recommendation, refund investigation, premium upgrade, digital check-in, and cancellation patterns, and rejects generic product flows when no connected matching customer outcome is reachable instead of fabricating a route.
- Created `master` from the latest SystemLens state for consolidated release tracking.
- Moved Customer Focus, Product Focus, Trace and Explain into one shared right-side context panel that participates in the `work-area` flex layout instead of floating above the graph. The map now resizes horizontally while retaining full vertical workspace.
- Added shared Trace context information in the right rail: trace title, request/JTBD context, step count, previous/current/next component, explanation, playback controls and speed controls.
- Added a collapsible context rail. Collapsing or reopening the rail preserves Focus/Trace/Explain state and playback progress; the legacy in-map Focus/Playback copies remain hidden to avoid overlays.
- Validated the desktop layout at 1440×900: map width 1022px and context panel width 360px, with no Focus/Trace panel overlap. Customer Focus and a 20-step check-in Trace both rendered successfully with zero browser runtime errors.
- Completed an inspection-first gap analysis of Customer Focus, Product Focus, flow generation, node/edge reuse, Trace/Explain state, right-panel behaviour and map layout.
- Fixed a P0 flow-resolution defect where topology-only path reuse could inject unrelated intermediate components into a valid customer/product journey. Existing multi-hop paths are now reused only when intermediate nodes are relevant to the active intent; otherwise the resolver creates/uses the intended direct graph relationship.
- Strengthened node reuse with type/layer compatibility so technical steps no longer resolve to semantically different Product/Outcome nodes merely because names share keywords.
- Customer Focus now links through a relevant existing Product node when that Product matches the customer goal, and unsupported generic customer intents fail safely instead of following the longest unrelated downstream route.
- Product Focus no longer returns to the selected Product node as if it were an orchestration service. The Product remains a semantic value node followed by capability, implementation, output and outcome steps.
- Added persistent graph-level Customer/Product flow contexts plus persisted customer intent and Product definition/JTBD/outcome metadata for reopening and project switching.
- Expanded Customer/Product Flow layout relationship coverage to include CALLS, READS_FROM, WRITES_TO, RETURNS and event/data relationships.
- Added a transient ordered focus-layout corridor for active Customer/Product flows. Focused nodes are arranged compactly in sequence while unrelated architecture remains available below; saved map positions are not overwritten.
- Live validation: `add a meal during web check-in` now resolves through Passenger / Journey Context, Meal Recommendation Service, Meal Inventory, Recommendation UI, meal selection, cart/payment and Meal Successfully Added without injecting Seat Selection/check-in nodes. Check-in Customer Focus also routes through the relevant Boarding Pass Generation Product node.
- Generated updated standalone artifact `SYSTEMLENS_STANDALONE.html`. SHA-256: `99a6209c9ee3e4ca0ed26d2ac72831ecc9de9908176be6dba106b5ec750bdcdb`.
- Generated updated compressed preview artifact `SYSTEMLENS.html`. SHA-256: `0af1eb98380fdeffe8f234e10eec78f7045cd10b77efb337db76aaa2ac8f6b5c`.
- Full `SYSTEMLENS.html` repository transfer remains blocked by the connected GitHub writer payload ceiling; the validated downloadable release artifact must not be replaced in GitHub with a truncated payload.
