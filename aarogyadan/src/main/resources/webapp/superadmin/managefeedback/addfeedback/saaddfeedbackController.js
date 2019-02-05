'use strict';

angular.module('aarogyadanWebApp')
	.controller('saaddfeedbackController', saaddfeedbackController);

function saaddfeedbackController($scope,$rootScope,$state,dialogs,restAPIService,$location){
	
	if($scope.mode=="edit"){
		$scope.heading = "Edit Feedback";
		$scope.editMode = true;
		var id = Number($scope.id);
		var promise1 = restAPIService.feedbackService(id).get();
		promise1.$promise.then(
			function (response) {
				$scope.feedback=response;
		    },
		    function(error){
		    	dialogs.error("Error", error.data.error, {'size': 'sm' });
		    }
		);
	} else {
		$scope.heading = "Add New Feedback";
		$scope.editMode = false;
	}
	
	$scope.addFeedback = function(status) {
		$scope.feedback.feedbackStatus = status 
			var promise = restAPIService.feedbackService($scope.feedback.id).update($scope.feedback);
			promise.$promise.then(
					function (response) {
						dialogs.notify("Success", response.success, {'size': 'sm' });
						$state.reload();
				    },
				    function(error){
				    	dialogs.error("Error", error.data.error, {'size': 'sm' });
				    }
				);
	}
	
	$scope.cancelAddFeedback = function() {
		$state.reload();
	}
	
}
