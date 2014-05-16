(function(){
  var app = angular.module('store', []);
  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [{
    name: 'Ruby',
    price: 35000,
    description: 'From South America',
    canBuy: true,
    soldOut: false
  },{
    name: 'Ecramenti',
    price: 4000,
    description: 'From Latin America',
    canBuy: false,
    soldOut: false   
  },{
    name: 'Gramot gem',
    price: 49000,
    description: 'From North Africa',
    canBuy: true,
    soldOut: false   
  }]
})();
