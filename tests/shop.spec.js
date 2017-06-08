var shop_page = require('../pages/shop.po.js');
var locator = shop_page.locators;



describe("Open Shop page", function() {
  shop_page.go();
  it("Check title", function() {
    expect(browser.getTitle()).toContain('LEGO Shop');
  });
});
