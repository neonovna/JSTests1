var common_po = require("../pages/common.po.js");
var wish_list_po = require("../pages/wish_list.po.js");
var shop_po = require("../pages/shop.po.js");
var sh_locator = shop_po.locators;
var locator = wish_list_po.locators;


describe("Check empty Wish list", function() {
  common_po.shop_go();

  it("Go to Wish list page", function() {
    sh_locator.wish_list_btn.click();
    browser.driver.sleep(3000);
    expect(locator.wish_list_title.isDisplayed()).toBe(true);
  });

});
