var common_page = require('./common.po.js');

module.exports = {
  locators: {
    shop_page_btn: element(by.xpath("//a[@class='gn-icon gn-icon-shop']")),

  },

  go: function() {
    common_page.go();
    this.locators.shop_page_btn.click();
    browser.ignoreSynchronization = true;
    browser.driver.sleep(2000);
  }

}
