const expect = require('chai').expect;
module.exports = function () {    
    this.When(/^I search uwgb for "([^"]*)"$/, (text) =>{
      return helpers.loadPage('https://www.uwgb.edu/')
      .then( () => {
        return page.uwgbSearch.performSearch(text)        
      })
    }) 
    this.Then(/^I should see a number of results$/, function(){
        return driver.wait(until.elementsLocated(page.uwgbSearch.elements.searchResultNumber), 10000);
    }); 
};