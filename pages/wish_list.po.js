'use strict';

module.exports = {
  locators: {
    wish_list_title: element(by.xpath("//h1[text()='Wishlist']")),
    wish_quantity: element(by.xpath("//h2[@class='wishlist-header__title']")),
    main_page: element(by.xpath("//span[text()='Home']")),
    add_to_wish_btn: element(by.xpath("//span[text()='ADD TO WISHLIST']")),
    active_wish_btn: element(by.xpath("//button[@class='product-leaf__favourite--active']")),
    recommend_section: element(by.xpath("//section[@class='recommended']")),
    section: element(by.xpath("//section[@class='long-form-text-small']")),
  }
}
