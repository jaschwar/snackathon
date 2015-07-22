var usingLoginStepDefinitions = function () {
	this.World = require("../support/world.js").World;

	this.Given(/^I have started a browser with the purecloud login page$/, function (done) {
		this.browser
			.waitForVisible('#email', 2000)
			.waitForVisible('#password', 2000)
			.waitForVisible('.btn.btn-primary.btn-login.pull-right', 2000)
			// done();
			.then(function () {
				done();
			})
			.catch(done);
	});

	this.When(/^I login using a valid static username and password$/, function (done) {
	  this.browser
	  	.setValue('#email', 'jacques.thrasybule@inin.com')
    	.setValue('#password', 'passw0rd')
    	.click('.btn.btn-primary.btn-login.pull-right')
			.then(function () {
				done();
			})
			.catch(done);
	});

	this.Then(/^I should be logged in$/, function (done) {
		this.browser
		   	.waitForVisible('span[data-on="On Queue"]',4000)
    		.click('span[data-on="On Queue"]')    
			.then(function () {
				done();
			})
			.catch(done);
	});
};

module.exports = usingLoginStepDefinitions;