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
    //check if quantity in wish list = 0
    expect(locator.wish_quantity.getText()).toContain("(0)");
  });

});

describe("Add one Item to wish list", function() {

  it("Go to main shop page", function() {
    locator.main_page.click();
    browser.driver.sleep(3000);
    expect(locator.recommend_section.isDisplayed()).toBe(true);
  })

  it("Add any Item to wish list", function() {
    //   locator.add_to_wish_btn.getLocation().then(function opa1(x, y) {
    //     return (x, y)
    //   });
    //   browser.executeScript('window.scrollTo(opa1())').then(function() {
    //     element(locator.add_to_wish_btn).click();
    //   })



    locator.recommend_section.getLocation().then(function(location) {
        return [location.x, location.y];
      })
      .then(function(x, y) {
        return browser.executeScript('window.scrollIntoView(' + x + ',' + y + ');');
      })
    browser.driver.sleep(5000);

    locator.add_to_wish_btn.click();


    browser.driver.sleep(3000);


    //   locator.add_to_wish_btn.click();
    //   browser.driver.sleep(3000);
    //   expect(locator.active_wish_btn.isDisplayed()).toBe(true);
  })
})
