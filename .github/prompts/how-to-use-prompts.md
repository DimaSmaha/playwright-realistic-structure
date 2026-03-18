# Playwright Test Generation Prompt Usage (Ecommerce)

## How to Use the Prompt

To correctly generate automation tests:

- Add the prompt file into the chat using:
  ```
  /prompt_name
  ```

- Include project context:
  ```
  #tests #app #constants
  ```

- Provide the Trello task ID or link:
  ```
  TRELLO-XXX
  ```

- (Optional) If new UI elements are involved, include HTML snippet of the component.

---

## Examples

### Generate automation test

```
/pw-agent-test-generation
#tests #app #constants

Create an automation test based on the task TRELLO-XXX
```

---

### Healing / fixing tests

```
/healer

Please fix this test #testName
```

---

## Additional Requests to the Agent

If the generated test is incorrect, continue interacting with the agent.

### Regenerate test

```
Generate an automation test based on the previous context.

Follow existing test structure.
Reuse existing locators where possible.
```

---

### Fix test via execution

```
Please run this test via Playwright and fix the issues.

Do not modify files directly.
Output suggested changes in the chat.
```

---

## Notes / Best Practices

- Be specific in the test case description
- Clearly describe expected behavior
- Use correct naming for UI elements
- The agent does NOT know your UI fully:
  - It may generate incorrect steps order
  - It may generate unnecessary locators
- Always review generated tests before using them

---

## Pro Tips (worth it)

- If test is flaky → ask agent to add network assertions
- If test is slow → ask to move setup to API
- If test is complex → split into smaller flows
- If locators are messy → ask to refactor into POM

