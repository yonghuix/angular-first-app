(function() {
  var app = angular.module('store-products'), []);

  app.directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function() {
        this.tab = 1;
        this.selectTab = function(tabNumber) {
          this.tab = tabNumber;
        };
        this.isSelected = function(tabNumber) {
          return this.tab === tabNumber;
        };
        console.log('hello');
      },
      controllerAs: 'panelsCtrl'
    };
  });
})();
