var angular = require('angular');
require('angular-animate');
require('angular-route');

var samApp = angular.module('samApp', ['ngAnimate', 'ngRoute']);


samApp.controller('HomeController', ['$scope', ($scope) => {
  $scope.workItems = [
    [{
      name: 'Mapplication',
      url: 'www.samheutmaker.com',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: 'Date',
      tags: ['gelocation', 'cordova', 'javascript', 'google maps', 'mapping'],
      desc: 'A geolocation tagging web app built in Javascript and Cordova.'
    },
    {
      name: 'Mapplication',
      url: 'www.samheutmaker.com',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: 'Date',
      tags: ['gelocation', 'cordova', 'javascript', 'google maps', 'mapping'],
      desc: 'A geolocation tagging web app built in Javascript and Cordova.'
    },
    {
      name: 'Mapplication',
      url: 'www.samheutmaker.com',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: 'Date',
       tags: ['gelocation', 'cordova', 'javascript', 'google maps', 'mapping'],
      desc: 'A geolocation tagging web app built in Javascript and Cordova.'
    }],[{
      name: 'Mapplication',
      url: 'www.samheutmaker.com',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: 'Date',
       tags: ['gelocation', 'cordova', 'javascript', 'google maps', 'mapping'],
      desc: 'A geolocation tagging web app built in Javascript and Cordova.'
    },
    {
      name: 'Mapplication',
      url: 'www.samheutmaker.com',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: 'Date',
       tags: ['gelocation', 'cordova', 'javascript', 'google maps', 'mapping'],
      desc: 'A geolocation tagging web app built in Javascript and Cordova.'
    },
    {
      name: 'Mapplication',
      url: 'www.samheutmaker.com',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: 'Date',
       tags: ['gelocation', 'cordova', 'javascript', 'google maps', 'mapping'],
      desc: 'A geolocation tagging web app built in Javascript and Cordova.'
    }],[{
      name: 'Mapplication',
      url: 'www.samheutmaker.com',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: 'Date',
      tags: ['gelocation', 'cordova', 'javascript', 'google maps', 'mapping'],
      desc: 'A geolocation tagging web app built in Javascript and Cordova.'
    },
    {
      name: 'Mapplication',
      url: 'www.samheutmaker.com',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: 'Date',
       tags: ['gelocation', 'cordova', 'javascript', 'google maps', 'mapping'],
      desc: 'A geolocation tagging web app built in Javascript and Cordova.'
    },
    {
      name: 'Mapplication',
      url: 'www.samheutmaker.com',
      image: 'http://www.samheutmaker.com/img/1.jpg',
      date: 'Date',
       tags: ['gelocation', 'cordova', 'javascript', 'google maps', 'mapping'],
      desc: 'A geolocation tagging web app built in Javascript and Cordova.'
    }]
  ];
}])