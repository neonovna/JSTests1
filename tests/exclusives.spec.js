var common_po = require("../pages/common.po.js");
var shop_po = require("../pages/shop.po.js");
var exclusives_po = require("../pages/exclusives.po.js");
var locator_sh_po = shop_po.locators;
var locator_comm_po = common_po.locators;
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
    browser.driver.sleep(3000);
    expect(locator.excl_title.isDisplayed()).toBe(true);
  });

  it("Go to new New block", function() {
    locator.new_block.click();
    browser.driver.sleep(3000);
    expect(locator.new_breadcrumbs.isDisplayed()).toBe(true);
  });

  it("Add NEW product to bag", function() {
    locator_comm_po.add_to_bag_btn.click();
    browser.driver.sleep(3000);
    expect(locator_comm_po.added_notif.isDisplayed()).toBe(true);
  });

});
