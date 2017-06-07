var pr_page = require('../pages/products.po.js');
var locator = pr_page.locators;


describe("Open Products page", function() {


  it("Check Products title", function() {
    pr_page.go();
    expect(browser.getTitle()).toEqual('Products and sets - LEGO.com UK - LEGO.com');
    //how to work with promise = then()
    //browser.getTitle().then(function(title) {
    //  console.log(title);
    //});
  });

});

describe("Categories tab", function() {


  it("Open Categories tab", function() {
    locator.categories_tab_btn.click();
    browser.driver.sleep(2000)
    expect(locator.categories_tab.isDisplayed()).toBe(true);
    expect(element(by.tagName('h2')).getText()).toBe('Categories');
  });
});

describe("By Age tab", function() {

  it("Open By Age tab", function() {
    locator.by_age_tab_btn.click();
    browser.driver.sleep(2000);
    expect(locator.age_tab.isDisplayed()).toBe(true);
    expect(element(by.tagName('h2')).getText()).toBe('Age 1 - 5');
  });
});

describe("Products tab", function() {

  it("Open Products tab", function() {
    locator.products_tab_btn.click();
    browser.driver.sleep(2000)
    expect(locator.products_tab.isDisplayed()).toBe(true);
  });
});
