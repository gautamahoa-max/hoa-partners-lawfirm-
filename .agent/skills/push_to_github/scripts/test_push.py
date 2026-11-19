import subprocess
import unittest
from unittest.mock import MagicMock, patch

import push


class PushGateTest(unittest.TestCase):
    def test_aborts_on_dirty_working_tree(self):
        dirty = MagicMock(stdout=" M src/App.jsx\n")
        with patch("push.subprocess.run", return_value=dirty) as mock_run:
            with self.assertRaises(SystemExit) as ctx:
                push.main()
            self.assertEqual(ctx.exception.code, 1)
            self.assertEqual(mock_run.call_count, 1)

    def test_aborts_before_build_and_push_when_tests_fail(self):
        clean = MagicMock(stdout="")
        calls = []

        def fake_run(cmd, **kwargs):
            calls.append((cmd, kwargs.get("cwd")))
            if cmd == ["git", "status", "--porcelain"]:
                return clean
            if cmd == ["npm", "test"]:
                raise subprocess.CalledProcessError(1, cmd)
            return MagicMock()

        with patch("push.subprocess.run", side_effect=fake_run):
            with self.assertRaises(SystemExit) as ctx:
                push.main()
            self.assertEqual(ctx.exception.code, 1)

        self.assertEqual([c[0] for c in calls], [["git", "status", "--porcelain"], ["npm", "test"]])

    def test_runs_all_gates_then_pushes_in_repo_root(self):
        clean = MagicMock(stdout="")
        calls = []

        def fake_run(cmd, **kwargs):
            calls.append((cmd, kwargs.get("cwd")))
            return clean if cmd == ["git", "status", "--porcelain"] else MagicMock()

        with patch("push.subprocess.run", side_effect=fake_run):
            push.main()

        self.assertEqual(
            [c[0] for c in calls],
            [
                ["git", "status", "--porcelain"],
                ["npm", "test"],
                ["npm", "run", "build"],
                ["git", "push"],
            ],
        )
        self.assertTrue(all(cwd == push.REPO_ROOT for _, cwd in calls))


if __name__ == "__main__":
    unittest.main()
