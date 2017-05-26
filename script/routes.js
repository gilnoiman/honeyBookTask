angular.module('honeyBookApp')
.config(["$routeProvider",function($routeProvider) {
	$routeProvider.when('/contact-list',{
		templateUrl: '/templates/pages/contact-list.html',
		controller:'contactList'
	})
	
	.when('/',{
		templateUrl: '/templates/pages/contact-list.html',
		controller:'contactList'
	})		


	.otherwise({redirectTo:'/'});

}]);