'use strict';

angular.module('aarogyadanWebApp')
	.controller('taaddbackerController', taaddbackerController);

function taaddbackerController($scope,$rootScope,$state,dialogs,restAPIService,$location){
	$scope.backer={
			backerName : "",
			backerCity : "",
			backerTal : "Baramati",
			backerDist : "Pune",
			backerPhone : "",
			backerAadharNo : "",
			backerEmail : "",
			backerContribution : "",
			backerPaymentMode : "",
			backerAmount : "",
			backerVision : "",
			backerPreferences : "All"
			}
	
	$scope.dist=["Akola","Amravati","Buldana","Yavatmal","Washim","Aurangabad","Beed","Jalna","Osmanabad","Nanded","Latur","Parbhani","Hingoli","Mumbai City",
	             "Mumbai Suburban","Thane","Palghar","Raigad","Ratnagiri","Sindhudurg","Bhandara","Chandrapur","Gadchiroli","Gondia","Nagpur","Wardha","Ahmednagar",
	             "Dhule","Jalgaon","Nandurbar","Nashik","Kolhapur","Pune","Sangli","Satara","Solapur"];
	
	$scope.tal=["Haveli","Khed","Maval","Bhor","Baramati","Wai","Phaltan","Karad","Miraj","Walwa","Khanapur"];
	
	$scope.pref=["All","District","Taluka","City"];
	
	$scope.backerNameValid = false;
	$scope.backerNameSuccess = false;
	$scope.backerNameError = false;
	$scope.backerNameFeedback = "";
	
	$scope.backerAddressValid = false;
	$scope.backerAddressSuccess = false;
	$scope.backerAddressError = false;
	$scope.backerAddressFeedback = "";
	
	$scope.backerCityValid = false;
	$scope.backerCitySuccess = false;
	$scope.backerCityError = false;
	$scope.backerCityFeedback = "";
	
	$scope.backerDistValid = false;
	$scope.backerDistSuccess = false;
	$scope.backerDistError = false;
	$scope.backerDistFeedback = "";
	
	$scope.backerTalValid = false;
	$scope.backerTalSuccess = false;
	$scope.backerTalError = false;
	$scope.backerTalFeedback = "";
	
	$scope.backerPhoneValid = false;
	$scope.backerPhoneSuccess = false;
	$scope.backerPhoneError = false;
	$scope.backerPhoneFeedback = "";
	
	$scope.backerEmailValid = false;
	$scope.backerEmailSuccess = false;
	$scope.backerEmailError = false;
	$scope.backerEmailFeedback = "";
	
	$scope.backerOccupationValid = false;
	$scope.backerOccupationSuccess = false;
	$scope.backerOccupationError = false;
	$scope.backerOccupationFeedback = "";
	
	$scope.backerVisionValid = false;
	$scope.backerVisionSuccess = false;
	$scope.backerVisionError = false;
	$scope.backerVisionFeedback = "";
	
//	$scope.backerPasswordValid = false;
//	$scope.backerPasswordSuccess = false;
//	$scope.backerPasswordError = false;
//	$scope.backerPasswordFeedback = "";
//	
//	$scope.backerConfirmPasswordValid = false;
//	$scope.backerConfirmPasswordSuccess = false;
//	$scope.backerConfirmPasswordError = false;
//	$scope.backerConfirmPasswordFeedback = "";
	
	$scope.backerAadharNoValid = false;
	$scope.backerAadharNoSuccess = false;
	$scope.backerAadharNoError = false;
	$scope.backerAadharNoFeedback = "";
	
	$scope.backerAmountValid = false;
	$scope.backerAmountSuccess = false;
	$scope.backerAmountError = false;
	$scope.backerAmountFeedback = "";
	
	$scope.backerPaymentModeValid = false;
	$scope.backerPaymentModeSuccess = false;
	$scope.backerPaymentModeError = false;
	$scope.backerPaymentModeFeedback = "";

	$scope.backerContributionValid = false;
	$scope.backerContributionSuccess = false;
	$scope.backerContributionError = false;
	$scope.backerContributionFeedback = "";
	
	if($scope.mode=="edit"){
		$scope.heading = "Edit Backer";
		$scope.editMode = true;
		var id = Number($scope.id);
//		var promise1 = restAPIService.backerService(id).get();
//		promise1.$promise.then(
//			function (response) {
//				$scope.backer=response;
//				$scope.backerRePassword = $scope.backer.backerPassword
//				$scope.backer.phone1 = Number($scope.backer.phone1)
//				if($scope.backer.phone2)
//					$scope.backer.phone2 = Number($scope.backer.phone2)
//		    },
//		    function(error){
//		    	dialogs.error("Error", error.data.error, {'size': 'sm' });
//		    }
//		);
	} else {
		$scope.heading = "Add New Backer";
		$scope.editMode = false;
	}
	
	$scope.addBacker = function() {
		if($scope.mode=="edit"){
			var promise = restAPIService.backerService($scope.backer.id).update($scope.backer);
			promise.$promise.then(
					function (response) {
						dialogs.notify("Success", response.success, {'size': 'sm' });
						$state.reload();
				    },
				    function(error){
				    	dialogs.error("Error", error.data.error, {'size': 'sm' });
				    }
				);
		}else{
//			$scope.backer
			$scope.backer.backerPhone = "" + $scope.backer.backerPhone;
			$scope.backer.backerAadharNo = "" + $scope.backer.backerAadharNo;
			$scope.backer.backerAmount = "" + $scope.backer.backerAmount;
			var promise = restAPIService.backersService().save(null,$scope.backer);
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
	
	$scope.cancelAddBacker = function() {
		$state.reload();
	}

	$scope.validBackerName = function(valid){
		$scope.backerNameValid = valid;
		if($scope.backer.backerName != undefined) {
			if($scope.backer.backerName.length <= 0) {
				$scope.backerNameError = true;
				$scope.backerNameFeedback = "has-error has-feedback";
			} else {
				$scope.backerNameSuccess = true;
				$scope.backerNameError = false;
				$scope.backerNameFeedback = "has-success has-feedback";
			}
		} else {
			$scope.backerNameError = true;
			$scope.backerNameSuccess = false;
			$scope.backerNameFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validBackerAddress = function(valid){
		$scope.backerAddressValid = valid;
		if($scope.backer.backerAddress != undefined) {
			if($scope.backer.backerAddress.length <= 0) {
				$scope.backerAddressSuccess = false;
				$scope.backerAddressError = true;
				$scope.backerAddressFeedback = "has-error has-feedback";
			} else {
				$scope.backerAddressSuccess = true;
				$scope.backerAddressError = false;
				$scope.backerAddressFeedback = "has-success has-feedback";
			}
		} else {
			$scope.backerAddressError = true;
			$scope.backerAddressSuccess = false;
			$scope.backerAddressFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validBackerPhone = function(valid){
		$scope.backerPhoneValid = valid;
		if($scope.backer.backerPhone != undefined) {
			var phoneNo = ""+$scope.backer.backerPhone;
			if(phoneNo.length != 10 ) {
				$scope.backerPhoneSuccess = false;
				$scope.backerPhoneError = true;
				$scope.backerPhoneFeedback = "has-error has-feedback";
				
			} else {
				$scope.backerPhoneSuccess = true;
				$scope.backerPhoneError = false;
				$scope.backerPhoneFeedback = "has-success has-feedback";
				
			}
		} else {
			$scope.backerPhoneError = true;
			$scope.backerPhoneSuccess = false;
			$scope.backerPhoneFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validBackerEmail = function(valid){
		$scope.backerEmailValid = valid;
		if(valid == true) {
			$scope.backerEmailSuccess = false;
			$scope.backerEmailError = true;
			$scope.backerEmailFeedback = "has-error has-feedback";
		} else {
			$scope.backerEmailError = false;
			$scope.backerEmailSuccess = true;
			$scope.backerEmailFeedback = "has-success has-feedback";
		}
	}
	
	$scope.validBackerOccupation = function(valid){
		if($scope.backer.backerOccupation.length == 0) {
			$scope.backerOccupationSuccess = false;
			$scope.backerOccupationError = false;
			$scope.backerOccupationFeedback = "";
		} else {
			$scope.backerOccupationSuccess = true;
			$scope.backerOccupationError = false;
			$scope.backerOccupationFeedback = "has-success has-feedback";
		}
	}
	
	$scope.validBackerVision = function(valid){
		$scope.backerVisionValid = valid;
		if($scope.backer.backerVision != undefined) {
			if($scope.backer.backerVision.length <= 0) {
				$scope.backerVisionSuccess = false;
				$scope.backerVisionError = true;
				$scope.backerVisionFeedback = "has-error has-feedback";
			} else {
				$scope.backerVisionSuccess = true;
				$scope.backerVisionError = false;
				$scope.backerVisionFeedback = "has-success has-feedback";
			}
		} else {
			$scope.backerVisionError = true;
			$scope.backerVisionSuccess = false;
			$scope.backerVisionFeedback = "has-error has-feedback"; 
		}
	}
	
//	$scope.validBackerPassword = function(valid){
//		$scope.backerPasswordValid = valid;
//		if($scope.backer.backerPassword.length>50 || $scope.backer.backerPassword.length<4) {
//			$scope.backerPasswordSuccess = false;
//			$scope.backerPasswordError = false;
//			$scope.backerPasswordFeedback = "";
//		} else {
//			$scope.backerPasswordSuccess = true;
//			$scope.backerPasswordError = false;
//			$scope.backerPasswordFeedback = "has-success has-feedback";
//		}
//	}
	
//	$scope.validBackerConfirmPassword = function(valid){
//		$scope.backerConfirmPasswordValid = valid;
//		if($scope.backerConfirmPassword != undefined) {
//			if($scope.backer.backerPassword != $scope.backerConfirmPassword) {
//				$scope.backerConfirmPasswordSuccess = false;
//				$scope.backerConfirmPasswordError = false;
//				$scope.backerConfirmPasswordFeedback = "has-error has-feedback";
//				$scope.backerConfirmPasswordValid = true;
//			} else {
//				$scope.backerConfirmPasswordSuccess = true;
//				$scope.backerConfirmPasswordError = false;
//				$scope.backerConfirmPasswordFeedback = "has-success has-feedback";
//				$scope.backerConfirmPasswordValid = false;
//			}
//		} else {
//			$scope.backerConfirmPasswordSuccess = false;
//			$scope.backerConfirmPasswordError = false;
//			$scope.backerConfirmPasswordFeedback = "has-error has-feedback";
//			$scope.backerConfirmPasswordValid = true;
//		}
//		
//	}
	
	$scope.backerAadharNoValid = false;
	$scope.backerAadharNoSuccess = false;
	$scope.backerAadharNoError = false;
	$scope.backerAadharNoFeedback = "";
	
	$scope.validBackerAadharNo = function(valid){
		$scope.backerAadharNoValid = valid;
		if($scope.backer.backerAadharNo != undefined) {
			var phoneNo = ""+$scope.backer.backerAadharNo;
			if(phoneNo.length == 12 ) {
				$scope.backerAadharNoSuccess = true;
				$scope.backerAadharNoError = false;
				$scope.backerAadharNoFeedback = "has-success has-feedback";
				$scope.backerAadharNoValid = false;
			} else {
				$scope.backerAadharNoSuccess = false;
				$scope.backerAadharNoError = true;
				$scope.backerAadharNoFeedback = "has-error has-feedback";
				$scope.backerAadharNoValid = true;
			}
		} else {
			$scope.backerAadharNoError = true;
			$scope.backerAadharNoSuccess = false;
			$scope.backerAadharNoFeedback = "has-error has-feedback"; 
			$scope.backerAadharNoValid = true;
		}
	}
	
	$scope.backerAmountValid = false;
	$scope.backerAmountSuccess = false;
	$scope.backerAmountError = false;
	$scope.backerAmountFeedback = "";
	
	$scope.validBackerAmount = function(valid){
		$scope.backerAmountValid = valid;
		if($scope.backer.backerAmount != undefined) {
			var amount = ""+$scope.backer.backerAmount;
			if(amount.length>0) {
				$scope.backerAmountSuccess = true;
				$scope.backerAmountError = false;
				$scope.backerAmountFeedback = "has-success has-feedback";
			} else {
				$scope.backerAmountSuccess = false;
				$scope.backerAmountError = true;
				$scope.backerAmountFeedback = "has-error has-feedback";
			}
		} else {
			$scope.backerAmountError = true;
			$scope.backerAmountSuccess = false;
			$scope.backerAmountFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.backerPaymentModeValid = false;
	$scope.backerPaymentModeSuccess = false;
	$scope.backerPaymentModeError = false;
	$scope.backerPaymentModeFeedback = "";
	
	$scope.validBackerPaymentMode = function(valid){
		$scope.backerPaymentModeValid = valid;
		if($scope.backer.backerPaymentMode != undefined) {
			if($scope.backer.backerPaymentMode.length <= 0) {
				$scope.backerPaymentModeSuccess = false;
				$scope.backerPaymentModeError = true;
				$scope.backerPaymentModeFeedback = "has-error has-feedback";
			} else {
				$scope.backerPaymentModeSuccess = true;
				$scope.backerPaymentModeError = false;
				$scope.backerPaymentModeFeedback = "has-success has-feedback";
			}
		} else {
			$scope.backerPaymentModeError = true;
			$scope.backerPaymentModeSuccess = false;
			$scope.backerPaymentModeFeedback = "has-error has-feedback"; 
		}
	}

	$scope.backerContributionValid = false;
	$scope.backerContributionSuccess = false;
	$scope.backerContributionError = false;
	$scope.backerContributionFeedback = "";
	
	$scope.validBackerContribution = function(valid){
		$scope.backerContributionValid = valid;
		if($scope.backer.backerContribution != undefined) {
			if($scope.backer.backerContribution.length <= 0) {
				$scope.backerContributionSuccess = false;
				$scope.backerContributionError = true;
				$scope.backerContributionFeedback = "has-error has-feedback";
			} else {
				$scope.backerContributionSuccess = true;
				$scope.backerContributionError = false;
				$scope.backerContributionFeedback = "has-success has-feedback";
			}
		} else {
			$scope.backerContributionError = true;
			$scope.backerContributionSuccess = false;
			$scope.backerContributionFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validCity = function(valid){
		$scope.backerCityValid = valid;
		if($scope.backer.backerCity != undefined) {
			if($scope.backer.backerCity.length <= 0) {
				$scope.backerCitySuccess = false;
				$scope.backerCityError = true;
				$scope.backerCityFeedback = "has-error has-feedback";
			} else {
				$scope.backerCitySuccess = true;
				$scope.backerCityError = false;
				$scope.backerCityFeedback = "has-success has-feedback";
			}
		} else {
			$scope.backerCityError = true;
			$scope.backerCitySuccess = false;
			$scope.backerCityFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validDist = function(valid){
		$scope.backerDistValid = valid;
		if($scope.backer.backerDist != undefined) {
			if($scope.backer.backerDist.length <= 0) {
				$scope.backerDistSuccess = false;
				$scope.backerDistError = true;
				$scope.backerDistFeedback = "has-error has-feedback";
			} else {
				$scope.backerDistSuccess = true;
				$scope.backerDistError = false;
				$scope.backerDistFeedback = "has-success has-feedback";
			}
		} else {
			$scope.backerDistError = true;
			$scope.backerDistSuccess = false;
			$scope.backerDistFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validTal = function(valid){
		$scope.backerTalValid = valid;
		if($scope.backer.backerTal != undefined) {
			if($scope.backer.backerTal.length <= 0) {
				$scope.backerTalSuccess = false;
				$scope.backerTalError = true;
				$scope.backerTalFeedback = "has-error has-feedback";
			} else {
				$scope.backerTalSuccess = true;
				$scope.backerTalError = false;
				$scope.backerTalFeedback = "has-success has-feedback";
			}
		} else {
			$scope.backerTalError = true;
			$scope.backerTalSuccess = false;
			$scope.backerTalFeedback = "has-error has-feedback"; 
		}
	}
}
