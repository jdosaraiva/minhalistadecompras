angular.
  module('produtosApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/produtos', {
          template: '<produtos-list></produtos-list>'
        })
        .when('/about', {
            templateUrl: 'about.html'
        })
        .otherwise('/produtos');
    }
  ]);
