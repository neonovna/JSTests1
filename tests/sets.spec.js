var common = require('../pages/common.po.js');
var shop_page = require('../pages/shop.po.js');
var sets_page = require('../pages/sets.po.js');
var locator_sh = shop_page.locators;
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

  it("Click on Interests", function() {
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

  it("View Selected", function() {
    browser.executeScript("arguments[0].click()", locator.view_selected);
    browser.driver.sleep(3000);
    expect(locator.list_of_products.isDisplayed()).toBe(true);
  })

  it("Add any game to Bag", function() {
    locator.add_to_bag_btn.click();
    browser.driver.sleep(2000);
    expect(locator.added_notif.isDisplayed()).toBe(true);
  });

});


// describe("SETS check", function() {

//   it("Open SETS content", function() {
//     locator.sets_btn.click();
//     expect(locator.sets_modal.isDisplayed()).toBe(true);
//   });
//
//   it("Open Interests tab", function() {
//     browser.driver.sleep(3000);
//     locator.interests_tab.click();
//     browser.driver.sleep(3000);
//     expect(locator.all_interests_btn.isDisplayed()).toBe(true);
//   });
//
//   it("Open Themes tab", function() {
//     locator.themes_tab.click();
//     browser.driver.sleep(3000);
//     expect(locator.all_themes_btn.isDisplayed()).toBe(true);
//   });
//
//   it("Open home SETS page", function() {
//     locator.sets_home_btn.click();
//     browser.driver.sleep(3000);
//     expect(locator.sets_title.isDisplayed()).toBe(true);
//   });
//
//   it("Click on SETS in navigation trail", function() {
//     locator.sets_nav_trail.click();
//     browser.driver.sleep(2000);
//     expect(locator.sets_title.isDisplayed()).toBe(true);
//   });
//
//   it("Open Themes from home sets page", function() {
//     locator.all_themes_btn.click();
//     browser.driver.sleep(2000);
//     expect(locator.themes_nav_trail.isDisplayed()).toBe(true);
//     expect(locator.themes_title.isDisplayed()).toBe(true);
//   });
// });
