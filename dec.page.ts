import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DecPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputBinary() {
    return $('[name="binary"]');
  }
  get textDecimal() {
    return $('[data-testid="decimal"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async convert(decimal: number) {
    await this.inputBinary.setValue(decimal);
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
}

export default new DecPage();
