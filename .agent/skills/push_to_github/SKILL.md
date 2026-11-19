---
name: push-to-github
description: Runs pre-push safety checks (clean git tree, unit/security tests, production build) and pushes the current branch to GitHub. Use this as the final safety gate before pushing changes.
---

# Push to GitHub

Use this skill **when you are ready to push** committed changes to GitHub. It mirrors `.github/workflows/deploy.yml` as a local safety gate to prevent breaking CI.

## Usage

1. Verifies the working tree has no uncommitted changes.
2. Runs unit & security tests (`npm test`).
3. Runs production build check (`npm run build`).
4. Pushes the current branch (`git push`).

### Command

```bash
python3 .agent/skills/push_to_github/scripts/push.py
```
