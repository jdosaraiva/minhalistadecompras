'use strict';
var mongoose = require('mongoose');
var Produto = mongoose.model('Produtos');

exports.listAll = function(req, res) {
    Produto.find({}, function(err, produto) {
        if (err) {
            res.send(err);
        }
        res.json(produto);
    });
};

exports.create = function(req, res) {
    var new_produto = new Produto(req.body);

    new_produto.save(function(err, produto) {
        if (err) {
            res.send(err);
        }
        res.location('/produtos/' + produto._id);
        res.status(201).json(produto);
    });

};

exports.read = function(req, res) {
    Produto.findById(req.params.produtoId, function(err, produto) {
        if (err) {
            res.send(err);
        }
        res.json(produto);
    });
};

exports.update = function(req, res) {
    Produto.findOneAndUpdate({_id: req.params.produtoId}, req.body, {new: true}, function(err, produto) {
        if (err) {
            res.send(err);
        }
        res.json(produto);
    });
};

exports.delete = function(req, res) {
    Produto.remove({
        _id: req.params.produtoId
    }, function(err, produto) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Produto excluído com sucesso.' });
    });
};
