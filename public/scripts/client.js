var myApp = angular.module('myApp', ['ngRoute']);

// inject our servie: $routeProvider is a service provided by Angular
myApp.config(function ($routeProvider, $locationProvider){
  // create object literal
  $routerProvider.when('/', {
    templateUrl: 'views/default.html' ,
    controller: 'DefaultController as dc',
  }).when('/george', {
    templateUrl: 'views/george.html',
    controller: 'GeorgeController as gc',
  }).when('/jarjar', {
    templateUrl: 'views/jarjar.html',
    controller: 'JarJarController as jjc',
  }).when('/joey', {
    templateUrl: 'views/joey.html',
    controller: 'JoeyController as jc'
  }).otherwise('/');
  $locationProvider.html5Mode(true);
});

myApp.controller('DefaultController', DefaultController);
myApp.controller('GerogeController', GerogeController);
myApp.controller('JarJarController', JarJarController);
myApp.controller('JoeyController', JoeyController);

function DefaultController(){
  console.log('DefaultController is loaded');
}

function GerogeController(){
  console.log('GeorgeController is loaded');
}

function JarJarController(){
  console.log('JarJarController is loaded');
}

function JoeyController(){
  console.log('JoeyController is loaded');
}
