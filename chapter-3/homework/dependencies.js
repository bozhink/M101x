var fs = require('fs');
var fx = require('./fx');
var Stripe = require('stripe');

module.exports = function (wagner) {
  var stripe =

    // TODO: Make Stripe depend on the Config service and use its `stripeKey`
    // property to get the Stripe API key.
    wagner.factory('Stripe', function () {
      return Stripe(wagner.invoke(function (Config) {
        return Config.stripeKey;
      }));
    });

  wagner.factory('fx', fx);

  wagner.factory('Config', function () {
    return JSON.parse(fs.readFileSync('~/tmp/m101x/config.json').toString());
  });
};