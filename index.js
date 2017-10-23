var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'public')));

app.all('/*', function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port') + '!');
});
