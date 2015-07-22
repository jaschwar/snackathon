var webdriverio = require('webdriverio');
var expect = require('chai').expect;
var assert = require('chai').assert;

var client = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'}})
.init()
.url('https://apps.inindca.com/directory/');
console.log("After client");
client.addCommand('hasText', function (selector, text, callback) {
    this.getText(selector, function (error, result) {
        expect(result).to.have.string(text);
        callback();
    });
});

client.init();


var World = function World(callback) {
    this.browser = client;

    this.visit = function(url, callback) {
        this.browser.url(url, callback);
    };

    callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};

exports.World = World;