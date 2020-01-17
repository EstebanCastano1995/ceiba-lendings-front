'use strict';

module.exports = {
  go: function (route) {
    browser.get(route);
    browser.waitForAngular();
  }
};
