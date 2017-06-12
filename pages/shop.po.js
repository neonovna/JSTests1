var common_page = require('./common.po.js');

module.exports = {
  locators: {
    shop_page_btn: element(by.xpath("//a[@class='gn-icon gn-icon-shop']")),
    //top
    lang_icon: element(by.xpath("//img[@class='icon icon-region']")),
    lang_container: element(by.xpath("//div[@class='region__container']")),
    lang_uk: element(by.xpath("//span[contains(.,'United Kingdom / English')]")),
    icon_uk: element(by.xpath("//img[@data-reactid='14']")),
    lego_btn: element(by.xpath("//a[@href='http://www.lego.com/']")),
    wish_list_btn: element(by.xpath("//a[contains(@class,'link-wishlist')]")),
    account_btn: element(by.xpath("//div[@data-reactid='25']")),
    my_bag_btn: element(by.xpath("//a[@data-reactid='31']")),
    //top menu
    shop_logo: element(by.xpath("//span[@data-reactid='50']")),
    sets_btn: element(by.xpath("//li[@data-reactid='53']")),
    exclusives_btn: element(by.xpath("//li[@data-reactid='58']")),
    bricks_btn: element(by.xpath("//li[@data-reactid='63']")),
    extras_btn: element(by.xpath("//li[@data-reactid='68']")),
    discover_btn: element(by.xpath("//li[@data-reactid='73']")),
    search_input: element(by.xpath("//input[@type='search']")),
    search_btn: element(by.xpath("//button[contains(.,'SUBMIT SEARCH')]")),
    banner_btn: element(by.xpath("//a[@data-reactid='107']")),

    carousel1: element(by.xpath("//div[@class='carousel--fade']")),
    shop_guarantee_btn: element(by.xpath("//button[contains(.,'SHOP GUARANTEE')]")),
    shop_now1_btn: element(by.xpath("//section[@class='mainstage']/descendant::button[contains(.,'SHOP NOW')]")), //get grandchild
    //button[contains(.,'SHOP NOW')]/ancestor::section[@class='mainstage']     => get grandparent
    carousel2: element(by.xpath("//div[@class='carousel--slide']")),
    shop_now2_btn: element(by.xpath("//section[@class='exclusives-carousel']/descendant::button[contains(.,'SHOP NOW')]")), //get grand child

    email_input: element(by.xpath("//input[@type='email']")),
    sign_up_btn: element(by.xpath("//div[contains(@class, 'subscribe')]/descendant::button[@type='submit']")),


    breadcrumb_wish_list: element(by.xpath("//span[contains(.,'Wish List')]")),
    account_window: element(by.xpath("//div[@class='legoid']")),
    mini_bag: element(by.xpath("//div[@class='mini-cart']"))

  },

  go: function() {
    common_page.go();
    this.locators.shop_page_btn.click();
    browser.ignoreSynchronization = true;
    browser.driver.sleep(2000);
  }

}
