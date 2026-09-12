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
- Generated updated consolidated standalone artifact `SYSTEMLENS_STANDALONE.html`. SHA-256: `72accbbc3becd55a34be249ee9dd5082823edae4644b88e47c5a869b862e2a7b`.
- Generated updated compressed preview artifact `SYSTEMLENS.html`. SHA-256: `58de9f569e9405007ba5d647aaeaf7516e3233d9891f6a29a5da544633e242fa`.
- Full `SYSTEMLENS.html` repository transfer remains blocked by the connected GitHub writer payload ceiling; the validated downloadable release artifact must not be replaced in GitHub with a truncated payload.
