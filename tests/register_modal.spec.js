var r_modal = require("../pages/register_modal.po.js");
var common = require("../pages/common.po.js");
var locator = r_modal.locators;

describe("Registration with valid data", function() {
  r_modal.open();

  beforeEach(function() {
    browser.driver.sleep(3000);
    browser.ignoreSynchronization = true; //allow (start) works with non JS part
    browser.switchTo().frame('legoid-iframe'); //switch to another frame (page in page)
  });

  afterEach(function() {
    browser.switchTo().defaultContent(); //switch to another frame - main page
    browser.ignoreSynchronization = false; //finish works with non JS part
  });

  it("Enter valid username", function() {
    locator.user_name_field.click();
    locator.user_name_field.sendKeys('Lala7784');
    expect(locator.user_name_field.getAttribute('value')).toEqual("Lala7784");
    r_modal.clearfocus();
    browser.driver.sleep(1000);
    expect(locator.valid_image_username.isDisplayed()).toBe(true);
  });

  it("Enter valid password", function() {
    locator.password_field.click();
    locator.password_field.sendKeys('123456');
    r_modal.clearfocus();
    expect(locator.valid_image_password.isDisplayed()).toBe(true);
  });

  it("Reenter valid password", function() {
    locator.password_reenter_field.click();
    locator.password_reenter_field.sendKeys("123456");
    r_modal.clearfocus();
    expect(locator.valid_image_repassword.isDisplayed()).toBe(true);
  })

  it("Select Birth-day", function() {
    locator.birth_day_dd.click();
    r_modal.selectDropdownbyNum(locator.birth_day_dd, 7);
    r_modal.clearfocus();
    expect(locator.birth_day_dd.getAttribute('value')).toEqual("7");

  });

  it("Select Birth-month", function() {
    locator.birth_month_dd.click();
    locator.birth_month_dd.click();
    r_modal.selectDropdownbyNum(locator.birth_month_dd, 3);
    r_modal.clearfocus();
    locator.birth_month_dd.getAttribute('value').then(function(themonth) {
      console.log("OPAPA" + themonth);
    });
    expect(locator.birth_month_dd.getAttribute('value')).toEqual("3");
  });

  it("Select Birth-year", function() {
    locator.birth_year_dd.click();
    locator.birth_year_dd.click();
    r_modal.selectDropdownbyNum(locator.birth_year_dd, 5);
    r_modal.clearfocus();
    expect(locator.birth_year_dd.getAttribute('value')).toEqual("2013");
  });

  it("Go to tab2", function() {
    locator.next2_btn.click();
    expect(locator.email_field.isDisplayed()).toBe(true);
  });


  it("Enter Valid e-mail", function() {
    locator.email_field.click();
    locator.email_field.sendKeys('lala@la.com');
    r_modal.clearfocus();
    expect(locator.valid_image_email.isDisplayed()).toBe(true);

  });

  it("Go to tab3", function() {
    locator.next3_btn.click();
    browser.driver.sleep(3000);
    expect(locator.welcome.isDisplayed()).toBe(true);
  });


  it("Close register modal", function() {
    browser.switchTo().defaultContent(); //switch to another frame - main page
    browser.ignoreSynchronization = false; //finish works with non JS part
    locator.close_reg_modal.click();
    browser.ignoreSynchronization = true; //allow (start) works with non JS part
    browser.switchTo().frame('legoid-iframe'); //switch to another frame (page in page)
    expect(locator.welcome.isDisplayed()).toBe(false);
  });


});
