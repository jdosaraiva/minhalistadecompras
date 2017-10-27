// Register `phoneList` component, along with its associated controller and template
angular.module('produtosList')
    .component('produtosList', {
        templateUrl: 'produtos/produtos-list.template.html',
        controller: ['$http',
            function PhoneListController($http) {
                var self = this;

                self.total = 0.0;

                $http.get('http://localhost:' + process.env.PORT + '/produtos')
                .then(function(response) {
                    self.produtos = response.data;
                });

                self.adicionar = function adicionar(produto) {
                    console.log("adicionar");

                    produto.quantidade = produto.quantidade + 1;

                    self.total = self.total + produto.preco;

                    // self.produtos.map(p => console.log("{Produto: " + p.nome + ", quantidade: " + p.quantidade + "}"));

                };

                self.remover = function remover(produto) {
                    console.log("remover");

                    if (produto.quantidade > 0) {
                        produto.quantidade = produto.quantidade - 1;
                        self.total = self.total - produto.preco;
                    }

                };

                self.edit = function edit(produto) {
                    console.log("Edit: { produto: " + produto.nome + ", preco: " + produto.preco + " }");

                    produto.editable = true;
                }

                self.save = function save(produto) {
                    console.log("Save: { produto: " + produto.nome + ", preco: " + produto.preco + " }");

                    produto.editable = false;

                    self.total = 0;
                    self.produtos.map(p => {
                        if (p.quantidade > 0) {
                            self.total = self.total + p.preco;
                        }
                    });
                }
            }
        ]
    });
