module.exports = {
    url: 'https://www.uwgb.edu/',
    elements: {
      searchInput: by.name('search'),
      searchResultNumber: by.css('td.gsc-result-info-container > div.gsc-result-info')
    },
    /**
     * enters a search term into uwgb's search box and presses enter
     * @param {string} searchQuery
     * @returns {Promise} a promise to enter the search values
     */
    performSearch: function (searchQuery) {
      var selector = page.uwgbSearch.elements.searchInput;
      // return a promise so the calling function knows the task has completed
      return driver.findElement(selector).sendKeys(searchQuery, selenium.Key.ENTER);
    }
  };