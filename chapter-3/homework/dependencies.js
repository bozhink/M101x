var fs = require('fs');
var fx = require('./fx');
var Stripe = require('stripe');

module.exports = function (wagner) {

  wagner.factory('fx', fx);

  wagner.factory('Config', function () {
    return JSON.parse(fs.readFileSync('./credentials/config.json').toString());;
  });

  // TODO: Make Stripe depend on the Config service and use its `stripeKey`
  // property to get the Stripe API key.
  wagner.factory('Stripe', function (Config) {
    return Stripe(Config.stripeKey);
  });
};