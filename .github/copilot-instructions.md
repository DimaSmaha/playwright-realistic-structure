<!-- v2.1 -->

# Copilot Instructions for Automated Testing Codebase (Ecommerce)

## Project Overview

- This repo contains **Playwright tests**. Focus on generating new Playwright tests only.

- Major directories:
  - `playwright/`: Test framework with helpers, constants, and specs.
  - `playwright/app/`: Page objects, components, and utilities.
  - `playwright/tests/`: E2E, integration, regression tests.
  - `playwright/constants/`: Stable test data (users, products, etc.).

---

## Key Patterns & Conventions

### Test Structure

- Use global imports in tests:

  ```ts
  import { userEmail } from "playwright/constants/commonData.const";
  ```

- Use Playwright structure:
  - `test.describe`
  - `test.beforeEach`

- Use predefined user roles:
  - `CUSTOMER`
  - `ADMIN`

- Use shared fixture:

  ```ts
  import { test, expect } from "playwright/app/fixtures/mergeFixtures";
  ```

- Example flow for test setup:

  ```ts
  await createUserViaAPI(page);
  await loginAsUser(page, CUSTOMER);
  await pages.homePage.visit();
  ```

- Follow Page Object Model (POM) strictly:
  - Reuse locators and methods
  - Do NOT duplicate selectors

---

### Typical Ecommerce Flows

- User setup

  ```ts
  await createUserViaAPI(page);
  ```

- Login

  ```ts
  await loginAsUser(page, CUSTOMER);
  ```

- Product interaction

  ```ts
  await pages.productsPage.openProduct(productName);
  await pages.productDetailsPage.addToCart();
  ```

- Cart & checkout
  ```ts
  await pages.cartPage.open();
  await pages.cartPage.proceedToCheckout();
  await pages.checkoutPage.placeOrder();
  ```

---

### Dynamic Data

- Use faker-like generator:

  ```ts
  const userData = getFakerData();
  ```

- Rules:
  - Static assertion data → top of describe
  - Dynamic data → inside test

---

### Success / Alert Handling

```ts
await pages.commonPage.successMessageAlertIsDisplayed();
await pages.commonPage.successMessageAlertIsNotDisplayed();
```

---

### Assertions Strategy

- Validate business outcome, not just UI

```ts
await expect(pages.cartPage.getCartItemCount()).toBe(1);
```

---

## Developer Workflows

- Install:

  ```bash
  npm install
  ```

- Run tests:

  ```bash
  npx playwright test --headed
  ```

- Switch environment:
  ```bash
  ENV=dev | qa
  ```

---

## Integration Points

- API Helpers → `helpers/api/`
- Navigation Helpers → `helpers/navigation/`

---

## Examples

- Tests:

  ```
  playwright/tests/e2e-tests/add-to-cart.spec.ts
  ```

- Page objects:

  ```
  playwright/app/ui/pages/product/productPage.page.ts
  ```

- Constants:
  ```
  playwright/constants/commonData.const.ts
  ```

---

## Special Notes

- Do not duplicate locators or methods
- Avoid loops for small steps
- Keep stable data at top of describe
- Use existing fixtures
- Output changes in chat only
- No excessive comments

---

## Advanced Improvements

### Business-level helpers

```ts
await flows.addProductToCart(productName);
```

### Test data builders

```ts
const user = userBuilder().withPremiumAccount().build();
```

### Network assertions

```ts
await page.waitForResponse((resp) => resp.url().includes("/orders") && resp.status() === 200);
```

### Parallel-safe design

```ts
const user = await createUserViaAPI();
```
