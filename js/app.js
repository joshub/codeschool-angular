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
    soldOut: false,
    images: [
      {
        full: '',
        thumb: ''
      },
      {
        full: '',
        thumb: ''
      }
    ],
    reviews: [
      {
        stars: 5,
        body: "I love this product!",
        author: "jj@example.com"
      },
      {
        stars: 1,
        body: "I hate this shit!",
        author: "kk@example.com"
      }
    ]
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
  }];

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab == checkTab;
    };
  });
})();
