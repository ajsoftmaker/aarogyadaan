'use strict';

angular.module('aarogyadanWebApp')
	.controller('saaddeventController', saaddeventController);

function saaddeventController($scope,$rootScope,$state,dialogs,restAPIService,$location){
	$scope.mindate =new Date();
	$scope.bDate = new Date();
	$scope.event={
			eventTitle : "",
			}
	
	
	$scope.event.eventDate = ""+new Date();
	
	$scope.eventTitleValid = false;
	$scope.eventTitleSuccess = false;
	$scope.eventTitleError = false;
	$scope.eventTitleFeedback = "";
	
	$scope.eventTimeValid = false;
	$scope.eventTimeSuccess = false;
	$scope.eventTimeError = false;
	$scope.eventTimeFeedback = "";
	
	$scope.eventInfoValid = false;
	$scope.eventInfoSuccess = false;
	$scope.eventInfoError = false;
	$scope.eventInfoFeedback = "";
	
	$scope.eventAddressValid = false;
	$scope.eventAddressSuccess = false;
	$scope.eventAddressError = false;
	$scope.eventAddressFeedback = "";
	
	if($scope.mode=="edit"){
		$scope.heading = "Edit Event";
		$scope.editMode = true;
		var id = Number($scope.id);
//		var promise1 = restAPIService.eventService(id).get();
//		promise1.$promise.then(
//			function (response) {
//				$scope.event=response;
//				$scope.eventRePassword = $scope.event.eventPassword
//				$scope.event.phone1 = Number($scope.event.phone1)
//				if($scope.event.phone2)
//					$scope.event.phone2 = Number($scope.event.phone2)
//		    },
//		    function(error){
//		    	dialogs.error("Error", error.data.error, {'size': 'sm' });
//		    }
//		);
	} else {
		$scope.heading = "Add New Event";
		$scope.editMode = false;
	}
	
	$scope.addEvent = function() {
//		if($scope.mode=="edit"){
//			var promise = restAPIService.eventService($scope.event.id).update($scope.event);
//			promise.$promise.then(
//					function (response) {
//						dialogs.notify("Success", response.success, {'size': 'sm' });
//						$state.reload();
//				    },
//				    function(error){
//				    	dialogs.error("Error", error.data.error, {'size': 'sm' });
//				    }
//				);
//		}else{
			var promise = restAPIService.eventsService().save(null,$scope.event);
			promise.$promise.then(
					function (response) {
						dialogs.notify("Success", response.success, {'size': 'sm' });
						$state.reload();
					},
					function (error) {
						dialogs.error("Error", error.data.error, {'size': 'sm' });
					}
			);
//		}
	}
	
	$scope.cancelAddEvent = function() {
		$state.reload();
	}

	$scope.validEventTitle = function(valid){
		$scope.eventTitleValid = valid;
		if($scope.event.eventTitle != undefined) {
			if($scope.event.eventTitle.length <= 0) {
				$scope.eventTitleError = true;
				$scope.eventTitleFeedback = "has-error has-feedback";
			} else {
				$scope.eventTitleSuccess = true;
				$scope.eventTitleError = false;
				$scope.eventTitleFeedback = "has-success has-feedback";
			}
		} else {
			$scope.eventTitleError = true;
			$scope.eventTitleSuccess = false;
			$scope.eventTitleFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validEventAddress = function(valid){
		$scope.eventAddressValid = valid;
		if($scope.event.eventAddress != undefined) {
			if($scope.event.eventAddress.length <= 0) {
				$scope.eventAddressSuccess = false;
				$scope.eventAddressError = true;
				$scope.eventAddressFeedback = "has-error has-feedback";
			} else {
				$scope.eventAddressSuccess = true;
				$scope.eventAddressError = false;
				$scope.eventAddressFeedback = "has-success has-feedback";
			}
		} else {
			$scope.eventAddressError = true;
			$scope.eventAddressSuccess = false;
			$scope.eventAddressFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validEventInfo = function(valid){
		$scope.eventInfoValid = valid;
		if($scope.event.eventInfo != undefined) {
			if($scope.event.eventInfo.length <= 0) {
				$scope.eventInfoSuccess = false;
				$scope.eventInfoError = true;
				$scope.eventInfoFeedback = "has-error has-feedback";
			} else {
				$scope.eventInfoSuccess = true;
				$scope.eventInfoError = false;
				$scope.eventInfoFeedback = "has-success has-feedback";
			}
		} else {
			$scope.eventInfoError = true;
			$scope.eventInfoSuccess = false;
			$scope.eventInfoFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validEventTime = function(valid){
		$scope.eventTimeValid = valid;
		if($scope.event.eventTime != undefined) {
			if($scope.event.eventTime.length <= 0) {
				$scope.eventTimeSuccess = false;
				$scope.eventTimeError = true;
				$scope.eventTimeFeedback = "has-error has-feedback";
			} else {
				$scope.eventTimeSuccess = true;
				$scope.eventTimeError = false;
				$scope.eventTimeFeedback = "has-success has-feedback";
			}
		} else {
			$scope.eventTimeError = true;
			$scope.eventTimeSuccess = false;
			$scope.eventTimeFeedback = "has-error has-feedback"; 
		}
	}
	
}
