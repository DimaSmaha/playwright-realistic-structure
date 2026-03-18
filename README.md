# Playwright Realistic Structure
TypeScript Playwright automation framework organized with reusable fixtures, page objects/components, API controllers, and helpers for realistic UI/API test workflows.
## Main aspects
- **Test runner & language:** Playwright Test + TypeScript.
- **Architecture style:** layered structure:
  - **Fixtures layer** (`playwright/app/fixtures`) injects shared `pages` and `api` objects into tests.
  - **UI layer** (`playwright/app/ui`) follows page-object + component composition.
  - **API layer** (`playwright/app/api`) centralizes HTTP methods and response assertions.
  - **Helper/util layer** (`playwright/helpers`, `playwright/utils`, `playwright/constants`) provides env loading, download/PDF helpers, test data generation, and common utilities.
- **Environment-based config:** reads `.env` values (DEV/QA URLs and credentials) and sets `baseURL` in `playwright.config.ts`.
- **Reporting:** HTML report + JUnit XML output.
- **Quality tooling:** ESLint (Airbnb + TypeScript + Playwright), Prettier, lint-staged, Husky pre-commit hook.
## Project structure
```text
playwright-realistic-structure/
├── .env.sample
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── tsconfig.playwright.json
├── .github/
│   ├── copilot-instructions.md
│   ├── chatmodes/
│   └── prompts/
├── .vscode/
│   ├── mcp.json
│   └── settings.json
└── playwright/
    ├── app/
    │   ├── api/
    │   │   ├── baseController.api.ts
    │   │   └── controllers/
    │   │       ├── controllerManager.api.ts
    │   │       └── testController.api.ts
    │   ├── fixtures/
    │   │   ├── base.fixture.ts
    │   │   └── mergeFixtures.ts
    │   └── ui/
    │       ├── components/
    │       │   ├── commonComponents/
    │       │   │   ├── loader.component.ts
    │       │   │   ├── locatorBuilders.component.ts
    │       │   │   ├── pageActions.component.ts
    │       │   │   ├── paginationArrows.component.ts
    │       │   │   ├── selectOptions.component.ts
    │       │   │   └── wait.component.ts
    │       │   └── pageComponents/
    │       │       └── order/
    │       │           └── orderTable.component.ts
    │       └── pages/
    │           └── common/
    │               ├── common.page.ts
    │               ├── header.page.ts
    │               ├── login.page.ts
    │               └── pageManager.page.ts
    ├── constants/
    │   └── testData.const.ts
    ├── downloads/
    │   └── .gitignore
    ├── helpers/
    │   ├── downloads/
    │   │   ├── checkPdfDownloadValues.helper.ts
    │   │   ├── deleteDownloadsFolder.helper.ts
    │   │   ├── deleteFolder.helper.ts
    │   │   ├── getNewestDownloadsFile.helper.ts
    │   │   ├── readPDF.helper.ts
    │   │   └── waitForFileDownload.helper.ts
    │   └── getEnvVariables/
    │       └── getEnvVariables.helper.ts
    ├── junitreports/
    │   └── .gitignore
    ├── tests/
    │   └── regression-tests/
    │       ├── orderCreation.spec.ts
    │       └── seed.spec.ts
    └── utils/
        ├── dataGeneration.utils.ts
        ├── date.utils.ts
        └── toIncludeValue.utils.ts
```
## How tests are organized
- `mergeFixtures.ts` exports a custom `test` instance.
- `base.fixture.ts` wires:
  - `pages` → `PageManager` (UI pages/components)
  - `api` → `ControllerManager` (API controllers)
- Regression specs in `playwright/tests/regression-tests` consume these fixtures.
## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env` from sample:
   - Copy `.env.sample` to `.env`.
   - Fill required values:
     - `ENV` (`dev` or `qa`)
     - `HOME_PAGE_DEV`, `HOME_PAGE_QA`
     - `USER_EMAIL_DEV`, `USER_PASS_DEV`
     - `USER_EMAIL_QA`, `USER_PASS_QA`
3. Install Playwright browser binaries:
   ```bash
   npm run pw-install-chromium
   ```
## Common commands
- Run regression project:
  ```bash
  npm run pw-run-regression-suite-ci
  ```
- Open HTML report:
  ```bash
  npm run pw-open-report
  ```
- Open trace file:
  ```bash
  npm run pw-open-trace path/to/trace.zip
  ```
- Lint and auto-fix:
  ```bash
  npm run lint-all-files
  ```
## Notable implementation details
- `playwright.config.ts`:
  - default test folder: `playwright/tests`
  - regression project: `playwright/tests/regression-tests`
  - reporters: HTML + JUnit XML (`playwright/junitreports/results.xml`)
  - trace retention on failure
  - Chromium desktop profile, 1920x1080 viewport, headless enabled
- Download helpers support file download waiting and PDF content validation.
- Data helpers provide Faker-based random test data and date formatting utilities.
## Current template status
Some locators and test bodies are intentionally placeholders (empty selectors / TODO comments). The structure is production-oriented, and these placeholders are expected to be replaced with app-specific locators and flows.