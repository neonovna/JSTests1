var common_page = require('./common.po.js');

module.exports = {
  locators: {
    sets_home_btn: element(by.xpath("//a[@href='/en-US/Sets-Home' and contains(text(),'SETS Home')]")),
    interests_tab: element(by.xpath("//a[@href='#interests']")),
    themes_tab: element(by.xpath("//a[@href='#themes']")),

    all_interests_btn: element(by.xpath("//*[@href='/en-US/Interests']")),
    all_themes_btn: element(by.xpath("//*[@href='/en-US/Themes']")),

    sets_title: element(by.xpath("//h1[contains(text(),'Sets')]")),
    themes_title: element(by.xpath("//h1[contains(text(),'Themes')]")),
    interests_title: element(by.xpath("//h1[contains(text(),'Interests')]")),

    sets_nav_trail: element(by.xpath("//a[@href='/en-GB/Sets-Home' and @data-test='breadcrumb-link']")),
    interests_nav_trail: element(by.xpath("//span[@data-test='breadcrumb-page-title' and contains(text(),'Interests')]")),
    themes_nav_trail: element(by.xpath("//span[@data-test='breadcrumb-page-title' and contains(text(),'Themes')]")),

    any_checkbox: element(by.xpath("//div[@class='checkbox__tick']")),
    view_selected_inactive: element(by.xpath("//button[@class='category-toolbar__navigation-link--disabled']")),
    view_selected_active: element(by.xpath("//button[@class='category-toolbar__navigation-link']")),
    view_selected: element(by.xpath("//button[contains(.,'VIEW SELECTED')]")),
    list_of_products: element(by.xpath("//div[@class='product-listing__results']")),
    add_to_bag_btn: element(by.xpath("//span[text()='ADD TO BAG']")),
    added_notif: element(by.xpath("//p[text()='ADDED TO BAG']")),
  }
};
