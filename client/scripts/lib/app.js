// Libs
//import angular from 'angular';
//import 'angular-animate';
//import 'angular-meteor';
//import 'angular-sanitize';
//import 'angular-ui-router';
//import 'ionic-scripts';
//import 'angularMoment';
 
// Modules
//import Definer from '../definer';
//import RoutesConfig from '../routes';

// App
const App = angular.module('UnisonChat', [
  'angular-meteor',
  'ionic',
  'angularMoment'
]);

//new Definer(App)
//  .define(RoutesConfig);
 
// Startup
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
}
else {
  angular.element(document).ready(onReady);
}
 
function onReady() {
  angular.bootstrap(document, ['UnisonChat']);
}

//angular
//  .module('UnisonChat', [
//    'angular-meteor',
//    'ionic',
//    'angularMoment'
////    'angular-meteor.auth'
//  ]);
// 
//if (Meteor.isCordova) {
//  angular.element(document).on('deviceready', onReady);
//}
//else {
//  angular.element(document).ready(onReady);
//}
// 
//function onReady() {
//  angular.bootstrap(document, ['UnisonChat']);
//} 