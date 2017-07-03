//++++PRINT LOCATOR LOCATION++++
locator.excl_home_breadcrumbs.getLocation().then(function(x, y) {
  console.log(x, y)
});


//+++PRINT LOCATOR+++
console.log("Opapa" + locator.excl_home_breadcrumbs.locator());


//+++SCROLL to Specific Locator+++
var loc = locator.excl_home_breadcrumbs;
var scrollIntoView = function() {
  console.log(arguments);
  arguments[0].scrollIntoView();
};
browser.executeScript(scrollIntoView, loc);


//how to work with promise = then()
browser.getTitle().then(function(title) {
  console.log(title);
});

//++++RUN SPECIFIC SUITE+++
protractor.conf.js--suite homepage, search
