var common = require('../pages/common.po.js');
var shop_page = require('../pages/shop.po.js');
var sets_page = require('../pages/sets.po.js');
var locator_sh = shop_page.locators;
var locator_common = common.locators;
var locator = sets_page.locators;


describe("Add SETS Interests product to bag", function() {
  common.shop_go();

  it("Open SETS content", function() {
    locator_sh.sets_btn.click();
    browser.driver.sleep(3000);
    expect(locator_sh.sets_modal.isDisplayed()).toBe(true);
  });

  it("Click on Sets HOME btn", function() {
    locator.sets_home_btn.click();
    browser.driver.sleep(3000);
    expect(locator.sets_title.isDisplayed()).toBe(true);
  });

  it("Open Interests page", function() {
    locator.all_interests_btn.click();
    browser.driver.sleep(3000);
    expect(locator.interests_nav_trail.isDisplayed()).toBe(true);
    expect(locator.interests_title.isDisplayed()).toBe(true);
    //check if view button is inactive
    expect(locator.view_selected_inactive.isDisplayed()).toBe(true);
  });

  it("Select any Game", function() {
    locator.any_checkbox.click();
    browser.driver.sleep(2000);
    //vie selected button is active
    expect(locator.view_selected_active.isDisplayed()).toBe(true);

  });

  it("View Selected Interests", function() {
    //Pass protractor element to javascript code and click on it
    //We can use arguments[0].click() to simulate click operation.
    browser.executeScript("arguments[0].click()", locator.view_selected);
    browser.driver.sleep(3000);
    expect(locator.list_of_products.isDisplayed()).toBe(true);
  })

  it("Add any game to Bag", function() {
    locator_common.add_to_bag_btn.click();
    browser.driver.sleep(2000);
    expect(locator_common.added_notif.isDisplayed()).toBe(true);
  });

});


describe("Add SETS Themes product to cart", function() {
  common.shop_go();
  it("Open SETS home page", function() {
    sets_page.sets_home_page();
  });

  it("Open Themes page", function() {
    locator.themes_btn.click();
    browser.driver.sleep(2000);
    expect(locator.themes_title.isDisplayed()).toBe(true);
    expect(locator.view_selected_inactive.isDisplayed()).toBe(true);
  });

  it("Select any SETS Themes product", function() {
    locator.any_checkbox.click();
    browser.driver.sleep(2000);
    expect(locator.view_selected_active.isDisplayed()).toBe(true);
  });

  it("View selected Themes", function() {
    locator.view_selected.click();
    browser.driver.sleep(3000);
    expect(locator.list_of_products.isDisplayed()).toBe(true);
  });

  it("Add to BAG Themes product", function() {
    locator_common.add_to_bag_btn.click();
    browser.driver.sleep(1000);
    expect(locator_common.added_notif.isDisplayed()).toBe(true);
  });
});
