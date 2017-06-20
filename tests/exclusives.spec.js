var common_po = require("../pages/common.po.js");
var shop_po = require("../pages/shop.po.js");
var exclusives_po = require("../pages/exclusives.po.js");
var locator_sh_po = shop_po.locators;
var locator = exclusives_po.locators;

describe("Test", function() {
  common_po.shop_go();

  it("Select Exclusives in menu", function() {
    locator_sh_po.exclusives_btn.click();
    browser.driver.sleep(2000);
    expect(locator_sh_po.exclusives_modal.isDisplayed()).toBe(true);
  });

  it("Go to Exclusive Home Page", function() {
    locator.excl_home_btn.click();
    browser.driver.sleep(2000);
    expect(locator.excl_tittle.isDisplayed()).toBe(true);
  });

});
