# SystemLens

SystemLens is a canvas-first system/product graph workspace. The selected long-term repository is `sabziidea/Sadgu`, branch `main`, under `/SystemLens`.

## Source-of-truth status

The repository/branch and project workflow are established, but the initial exact application-bundle transfer is **not complete yet**. See `docs/SOURCE_SYNC_STATUS.md`.

Do not treat GitHub as the complete executable source of truth until that status is marked complete after checksum verification.

## Development workflow

1. Read the concise project documents under `docs/` first.
2. Inspect only the implementation files relevant to the requested change.
3. Preserve the one-product/system-graph architecture.
4. Validate the affected behavior.
5. Commit one logical change where practical.
6. Keep GitHub source and the working preview synchronized once source sync is complete.

Do not commit credentials, API keys, access tokens, passwords, session tokens, or `.env` secrets.
