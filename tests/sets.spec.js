var common = require('../pages/common.po.js');
var shop_page = require('../pages/shop.po.js');
var sets_page = require('../pages/sets.po.js');
var locator_sh = shop_page.locators;
var locator = sets_page.locators;


describe("Open Sets home page", function() {
  common.shop_go();

});


// describe("SETS check", function() {
//
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
//   it("Open Interests from home sets page", function() {
//     locator.all_interests_btn.click();
//     browser.driver.sleep(2000);
//     expect(locator.interests_nav_trail.isDisplayed()).toBe(true);
//     expect(locator.interests_title.isDisplayed()).toBe(true);
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
