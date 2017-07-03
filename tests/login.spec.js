var EC = protractor.ExpectedConditions;


var login_po = require('../pages/login.po.js');
var common_po = require('../pages/common.po.js');
var locator = login_po.locators;


describe("Test", function() {
  common_po.go();

  it("Open login modal", function() {
    //browser.wait(EC.visibilityOf(locator.login_btn), 10000);
    locator.login_btn.click();
    //browser.driver.sleep(3000);
    browser.ignoreSynchronization = true; //allow (start) works with non JS part
    browser.switchTo().frame('legoid-iframe'); //switch to another frame (page in page)
    expect(locator.login_modal.isDisplayed()).toBe(true);
    browser.driver.sleep(3000);
  });

  it("Enter Invalid name and password 10 times", function() {
    for (i = 1; i <= 2; i++) {
      locator.username_field.clear().then(function() {
        locator.username_field.sendKeys('lala@lolo.com');
      })
      locator.password_field.clear().then(function() {
        locator.password_field.sendKeys('sd2363');
      })
      locator.login_btn_modal.click();
      browser.wait(EC.visibilityOf(locator.invalid_notif), 10000);
      expect(locator.invalid_notif.isDisplayed()).toBe(true);
      locator.close_notif_btn.click();

    }

  })


})
