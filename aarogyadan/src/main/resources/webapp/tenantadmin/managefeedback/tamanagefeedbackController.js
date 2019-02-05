'use strict';

angular.module('aarogyadanWebApp')
.controller('tamanagefeedbackController', tamanagefeedbackController);

function tamanagefeedbackController($scope, $rootScope, $state, dialogs,
		restAPIService, $location,$timeout) {
	$scope.feedbacksData = [];
	$scope.batchData = [];
	$scope.parent = true;
	
	getFeedbacks();
	
	function getFeedbacks() {
		var promise1 = restAPIService.feedbacksService().query();
		promise1.$promise.then(function(response) {
			$scope.feedbacksData = response; 
		}, function(error) {
			dialogs.error("Error", error.data.error, {'size' : 'sm'});
		});
	}

	$scope.onEdit = function(feedback) {
		$scope.parent = false;
		$scope.mode = "edit";
		$scope.id = feedback.id;
		$state.go("home.samanagefeedback.saaddfeedback");
	}
	
	$scope.onEnable = function(feedback) {

		var dlg = dialogs.confirm("Are you sure ?","Are you sure you wish to enable this feedback? All login accounts for this feedback will be enabled",{'size' : 'sm'});
		dlg.result.then(function(btn) {
			feedback.feedbackStatus = "1";
			var promise = restAPIService.feedbackService(feedback.id).update(feedback);
			promise.$promise.then(function(response) {
				dialogs.notify("Success",  "Tenant Enabled Sucessfully", {'size' : 'sm'});
				getTenants();
				$state.go('home.samanageblog');
			}, function(error) {
				dialogs.error("Error", error.data.error, {'size' : 'sm'});
			});
		}, function(btn) {
		});
	}

}
