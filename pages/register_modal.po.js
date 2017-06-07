var common = require("./common.po.js");

module.exports = {
  locators: {
    register_btn: element(by.xpath('//a[contains(@data-uitest,"register-link")]')),
    next2_btn: element(by.id('buttonSubmitGenerelInfo')),
    next3_btn: element(by.id('buttonSubmitChildInfo')),
    welcome: element(by.xpath("//h3[contains(text(),'Welcome')]")),
    close_reg_modal: element(by.xpath("//div[@class='legoid-close']")),
    register_modal: element(by.xpath('//div[contains(@class,"register")]')),
    user_name_field: element(by.id("fieldUsername")),
    password_field: element(by.id("fieldPassword")),
    password_reenter_field: element(by.id("fieldReenterPassword")),
    email_field: element(by.id("fieldParentEmail")),
    user_name_message: element(by.xpath('//div[@id="message" and contains(text(),"What is your username?")]')),
    password_message: element(by.xpath('//div[@id="message" and contains(text(),"top secret")]')),
    message_block: element(by.id('message')),
    birth_day_dd: element(by.xpath('//select[@id="fieldBirthDay"]')),
    birth_month_dd: element(by.xpath("//select[@id='fieldBirthMonth']")),
    birth_year_dd: element(by.xpath("//select[@id='fieldBirthYear']")),
    valid_image_username: element(by.xpath("//input[@id='fieldUsername']/parent::div[contains(@class,'valid')]")),
    valid_image_password: element(by.xpath("//input[@id='fieldPassword']/parent::div[contains(@class,'valid')]")),
    valid_image_repassword: element(by.xpath("//input[@id='fieldReenterPassword']/parent::div[contains(@class,'valid')]")),
    valid_image_email: element(by.xpath("//input[@id='fieldParentEmail']/parent::div[contains(@class,'valid')]")),
    invalid_image_username: element(by.xpath("//input[@id='fieldUsername']/parent::div[contains(@class,'error')]")),
    invalid_image_password: element(by.xpath("//input[@id='fieldPassword']/parent::div[contains(@class,'error')]")),
    invalid_image_repassword: element(by.xpath("//input[@id='fieldReenterPassword']/parent::div[contains(@class,'error')]")),
    invalid_image_email: element(by.xpath("//input[@id='fieldParentEmail']/parent::div[contains(@class,'error')]")),
    clearfocus_l: element(by.xpath("//div[@class='header']"))
  },

  selectDropdownbyNum: function(el, optionNum) {
    if (el && optionNum) {
      el.click();
      el.all(by.tagName('option')).get(optionNum).click();
    }
  },

  open: function() {
    common.go();
    browser.driver.sleep(3000);
    this.locators.register_btn.click();
  },
  clearfocus: function() {
    this.locators.clearfocus_l.click();

  }
}
