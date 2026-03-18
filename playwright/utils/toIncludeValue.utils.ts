/**
 * This function is used to convert a string value to a RegExp for inclusion checks for value of the HTML element.
 * Works similar to toContainText but for element value attribute.
 * Used with the .toHaveValue Playwright assertion.
 * await expect(pages.orderPage.orderName()).toHaveValue(toIncludeValue(orderNameStart));
 *
 * @param value - The string value to be converted to RegExp.
 * @returns A RegExp that matches the provided string value to make assertions.
 */
export const toIncludeValue = (value: string) => {
  if (value[0] === "+") {
    // eslint-disable-next-line no-param-reassign
    value = `\\${value}`;
  }

  return new RegExp(`${value}`);
};
