angular
  .module('UnisonChat')
  .controller('ChatsCtrl', ChatsCtrl);
 
function ChatsCtrl ($scope, $reactive) {
  $reactive(this).attach($scope);
     
    this.remove = remove;
    
    this.helpers({
     data() {
      return Chats.find();
     }
   });
    
// REMOVE CHAT DATA    
function remove (chat) {
    this.data.remove(chat);
  }
}

//import { Controller } from '../entities';
// 
//export default class ChatsCtrl extends Controller {
//}
// 
//ChatsCtrl.$inject = ['$scope'];