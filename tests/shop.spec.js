var shop_page = require('../pages/shop.po.js');
var locator = shop_page.locators;


describe("Open Shop page", function() {
  shop_page.go();

  it("Check title", function() {
    expect(browser.getTitle()).toContain('LEGO Shop');
  });

  it("Logo is displayed", function() {
    expect(locator.shop_logo.isDisplayed()).toBe(true);
  });
});

describe("Change Language", function() {

  it("Language container is opened", function() {
    locator.lang_icon.click();
    expect(locator.lang_container.isDisplayed()).toBe(true);
  });

  it("Select UK", function() {
    locator.lang_uk.click();
    expect(locator.icon_uk.isDisplayed()).toBe(true);
    browser.driver.sleep(3000);
  });
});

describe("Check top buttons", function() {

  it("Click on Wish list", function() {
    locator.wish_list_btn.click();
    browser.driver.sleep(3000);
    expect(locator.breadcrumb_wish_list.isDisplayed()).toBe(true);
  });

  it("Click on Account", function() {
    locator.account_btn.click();
    browser.driver.sleep(3000);
    expect(locator.account_window.isDisplayed()).toBe(true);
  });

  it("Click on My Bag", function() {
    locator.my_bag_btn.click();
    browser.driver.sleep(3000);
    expect(locator.mini_bag.isDisplayed()).toBe(true);
  });
});
