#!/usr/bin/env python3
"""Pre-push safety gate for hoa-partners-lawfirm (adapted from google/ground-android)."""

from pathlib import Path
import subprocess
import sys

REPO_ROOT = Path(__file__).resolve().parents[4]


def run_command(command):
    print(f"Running: {' '.join(command)}")
    try:
        subprocess.run(command, cwd=REPO_ROOT, check=True)
    except (subprocess.CalledProcessError, FileNotFoundError) as exc:
        print(f"❌ Command failed: {' '.join(command)} ({exc})")
        sys.exit(1)


def ensure_clean_tree():
    try:
        result = subprocess.run(
            ["git", "status", "--porcelain"],
            cwd=REPO_ROOT,
            capture_output=True,
            text=True,
            check=True,
        )
    except (subprocess.CalledProcessError, FileNotFoundError) as exc:
        print(f"❌ Unable to check git status: {exc}")
        sys.exit(1)
    if result.stdout.strip():
        print("❌ Working tree has uncommitted changes. Commit or stash before pushing.")
        sys.exit(1)


def main():
    print("🚧 Starting Pre-Push Checks...")

    ensure_clean_tree()

    # 1. Verify (Unit & Security Tests)
    print("\n1️⃣  Running Unit & Security Tests...")
    run_command(["npm", "test"])

    # 2. Check Build (Production Bundle)
    print("\n2️⃣  Running Production Build Check...")
    run_command(["npm", "run", "build"])

    # 3. Push
    print("\n3️⃣  Pushing to GitHub...")
    run_command(["git", "push"])

    print("\n✅ Successfully pushed to GitHub!")


if __name__ == "__main__":
    main()
