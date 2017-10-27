'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProdutoSchema = new Schema({
  nome: {
      type : String,
      required : [true, "O nome do prduto é obrigatório."]
  },
  unidade : {
      type : String
  },
  preco : {
      type : Number,
      default : 0.0
  },
  quantidade: {
      type: Number,
      default: 0
  },
  editable: {
      type: Boolean,
      default: false
  }
});

module.exports = mongoose.model('Produtos', ProdutoSchema);
