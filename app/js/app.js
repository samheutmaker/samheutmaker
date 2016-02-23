var angular = require('angular');
require('angular-animate');
require('angular-route');

var samApp = angular.module('samApp', ['ngAnimate', 'ngRoute']);


samApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider,
    $locationProvider) {

    $locationProvider.html5Mode(true);
  }
])


samApp.controller('HomeController', ['$scope', '$location', '$anchorScroll', '$window', ($scope, $location, $anchorScroll, $window) => {

  $scope.goToHash = function(url) {
    $location.hash(url);
    $anchorScroll();
  }

  

  $scope.fullSize = {
    name: 'Samuel Heutmaker',
    title: 'Fullstack Developer',
    full: true
  }
  $scope.smallSize = {
    name: 'SH',
    title: 'Fullstack',
    full: false
  }
  
  $scope.display = $scope.fullSize;

  angular.element($window).bind('resize', function() {
    $scope.$apply(function() {
      $scope.display = ($window.innerWidth < 769) ? 
      $scope.smallSize :  $scope.fullSize;
    });
  })

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
      date: '2015',
      tags: ['gelocation', 'cordova', 'javascript', 'google maps',
        'mapping'
      ],
      desc: 'A geolocation tagging web app built in Javascript and Cordova.'
    }, {
      name: 'node-live-stream',
      url: 'https://github.com/samheutmaker/node-live-stream',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: '2016',
      tags: ['node', 'ffmpeg', 'live streaming', ],
      desc: 'A node app that streams video from an IP camera to your browser'
    }, {
      name: 'Notify',
      url: 'https://github.com/forevernote/notify.git',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: '2016',
      tags: ['meanstack', 'notes', 'evernote', 'leaflet', ],
      desc: 'An online journal built with the MEAN stack'
    }],
  ];
}])