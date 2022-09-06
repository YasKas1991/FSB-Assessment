describe("Udemy course that is the highest rated", function () {
  it("Should verify google url", async function () {
    await browser.url("https://www.google.com/");
    await expect(browser).toHaveUrl("https://www.google.com/");
  });
  it("bypasses cookie's", async function () {
    const cookie = $("div=Reject all");
    await cookie.click();
  });

  it("should search for the typed term 'Test Automation Learning'", async function () {
    const typeTerm = $("input");
    await typeTerm.click();
    await typeTerm.addValue("Test Automation Learning");
    await browser.keys("Enter");
    await expect(typeTerm).toHaveValue("Test Automation Learning");
    // await browser.pause(1000);
  });

  it("verify clicking Udemy course ", async function () {
    const webAddress = await $("*=Udemy");
    await webAddress.click();
    await expect(webAddress).toHaveUrlContaining("udemy");
    // await browser.pause(1000);
  });

  it("search for BDD with Cucumber in the Udemy site", async function () {
    const search = await $('input[name="q"]');
    await search.click();
    await search.addValue("BDD with Cucumber");
    await browser.keys("Enter");
    await expect(browser).toHaveUrlContaining("Cucumber");
  });

  it("selects the highest rated option in the drop down menu", async function () {
    const dropDownMenu = await $("select");
    await dropDownMenu.selectByVisibleText("Highest Rated");
    await expect(browser).toHaveUrlContaining("highest");
  });
});

// Could potentially bypass Captcha but maybe illegal.
