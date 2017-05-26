angular.module('honeyBookApp')
.controller('contactList',function($scope,$http,ContactListService){

        //get contact list
        ContactListService.getContactList().then(function(data) {
            $scope.contactListCollection = data.data;      
        }); 

})



