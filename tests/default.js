
var config = require('../config');

module.exports = {
  'Google Test': function (browser) {
    browser
      .url(config.google.url)
      .waitForElementVisible('#gbqfq', 4000)
      .setValue('#gbqfq', 'github james-huston')

      .waitForElementVisible('#gbqfb', 4000)
      .click('#gbqfb')

      .waitForElementVisible(
        'li.g',
        4000
      )

      .end();
  }
};
