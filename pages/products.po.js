var common_page = require('./common.po.js');

module.exports = {
  locators: {
    products_page_btn: element(by.xpath("//a[@class='gn-icon gn-icon-products']")),

    products_tab_btn: element(by.xpath('//span[@class="item-title" and contains(text(),"Products")]')),
    categories_tab_btn: element(by.xpath('//span[@class="item-title" and contains(text(),"Categories")]')),
    by_age_tab_btn: element(by.xpath('//span[@class="item-title" and contains(text(),"By Age")]')),

    products_tab: element(by.xpath('//span[@itemprop="name" and contains(text(),"Products")]')),
    categories_tab: element(by.xpath('//span[@itemprop="name" and contains(text(),"Categories")]')),
    age_tab: element(by.xpath('//span[@itemprop="name" and contains(text(),"By Age")]'))


  },

  go: function() {
    common_page.go();
    this.locators.products_page_btn.click();
    browser.driver.sleep(2000);
  }

}
