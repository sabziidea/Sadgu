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
- Generated consolidated local release artifact `SYSTEMLENS.html` containing all current changes. SHA-256: `237f53e7bbb34b9f0bc9ff484ae8e56988c1fa5bd213e45e034d56d3a084375e`.
- Full `SYSTEMLENS.html` repository transfer remains blocked by the connected GitHub writer payload ceiling; the artifact is available as the validated downloadable release file and must not be replaced in GitHub with a truncated payload.
