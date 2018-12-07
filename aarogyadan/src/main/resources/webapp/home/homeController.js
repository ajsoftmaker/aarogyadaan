'use strict';

angular.module('aarogyadanWebApp')
.controller('homeController', homeController);

function homeController ($state, $scope) {
	$scope.reportMode = localStorage.getItem("reportMode");
	
}