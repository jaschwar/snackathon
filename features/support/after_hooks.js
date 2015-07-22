var myAfterHooks = function () {
  this.registerHandler('AfterScenario', function (event, callback) {
    // clean up!
    // Be careful, there is no World instance available on `this` here
    // because all scenarios are done and World instances are long gone.
    var webdriverio = require('webdriverio');
    var client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'}});
    return client.endAll();

	});
};

module.exports = myAfterHooks;