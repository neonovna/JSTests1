var common_page = require('./common.po.js');

module.exports = {
  locators: {
    shop_page_btn: element(by.xpath("//a[@class='gn-icon gn-icon-shop']")),
    shop_logo: element(by.xpath("//span[@data-reactid='50']")),
    lang_icon: element(by.xpath("//img[@class='icon icon-region']")),
    lang_container: element(by.xpath("//div[@class='region__container']")),
    lang_uk: element(by.xpath("//span[contains(.,'United Kingdom / English')]")),
    icon_uk: element(by.xpath("//img[@data-reactid='14']"))
  },

  go: function() {
    common_page.go();
    this.locators.shop_page_btn.click();
    browser.ignoreSynchronization = true;
    browser.driver.sleep(2000);
  }

}
