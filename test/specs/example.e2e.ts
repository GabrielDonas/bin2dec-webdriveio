import DecPage from "../../dec.page";

describe("My Binary Converter", () => {
  it("should convert binary to decimal", async () => {
    await DecPage.open();

    // await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await DecPage.convert(11);
    await expect(DecPage.textDecimal).toHaveTextContaining("3");
  });
});
