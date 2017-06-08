var r_modal = require("../pages/register_modal.po.js");
var common = require("../pages/common.po.js");
var locator = r_modal.locators;


describe("Check Notifications on register modal", function() {
  common.go();


  beforeEach(function() {
    browser.ignoreSynchronization = true; //allow (start) works with non JS part
    browser.switchTo().frame('legoid-iframe'); //switch to another frame (page in page)
    expect(locator.register_modal.isDisplayed()).toBe(true);
  });

  afterEach(function() {
    browser.switchTo().defaultContent(); //switch to another frame - main page
    browser.ignoreSynchronization = false; //finish works with non JS part
  });

  it("Check notification on Username", function() {
    locator.user_name_field.click();
    expect(locator.user_name_message.isDisplayed()).toBe(true);
  });

  it("Check notification on Password field", function() {
    locator.password_field.click();
    expect(locator.password_message.isDisplayed()).toBe(true);
  });

  it("Check notification on Password Reenter field", function() {
    locator.password_reenter_field.click();
    expect(locator.password_message.isDisplayed()).toBe(true);
  });

});
