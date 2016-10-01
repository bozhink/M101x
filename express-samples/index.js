var express = require('express');

var app = express();

app.get('/', function (request, response, next) {
    response.send('Hello');
});

app.get('/user/:user', function (request, response, next) {
    response.send(`Page for user ${request.params.user} with option ${request.query.option}`);
})

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Express server is listening on port %s.', port);
});