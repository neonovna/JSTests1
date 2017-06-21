module.exports = {
  locators: {
    advert: element(by.id("IPEcont124035")),
    no_btn: element(by.xpath("//*[@id='IPEinvL124035']/map/area[2]")),
    register_btn: element(by.xpath('//a[contains(@data-uitest,"register-link")]')),
    cookie_info: element(by.xpath('//div[contains(@class, "cookie-consent")]')),
    accept_btn: element(by.xpath('//button[contains(.,"ACCEPT")]')),

    //shop
    add_to_bag_btn: element(by.xpath("//span[text()='ADD TO BAG']")),
    added_notif: element(by.xpath("//p[text()='ADDED TO BAG']"))

  },

  go: function() {
    browser.get("https://www.lego.com/en-gb/");
    var locators = this.locators;
    locators.advert.isPresent().then(function(present) {
      if (present) {
        locators.no_btn.click();
      }
    });
  },

  shop_go: function() {
    browser.ignoreSynchronization = true;
    browser.get("https://shop.lego.com/en-US/");
    browser.driver.sleep(2000);
    var locators = this.locators;
    locators.accept_btn.click();
    locators.cookie_info.isPresent().then(function(present) {
      if (present) {
        locators.accept_btn.click();
      };
    });

  },

};
