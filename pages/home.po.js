module.exports = {
  locators: {
    main_logo: element(by.xpath('//a[@class="logo"]')),
    right_swipe: element(by.xpath('//button[contains(@class,"fancy-chevron-right")]')),
    left_swipe: element(by.xpath('//button[contains(@class,"fancy-chevron-left")]')),
    lang_selector_btn: element(by.xpath('//select[@class="market-selector"]')),
    lang_modal: element(by.xpath('//'))
  },

  selectDropdownbyNum: function(el, optionNum) {
    if (el && optionNum) {
      el.click();
      el.all(by.tagName('option')).get(optionNum).click();
    }
  }
}
