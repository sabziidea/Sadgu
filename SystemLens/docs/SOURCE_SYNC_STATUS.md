# Source Sync Status

## Current status
Repository/branch selected for SystemLens: `sabziidea/Sadgu` / `main`, under `/SystemLens`.

The current working SystemLens application is a self-contained HTML bundle (`SYSTEMLENS(1).html`) with SHA-256:

`cf35daf2fcb860aa32e33975a7b07350d5ee1703f650670cdd94baa8a74d7f2c`

The GitHub connector available during initial setup accepts only UTF-8 text payloads and does not expose a native local-file upload parameter. Integrity testing showed that long payload transfer could be truncated/altered, so the application bundle was deliberately **not** committed in a potentially corrupted form.

Therefore GitHub must **not yet be treated as the complete application source of truth** until the exact bundle (or the original modular source tree) is uploaded and its checksum is verified.

## Required completion condition
Source-of-truth activation is complete only when:
1. the exact current SystemLens source exists under `/SystemLens`,
2. reconstruction/build validation succeeds,
3. the resulting current bundle SHA-256 matches the baseline above, and
4. future edits are made from that GitHub source and committed back to the same repository/branch.

Do not replace this status with “complete” unless those checks pass.
