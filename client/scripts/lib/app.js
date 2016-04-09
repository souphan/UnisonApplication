angular
  .module('UnisonChat', [
    'angular-meteor',
    'ionic',
    'angularMoment',
    'angular-meteor.auth'
  ]);
 
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
}
else {
  angular.element(document).ready(onReady);
}
 
function onReady() {
  angular.bootstrap(document, ['UnisonChat']);
} 