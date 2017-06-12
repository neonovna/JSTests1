var common_page = require('../pages/common.po.js');
var home_po_page = require('../pages/home.po.js');
var locator = home_po_page.locators;


describe("Home Page", function() {
  common_page.go();

  it("Title is correct", function() {
    expect(browser.getTitle()).toContain('LEGO.com');

  });

  it("Logo is displayed", function() {
    expect(locator.main_logo.isDisplayed()).toBe(true);
  });

});

describe("Select US Language", function() {

  it("Select US Language", function() {
    home_po_page.selectDropdownbyNum(locator.lang_selector_btn, 22);
    expect(browser.getTitle()).toContain('US');
  });

});
