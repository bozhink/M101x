wagner.factory('Config', function() {
  return require('fs').readFileSync('./config.json');
});