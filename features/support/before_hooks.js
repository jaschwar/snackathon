var myBeforeHooks = function() {
	this.Before(function (scenario, callback) {
		console.log(scenario.getName(), "(" + scenario.getUri() + ":" + scenario.getLine() + ")");
  		callback();
	});
};

module.exports = myBeforeHooks;