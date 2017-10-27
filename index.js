var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Produto = require('./public/api/models/produtoModel');
var routes = require('./public/api/routes/produtoRoutes'); //importing route
var app = express();

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
var options = {
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};
// var uri = 'mongodb://root:admin@localhost/listacompras';
var uri = 'mongodb://root:admin@ds129315.mlab.com:29315/lcompras';
mongoose.connect(uri, options);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'public')));

routes(app); //register the route

app.all('/*', function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port') + '!');
});
