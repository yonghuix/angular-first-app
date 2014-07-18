(function() {
  var app = angular.module('app', ['store-products']);

  app.controller('StoreController', function(){
    // this.products = http://api.example.com/products.json
    this.products = gems;
  });

  app.controller('ReviewController', function() {
    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    }
  });

  var gems = [
    {
      name: 'Ruby',
      price: 99.99,
      description: 'A very special item.',
      canPurchase: true,
      soldOut: false,
      images: [
        'images/photo_1.jpg',
        'images/photo_2.jpg',
        'images/photo_3.jpg',
        'images/photo_4.jpg',
        'images/photo_5.jpg'
      ],
      reviews: [
        {author: 'Mike', body: 'Great product right here!', stars: '5'},
        {author: 'Jim', body: "I don't like this product!", stars: '1'}
      ]
    },
    {
      name: 'Diamond',
      price: 99.99,
      description: 'A very special item.',
      canPurchase: true,
      soldOut: true,
      images: [
        'images/photo_1.jpg',
        'images/photo_2.jpg',
        'images/photo_3.jpg',
        'images/photo_4.jpg',
        'images/photo_5.jpg'
      ],
      reviews: [
        {author: 'Mike', body: 'Great product right here!', stars: '5'},
        {author: 'Jim', body: "I don't like this product!", stars: '1'}
      ]
    },
        {
      name: 'Pearl',
      price: 50,
      description: 'A very special item.',
      canPurchase: true,
      soldOut: false,
      images: [
        'images/photo_1.jpg',
        'images/photo_2.jpg',
        'images/photo_3.jpg',
        'images/photo_4.jpg',
        'images/photo_5.jpg'
      ],
      reviews: [
        {author: 'Mike', body: 'Great product right here!', stars: '5'},
        {author: 'Jim', body: "I don't like this product!", stars: '1'}
      ]
    },
    {
      name: 'Opal',
      price: 99.99,
      description: 'A very special item.',
      canPurchase: true,
      soldOut: false,
      images: [
        'images/photo_1.jpg',
        'images/photo_2.jpg',
        'images/photo_3.jpg',
        'images/photo_4.jpg',
        'images/photo_5.jpg'
      ],
      reviews: [
        {author: 'Mike', body: 'Great product right here!', stars: '5'},
        {author: 'Jim', body: "I don't like this product!", stars: '1'}
      ]
    },
  ];
})();
