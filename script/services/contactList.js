angular.module('honeyBookApp')
.factory('ContactListService', function ContactListServiceFactory($http){
var ContactListService = {};
ContactListService.contactList = {};
ContactListService.getContactList = function() {
	ContactListService.contactList = $http.get("https://candidate-test.herokuapp.com/contacts");
		return  ContactListService.contactList
	  }	  
	return ContactListService;
});