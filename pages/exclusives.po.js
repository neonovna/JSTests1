'use strict';

module.exports = {
  locators: {
    excl_home_btn: element(by.xpath("//a[@data-test='exclusives-link-home']")),
    excl_title: element(by.xpath("//h1[contains(text(),'Exclusives')]")),

    new_block: element(by.xpath("//a[contains(@href,'/New-Exclusives')]")),
    hard_block: element(by.xpath("//a[contains(@href, '/Hard-To-Find')]")),
    view_all_block: element(by.xpath("//a[contains(@href, '/Exclusives-Category')]")),

    new_breadcrumbs: element(by.xpath("//span[text()='New']")),
    hard_breadcrumbs: element(by.xpath("//span[text()='Hard to Find Items']")),
    view_all_breadcrumbs: element(by.xpath("//span[text()='Exclusives - View all']")),


  },


}
