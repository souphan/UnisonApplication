angular
  .module('UnisonChat')
  .controller('ChatDetailCtrl', ChatDetailCtrl);
 
function ChatDetailCtrl ($scope, $reactive, $stateParams) {
  $reactive(this).attach($scope);
 
  let chatId = $stateParams.chatId;
    
  this.sendMessage = sendMessage;
 
  this.helpers({
    messages() {
      return Messages.find({ chatId: chatId });
    },
    data() {
      return Chats.findOne(chatId);
    },
  });
  
   function sendMessage () {
    // TODO: implement
  }
}