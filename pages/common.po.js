module.exports = {
  locators: {
    advert: element(by.id("IPEcont124035")),
    no_btn: element(by.xpath("//*[@id='IPEinvL124035']/map/area[2]")),
    register_btn: element(by.xpath('//a[contains(@data-uitest,"register-link")]'))
  },

  go: function() {
    browser.get("https://www.lego.com/en-gb");
    var locators = this.locators;
    locators.advert.isPresent().then(function(present) {
      if (present) {
        locators.no_btn.click();
      }
    });
  }
};
