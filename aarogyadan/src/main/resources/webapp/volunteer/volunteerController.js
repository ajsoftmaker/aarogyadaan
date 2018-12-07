'use strict';

angular.module('aarogyadanWebApp')
	.controller('volunteerController', volunteerController);

volunteerController.$inject = ['$http', '$rootScope', '$scope', '$state', 'restAPIService', 'dialogs'];

function volunteerController ($http, $rootScope, $scope, $state, restAPIService, dialogs) {
	$rootScope.apiUrl = "/api/";
	
}