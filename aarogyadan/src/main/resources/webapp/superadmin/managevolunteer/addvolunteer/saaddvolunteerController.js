'use strict';

angular.module('aarogyadanWebApp')
	.controller('saaddvolunteerController', saaddvolunteerController);

function saaddvolunteerController($scope,$rootScope,$state,dialogs,restAPIService,$location){
	$scope.volunteer={
			volunteerName : "",
			volunteerPhone : "",
			volunteerEmail : "",
			volunteerOccupation : "",
			volunteerVision : "",
			volunteerStatus : "",
			volunteerDist : "",
			volunteerTal : "",
			volunteerCity : ""
			}
	
	$scope.volunteerNameValid = false;
	$scope.volunteerNameSuccess = false;
	$scope.volunteerNameError = false;
	$scope.volunteerNameFeedback = "";
	
//	$scope.volunteerAddressValid = false;
//	$scope.volunteerAddressSuccess = false;
//	$scope.volunteerAddressError = false;
//	$scope.volunteerAddressFeedback = "";
	
	$scope.volunteerPhoneValid = false;
	$scope.volunteerPhoneSuccess = false;
	$scope.volunteerPhoneError = false;
	$scope.volunteerPhoneFeedback = "";
	
	$scope.volunteerEmailValid = false;
	$scope.volunteerEmailSuccess = false;
	$scope.volunteerEmailError = false;
	$scope.volunteerEmailFeedback = "";
	
	$scope.volunteerOccupationValid = false;
	$scope.volunteerOccupationSuccess = false;
	$scope.volunteerOccupationError = false;
	$scope.volunteerOccupationFeedback = "";
	
	$scope.volunteerVisionValid = false;
	$scope.volunteerVisionSuccess = false;
	$scope.volunteerVisionError = false;
	$scope.volunteerVisionFeedback = "";
	
//	$scope.volunteerPasswordValid = false;
//	$scope.volunteerPasswordSuccess = false;
//	$scope.volunteerPasswordError = false;
//	$scope.volunteerPasswordFeedback = "";
//	
//	$scope.volunteerConfirmPasswordValid = false;
//	$scope.volunteerConfirmPasswordSuccess = false;
//	$scope.volunteerConfirmPasswordError = false;
//	$scope.volunteerConfirmPasswordFeedback = "";
	
	$scope.volunteerCityValid = false;
	$scope.volunteerCitySuccess = false;
	$scope.volunteerCityError = false;
	$scope.volunteerCityFeedback = "";
	
	$scope.volunteerDistValid = false;
	$scope.volunteerDistSuccess = false;
	$scope.volunteerDistError = false;
	$scope.volunteerDistFeedback = "";
	
	$scope.volunteerTalValid = false;
	$scope.volunteerTalSuccess = false;
	$scope.volunteerTalError = false;
	$scope.volunteerTalFeedback = "";
	
	if($scope.mode=="edit"){
		$scope.heading = "Edit Volunteer";
		$scope.editMode = true;
		var id = Number($scope.id);
//		var promise1 = restAPIService.volunteerService(id).get();
//		promise1.$promise.then(
//			function (response) {
//				$scope.volunteer=response;
//				$scope.volunteerRePassword = $scope.volunteer.volunteerPassword
//				$scope.volunteer.phone1 = Number($scope.volunteer.phone1)
//				if($scope.volunteer.phone2)
//					$scope.volunteer.phone2 = Number($scope.volunteer.phone2)
//		    },
//		    function(error){
//		    	dialogs.error("Error", error.data.error, {'size': 'sm' });
//		    }
//		);
	} else {
		$scope.heading = "Add New Volunteer";
		$scope.editMode = false;
	}
	
	$scope.addVolunteer = function() {
		if($scope.mode=="edit"){
//			var promise = restAPIService.volunteerService($scope.volunteer.id).update($scope.volunteer);
//			promise.$promise.then(
//					function (response) {
//						dialogs.notify("Success", response.success, {'size': 'sm' });
//						$state.reload();
//				    },
//				    function(error){
//				    	dialogs.error("Error", error.data.error, {'size': 'sm' });
//				    }
//				);
		}else{
			var promise = restAPIService.volunteersService().save(null,$scope.volunteer);
			promise.$promise.then(
					function (response) {
						dialogs.notify("Success", response.success, {'size': 'sm' });
						$state.reload();
					},
					function (error) {
						dialogs.error("Error", error.data.error, {'size': 'sm' });
					}
			);
		}
	}
	
	$scope.cancelAddVolunteer = function() {
		$state.reload();
	}

	$scope.validVolunteerName = function(valid){
		$scope.volunteerNameValid = valid;
		if($scope.volunteer.volunteerName != undefined) {
			if($scope.volunteer.volunteerName.length <= 0) {
				$scope.volunteerNameError = true;
				$scope.volunteerNameFeedback = "has-error has-feedback";
			} else {
				$scope.volunteerNameSuccess = true;
				$scope.volunteerNameError = false;
				$scope.volunteerNameFeedback = "has-success has-feedback";
			}
		} else {
			$scope.volunteerNameError = true;
			$scope.volunteerNameSuccess = false;
			$scope.volunteerNameFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validVolunteerAddress = function(valid){
		$scope.volunteerAddressValid = valid;
		if($scope.volunteer.volunteerAddress != undefined) {
			if($scope.volunteer.volunteerAddress.length <= 0) {
				$scope.volunteerAddressSuccess = false;
				$scope.volunteerAddressError = true;
				$scope.volunteerAddressFeedback = "has-error has-feedback";
			} else {
				$scope.volunteerAddressSuccess = true;
				$scope.volunteerAddressError = false;
				$scope.volunteerAddressFeedback = "has-success has-feedback";
			}
		} else {
			$scope.volunteerAddressError = true;
			$scope.volunteerAddressSuccess = false;
			$scope.volunteerAddressFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validVolunteerPhone = function(valid){
		$scope.volunteerPhoneValid = valid;
		if($scope.volunteer.volunteerPhone != undefined) {
			var phoneNo = ""+$scope.volunteer.volunteerPhone;
			if(phoneNo.length != 10 ) {
				$scope.volunteerPhoneSuccess = false;
				$scope.volunteerPhoneError = true;
				$scope.volunteerPhoneFeedback = "has-error has-feedback";
				
			} else {
				$scope.volunteerPhoneSuccess = true;
				$scope.volunteerPhoneError = false;
				$scope.volunteerPhoneFeedback = "has-success has-feedback";
				
			}
		} else {
			$scope.volunteerPhoneError = true;
			$scope.volunteerPhoneSuccess = false;
			$scope.volunteerPhoneFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validVolunteerEmail = function(valid){
		$scope.volunteerEmailValid = valid;
		if(valid == true) {
			$scope.volunteerEmailSuccess = false;
			$scope.volunteerEmailError = true;
			$scope.volunteerEmailFeedback = "has-error has-feedback";
		} else {
			$scope.volunteerEmailError = false;
			$scope.volunteerEmailSuccess = true;
			$scope.volunteerEmailFeedback = "has-success has-feedback";
		}
	}
	
	$scope.validVolunteerOccupation = function(valid){
		if($scope.volunteer.volunteerOccupation.length == 0) {
			$scope.volunteerOccupationSuccess = false;
			$scope.volunteerOccupationError = false;
			$scope.volunteerOccupationFeedback = "";
		} else {
			$scope.volunteerOccupationSuccess = true;
			$scope.volunteerOccupationError = false;
			$scope.volunteerOccupationFeedback = "has-success has-feedback";
		}
	}
	
	$scope.validVolunteerVision = function(valid){
		$scope.volunteerVisionValid = valid;
		if($scope.volunteer.volunteerVision != undefined) {
			if($scope.volunteer.volunteerVision.length <= 0) {
				$scope.volunteerVisionSuccess = false;
				$scope.volunteerVisionError = true;
				$scope.volunteerVisionFeedback = "has-error has-feedback";
			} else {
				$scope.volunteerVisionSuccess = true;
				$scope.volunteerVisionError = false;
				$scope.volunteerVisionFeedback = "has-success has-feedback";
			}
		} else {
			$scope.volunteerVisionError = true;
			$scope.volunteerVisionSuccess = false;
			$scope.volunteerVisionFeedback = "has-error has-feedback"; 
		}
	}
	
//	$scope.validVolunteerPassword = function(valid){
//		$scope.volunteerPasswordValid = valid;
//		if($scope.volunteer.volunteerPassword.length>50 || $scope.volunteer.volunteerPassword.length<4) {
//			$scope.volunteerPasswordSuccess = false;
//			$scope.volunteerPasswordError = false;
//			$scope.volunteerPasswordFeedback = "";
//		} else {
//			$scope.volunteerPasswordSuccess = true;
//			$scope.volunteerPasswordError = false;
//			$scope.volunteerPasswordFeedback = "has-success has-feedback";
//		}
//	}
	
//	$scope.validVolunteerConfirmPassword = function(valid){
//		$scope.volunteerConfirmPasswordValid = valid;
//		if($scope.volunteerConfirmPassword != undefined) {
//			if($scope.volunteer.volunteerPassword != $scope.volunteerConfirmPassword) {
//				$scope.volunteerConfirmPasswordSuccess = false;
//				$scope.volunteerConfirmPasswordError = false;
//				$scope.volunteerConfirmPasswordFeedback = "has-error has-feedback";
//				$scope.volunteerConfirmPasswordValid = true;
//			} else {
//				$scope.volunteerConfirmPasswordSuccess = true;
//				$scope.volunteerConfirmPasswordError = false;
//				$scope.volunteerConfirmPasswordFeedback = "has-success has-feedback";
//				$scope.volunteerConfirmPasswordValid = false;
//			}
//		} else {
//			$scope.volunteerConfirmPasswordSuccess = false;
//			$scope.volunteerConfirmPasswordError = false;
//			$scope.volunteerConfirmPasswordFeedback = "has-error has-feedback";
//			$scope.volunteerConfirmPasswordValid = true;
//		}
//		
//	}
	

	$scope.validCity = function(valid){
		$scope.volunteerCityValid = valid;
		if($scope.volunteer.volunteerCity != undefined) {
			if($scope.volunteer.volunteerCity.length <= 0) {
				$scope.volunteerCitySuccess = false;
				$scope.volunteerCityError = true;
				$scope.volunteerCityFeedback = "has-error has-feedback";
			} else {
				$scope.volunteerCitySuccess = true;
				$scope.volunteerCityError = false;
				$scope.volunteerCityFeedback = "has-success has-feedback";
			}
		} else {
			$scope.volunteerCityError = true;
			$scope.volunteerCitySuccess = false;
			$scope.volunteerCityFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validDist = function(valid){
		$scope.volunteerDistValid = valid;
		if($scope.volunteer.volunteerDist != undefined) {
			if($scope.volunteer.volunteerDist.length <= 0) {
				$scope.volunteerDistSuccess = false;
				$scope.volunteerDistError = true;
				$scope.volunteerDistFeedback = "has-error has-feedback";
			} else {
				$scope.volunteerDistSuccess = true;
				$scope.volunteerDistError = false;
				$scope.volunteerDistFeedback = "has-success has-feedback";
			}
		} else {
			$scope.volunteerDistError = true;
			$scope.volunteerDistSuccess = false;
			$scope.volunteerDistFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validTal = function(valid){
		$scope.volunteerTalValid = valid;
		if($scope.volunteer.volunteerTal != undefined) {
			if($scope.volunteer.volunteerTal.length <= 0) {
				$scope.volunteerTalSuccess = false;
				$scope.volunteerTalError = true;
				$scope.volunteerTalFeedback = "has-error has-feedback";
			} else {
				$scope.volunteerTalSuccess = true;
				$scope.volunteerTalError = false;
				$scope.volunteerTalFeedback = "has-success has-feedback";
			}
		} else {
			$scope.volunteerTalError = true;
			$scope.volunteerTalSuccess = false;
			$scope.volunteerTalFeedback = "has-error has-feedback"; 
		}
	}
	
}
