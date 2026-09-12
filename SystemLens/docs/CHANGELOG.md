# SystemLens Changelog

## 2026-09-12
- Selected `sabziidea/Sadgu` `main` `/SystemLens` as the SystemLens repository path.
- Added concise project context, architecture, UI rules, graph model, and source-sync status documentation for lower-context future development.
- Recorded the exact current standalone bundle SHA-256 baseline for integrity verification.
- Added Customer Focus workflow: selecting a Customer and clicking Focus now opens a customer-intent panel, resolves one validated Customer Flow object, reuses existing graph nodes first, creates only required missing journey components, and uses the same ordered node/edge path for Focus, Trace, and Explain.
- Added validated journey handling for web check-in/seat, meal during check-in, refund investigation, premium upgrade, and cancellation/refund scenarios, including orchestrator return paths for parallel refund evidence retrievals.
- Source-of-truth activation remains pending until the exact current application source is transferred and checksum-verified; the connected GitHub writer still cannot safely transfer the full bundled HTML artifact.
