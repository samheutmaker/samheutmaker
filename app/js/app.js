var angular = require('angular');
require('angular-animate');
require('angular-route');

var samApp = angular.module('samApp', ['ngAnimate', 'ngRoute']);


samApp.controller('HomeController', ['$scope', ($scope) => {
  $scope.workItems = [
    [{
      name: 'Major A',
      url: 'https://github.com/samheutmaker/major-a',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: '2016 - Current',
      tags: ['analytics', 'authorization', 'connect', 'express',
        'middlware'
      ],
      desc: 'MajorA is Connect middleware for user authentication, authorization, administration, and analytics.'
    }, {
      name: 'EventList',
      url: 'www.samheutmaker.com',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: '2015 - Current',
      tags: ['meanstack', 'web crawling', 'hyperlocal', 'geolocation',
        'events'
      ],
      desc: ' EventList is a web app that scrapes event data from around the Seattle area and displays it in a formatted and easily searchable manner.'
    }, {
      name: 'Maker & Meeks',
      url: 'https://github.com/samheutmaker/maker-meeks-new',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: '2016 - Current',
      tags: ['ecommerce', 'Stripe API', 'meanstack'],
      desc: 'An ecommerce clothing store built with the MEAN stack and Stripe\'s API'
    }],
    [{
      name: 'Mapplication',
      url: 'www.samheutmaker.com',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: 'Date',
      tags: ['gelocation', 'cordova', 'javascript', 'google maps',
        'mapping'
      ],
      desc: 'A geolocation tagging web app built in Javascript and Cordova.'
    }, {
      name: 'Mapplication',
      url: 'www.samheutmaker.com',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: 'Date',
      tags: ['gelocation', 'cordova', 'javascript', 'google maps',
        'mapping'
      ],
      desc: 'A geolocation tagging web app built in Javascript and Cordova.'
    }, {
      name: 'Mapplication',
      url: 'www.samheutmaker.com',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: 'Date',
      tags: ['gelocation', 'cordova', 'javascript', 'google maps',
        'mapping'
      ],
      desc: 'A geolocation tagging web app built in Javascript and Cordova.'
    }],
    [{
      name: 'Mapplication',
      url: 'www.samheutmaker.com',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: 'Date',
      tags: ['gelocation', 'cordova', 'javascript', 'google maps',
        'mapping'
      ],
      desc: 'A geolocation tagging web app built in Javascript and Cordova.'
    }, {
      name: 'Mapplication',
      url: 'www.samheutmaker.com',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: 'Date',
      tags: ['gelocation', 'cordova', 'javascript', 'google maps',
        'mapping'
      ],
      desc: 'A geolocation tagging web app built in Javascript and Cordova.'
    }, {
      name: 'Mapplication',
      url: 'www.samheutmaker.com',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: 'Date',
      tags: ['gelocation', 'cordova', 'javascript', 'google maps',
        'mapping'
      ],
      desc: 'A geolocation tagging web app built in Javascript and Cordova.'
    }]
  ];
}])
