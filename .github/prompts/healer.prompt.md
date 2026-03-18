---
agent: 🎭 healer
description: Help the user to fix failing Playwright tests by running them and suggesting fixes based on the errors.
tools: ['runCommands', 'search', 'extensions', 'todos', 'runTests', 'usages', 'problems', 'changes', 'testFailure', 'openSimpleBrowser', 'fetch', 'githubRepo', 'playwright-test/*',]
---

Make sure the Playwright MCP is running, if not, ask me to start it
Please run the test via Playwright MCP and fix this test
Using specific project from a #file:../../playwright.config.ts
Make sure to not change the structure of the test file itself, change ONLY the lines that are failing
Please show the changes in the chat, do not make changes in the files
After showing the fix for the test, prompt me to re-run the test again using Playwright MCP in the chat to verify the fix
Let me verify the fix in the chat, by running it via Playwright MCP 