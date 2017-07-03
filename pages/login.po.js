"use sctrict";

module.exports = {
  locators: {
    login_btn: element(by.xpath("//a[text()='Log in']")),
    login_modal: element(by.xpath("//h2[text()='Log in']")),
    username_field: element(by.id("fieldUsername")),
    password_field: element(by.id('fieldPassword')),
    login_btn_modal: element(by.id('buttonSubmitLogin')),
    invalid_notif: element(by.id('invalidUsernameOrPasswordCnt')),
    close_notif_btn: element(by.xpath('//span[text()="Close"]')),
  }
}
