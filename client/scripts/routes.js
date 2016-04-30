angular
  .module('UnisonChat')
  .config(config);
 
function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.html'
    })
    .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'client/templates/chats.html',
          controller: 'ChatsCtrl as chats'
        }
      }
    })
    .state('tab.chat', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'client/templates/chat-detail.html',
          controller: 'ChatDetailCtrl as chatDetail'
        }
      }
    });
 
  $urlRouterProvider.otherwise('tab/chats');
}

//import { Config } from './entities';
// 
//export default class RoutesConfig extends Config {
//  configure() {
//    this.$stateProvider
//      .state('tab', {
//        url: '/tab',
//        abstract: true,
//        templateUrl: 'client/templates/tabs.html'
//      })
//      .state('tab.chats', {
//        url: '/chats',
//        views: {
//          'tab-chats': {
//            templateUrl: 'client/templates/chats.html'
//          }
//        }
//      });
// 
//    this.$urlRouterProvider.otherwise('tab/chats');
//  }
//}
 