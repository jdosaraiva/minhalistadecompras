'use strict';
module.exports = function(app) {
  var produtosList = require('../controllers/produtoController');

  // produtosList Routes
  app.route('/produtos')
    .get(produtosList.listAll)
    .post(produtosList.create);


  app.route('/produtos/:produtoId')
    .get(produtosList.read)
    .put(produtosList.update)
    .delete(produtosList.delete);

};
