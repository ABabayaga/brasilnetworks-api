//var Produto = require('../models/produtoModel');

var planoController = function (Plano) {

    var get = function (req, res) {

        Plano.find(function (err, planos) {

            if (err) {
                res.status(500);
                res.send("Erro interno do servidor");
            }
            else {
                res.status(200);
                res.send(planos);
            }
        });
    };

    var add = function (req, res) {

        var plano = new Plano(req.body);

        plano.save(function (err) {
            if (err) {
                res.status(500);
                res.send('Erro : falha ao incluir plano...');
            }
            else {
                res.status(201);
                res.send(plano);
            }
        })
    };

    var getById = function (req, res) {
        Plano.findById(req.params.id, function (err, plano) {
            if (err) {
                res.status(404);
                res.send("Plano não encontrado...");
            }
            else {
                res.status(200);
                res.send(plano);
            }
        })
    };

    var update = function (req, res) {

        Plano.findById(req.params.id, function (err, plano) {
            if (err) {
                res.status(404);
                res.send("Produto não encontrado...");
            }
            else {
                plano.nome = req.body.nome;
                plano.descricao = req.body.descricao;
                plano.preco = req.body.preco;
                plano.estoque = req.body.estoque;
                plano.ativo = req.body.ativo;

                plano.save(function (err) {
                    if (!err) {
                        res.status(200);
                        res.send(plano);
                    }
                    else {
                        res.status(500);
                        res.send('Falha ao atualizar produto...');
                    }
                })
            }
        });
    };

  /*  var patch = function (req, res) {
        Produto.findById(req.params.id, function (err, produto) {
            if (!err) {
                if (req.body._id) {
                    delete req.body._id;
                }

                for (var p in req.body) {
                    produto[p] = req.body[p];
                }

                produto.save(function (err) {
                    if (!err) {
                        res.status(200);
                        res.send(produto);
                    }
                })
            }
        })
    };*/

   /* var del = function (req, res) {
        Produto.findById(req.body._id, function (err, produto) {
            produto.remove(function (err) {
                if (!err) {
                    res.status(204);
                    res.send('Produto deletado...');
                }
            });
        });
    };*/

    var del = function (req, res) {
        Plano.findById(req.params.id, function (err, plano) {
            plano.remove(function (err) {
                if (!err) {
                    res.status(204);
                    res.send('Produto deletado...');
                }
            });
        });
    };

    return {
        add: add,
        get: get,
        getById: getById,
        update: update,
        del: del
    }
};

module.exports = planoController;

//module.exports = {
//    add: add,
//    get: get,
//    getById: getById,
//    update: update,
//    patch: patch,