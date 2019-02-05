'use strict';

angular.module('aarogyadanWebApp')
	.controller('saaddteamController', saaddteamController);

function saaddteamController($scope,$rootScope,$state,dialogs,restAPIService,$location){
	
	$scope.tenant={
			tenantName : "",
			tenantPhone : "",
			tenantEmail : "",
			tenantOccupation : "",
			tenantVision : "",
			tenantStatus : "0",
			tenantCity : "",
			tenantDist : "",
			tenantTal : ""
			}
	
	$scope.tenantNameValid = false;
	$scope.tenantNameSuccess = false;
	$scope.tenantNameError = false;
	$scope.tennatNameFeedback = "";
	
	$scope.tenantAddressValid = false;
	$scope.tenantAddressSuccess = false;
	$scope.tenantAddressError = false;
	$scope.tennatAddressFeedback = "";
	
	$scope.tenantPhoneValid = false;
	$scope.tenantPhoneSuccess = false;
	$scope.tenantPhoneError = false;
	$scope.tenantPhoneFeedback = "";
	
	$scope.tenantEmailValid = false;
	$scope.tenantEmailSuccess = false;
	$scope.tenantEmailError = false;
	$scope.tennatEmailFeedback = "";
	
	$scope.tenantOccupationValid = false;
	$scope.tenantOccupationSuccess = false;
	$scope.tenantOccupationError = false;
	$scope.tennatOccupationFeedback = "";
	
	$scope.tenantVisionValid = false;
	$scope.tenantVisionSuccess = false;
	$scope.tenantVisionError = false;
	$scope.tenantVisionFeedback = "";
	
	$scope.tenantPasswordValid = false;
	$scope.tenantPasswordSuccess = false;
	$scope.tenantPasswordError = false;
	$scope.tennatPasswordFeedback = "";
	
	$scope.tenantConfirmPasswordValid = false;
	$scope.tenantConfirmPasswordSuccess = false;
	$scope.tenantConfirmPasswordError = false;
	$scope.tennatConfirmPasswordFeedback = "";
	
	$scope.tenantCityValid = false;
	$scope.tenantCitySuccess = false;
	$scope.tenantCityError = false;
	$scope.tenantCityFeedback = "";
	
	$scope.tenantDistValid = false;
	$scope.tenantDistSuccess = false;
	$scope.tenantDistError = false;
	$scope.tenantDistFeedback = "";
	
	$scope.tenantTalValid = false;
	$scope.tenantTalSuccess = false;
	$scope.tenantTalError = false;
	$scope.tenantTalFeedback = "";
	
	if($scope.mode=="edit"){
		$scope.heading = "Edit Team Member";
		$scope.editMode = true;
		var id = Number($scope.id);
		var promise1 = restAPIService.tenantService(id).get();
		promise1.$promise.then(
			function (response) {
				$scope.tenant=response;
				$scope.tenantRePassword = $scope.tenant.tenantPassword
				$scope.tenant.phone1 = Number($scope.tenant.phone1)
				if($scope.tenant.phone2)
					$scope.tenant.phone2 = Number($scope.tenant.phone2)
		    },
		    function(error){
		    	dialogs.error("Error", error.data.error, {'size': 'sm' });
		    }
		);
	} else {
		$scope.heading = "Add New Team Member";
		$scope.editMode = false;
	}
	
	$scope.addTenant = function() {
		if($scope.mode=="edit"){
			var promise = restAPIService.tenantService($scope.tenant.id).update($scope.tenant);
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
			var promise = restAPIService.tenantsService().save(null,$scope.tenant);
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

	$scope.validTenantName = function(valid){
		$scope.tenantNameValid = valid;
		if($scope.tenant.tenantName != undefined) {
			if($scope.tenant.tenantName.length <= 0) {
				$scope.tenantNameError = true;
				$scope.tennatNameFeedback = "has-error has-feedback";
			} else {
				$scope.tenantNameSuccess = true;
				$scope.tenantNameError = false;
				$scope.tennatNameFeedback = "has-success has-feedback";
			}
		} else {
			$scope.tenantNameError = true;
			$scope.tenantNameSuccess = false;
			$scope.tennatNameFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validTenantAddress = function(valid){
		$scope.tenantAddressValid = valid;
		if($scope.tenant.tenantAddress != undefined) {
			if($scope.tenant.tenantAddress.length <= 0) {
				$scope.tenantAddressSuccess = false;
				$scope.tenantAddressError = true;
				$scope.tennatAddressFeedback = "has-error has-feedback";
			} else {
				$scope.tenantAddressSuccess = true;
				$scope.tenantAddressError = false;
				$scope.tennatAddressFeedback = "has-success has-feedback";
			}
		} else {
			$scope.tenantAddressError = true;
			$scope.tenantAddressSuccess = false;
			$scope.tennatAddressFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validTenantPhone = function(valid){
		$scope.tenantPhoneValid = valid;
		if($scope.tenant.tenantPhone != undefined) {
			var phoneNo = ""+$scope.tenant.tenantPhone;
			if(phoneNo.length != 10 ) {
				$scope.tenantPhoneSuccess = false;
				$scope.tenantPhoneError = true;
				$scope.tenantPhoneFeedback = "has-error has-feedback";
				
			} else {
				$scope.tenantPhoneSuccess = true;
				$scope.tenantPhoneError = false;
				$scope.tenantPhoneFeedback = "has-success has-feedback";
				
			}
		} else {
			$scope.tenantPhoneError = true;
			$scope.tenantPhoneSuccess = false;
			$scope.tenantPhoneFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validTenantEmail = function(valid){
		$scope.tenantEmailValid = valid;
		if(valid == true) {
			$scope.tenantEmailSuccess = false;
			$scope.tenantEmailError = true;
			$scope.tennatEmailFeedback = "has-error has-feedback";
		} else {
			$scope.tenantEmailError = false;
			$scope.tenantEmailSuccess = true;
			$scope.tennatEmailFeedback = "has-success has-feedback";
		}
	}
	
	$scope.validTenantOccupation = function(valid){
		if($scope.tenant.tenantOccupation.length == 0) {
			$scope.tenantOccupationSuccess = false;
			$scope.tenantOccupationError = false;
			$scope.tennatOccupationFeedback = "";
		} else {
			$scope.tenantOccupationSuccess = true;
			$scope.tenantOccupationError = false;
			$scope.tennatOccupationFeedback = "has-success has-feedback";
		}
	}
	
	$scope.validTenantVision = function(valid){
		$scope.tenantVisionValid = valid;
		if($scope.tenant.tenantVision != undefined) {
			if($scope.tenant.tenantVision.length <= 0) {
				$scope.tenantVisionSuccess = false;
				$scope.tenantVisionError = true;
				$scope.tenantVisionFeedback = "has-error has-feedback";
			} else {
				$scope.tenantVisionSuccess = true;
				$scope.tenantVisionError = false;
				$scope.tenantVisionFeedback = "has-success has-feedback";
			}
		} else {
			$scope.tenantVisionError = true;
			$scope.tenantVisionSuccess = false;
			$scope.tenantVisionFeedback = "has-error has-feedback"; 
		}
	}
	
//	$scope.validTenantPassword = function(valid){
//		$scope.tenantPasswordValid = valid;
//		if($scope.tenant.tenantPassword.length>50 || $scope.tenant.tenantPassword.length<4) {
//			$scope.tenantPasswordSuccess = false;
//			$scope.tenantPasswordError = false;
//			$scope.tennatPasswordFeedback = "";
//		} else {
//			$scope.tenantPasswordSuccess = true;
//			$scope.tenantPasswordError = false;
//			$scope.tennatPasswordFeedback = "has-success has-feedback";
//		}
//	}
	
//	$scope.validTenantConfirmPassword = function(valid){
//		$scope.tenantConfirmPasswordValid = valid;
//		if($scope.tenantConfirmPassword != undefined) {
//			if($scope.tenant.tenantPassword != $scope.tenantConfirmPassword) {
//				$scope.tenantConfirmPasswordSuccess = false;
//				$scope.tenantConfirmPasswordError = false;
//				$scope.tennatConfirmPasswordFeedback = "has-error has-feedback";
//				$scope.tenantConfirmPasswordValid = true;
//			} else {
//				$scope.tenantConfirmPasswordSuccess = true;
//				$scope.tenantConfirmPasswordError = false;
//				$scope.tennatConfirmPasswordFeedback = "has-success has-feedback";
//				$scope.tenantConfirmPasswordValid = false;
//			}
//		} else {
//			$scope.tenantConfirmPasswordSuccess = false;
//			$scope.tenantConfirmPasswordError = false;
//			$scope.tennatConfirmPasswordFeedback = "has-error has-feedback";
//			$scope.tenantConfirmPasswordValid = true;
//		}
//		
//	}
	
	$scope.validCity = function(valid){
		$scope.tenantCityValid = valid;
		if($scope.tenant.tenantCity != undefined) {
			if($scope.tenant.tenantCity.length <= 0) {
				$scope.tenantCitySuccess = false;
				$scope.tenantCityError = true;
				$scope.tenantCityFeedback = "has-error has-feedback";
			} else {
				$scope.tenantCitySuccess = true;
				$scope.tenantCityError = false;
				$scope.tenantCityFeedback = "has-success has-feedback";
			}
		} else {
			$scope.tenantCityError = true;
			$scope.tenantCitySuccess = false;
			$scope.tenantCityFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validDist = function(valid){
		$scope.tenantDistValid = valid;
		if($scope.tenant.tenantDist != undefined) {
			if($scope.tenant.tenantDist.length <= 0) {
				$scope.tenantDistSuccess = false;
				$scope.tenantDistError = true;
				$scope.tenantDistFeedback = "has-error has-feedback";
			} else {
				$scope.tenantDistSuccess = true;
				$scope.tenantDistError = false;
				$scope.tenantDistFeedback = "has-success has-feedback";
			}
		} else {
			$scope.tenantDistError = true;
			$scope.tenantDistSuccess = false;
			$scope.tenantDistFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validTal = function(valid){
		$scope.tenantTalValid = valid;
		if($scope.tenant.tenantTal != undefined) {
			if($scope.tenant.tenantTal.length <= 0) {
				$scope.tenantTalSuccess = false;
				$scope.tenantTalError = true;
				$scope.tenantTalFeedback = "has-error has-feedback";
			} else {
				$scope.tenantTalSuccess = true;
				$scope.tenantTalError = false;
				$scope.tenantTalFeedback = "has-success has-feedback";
			}
		} else {
			$scope.tenantTalError = true;
			$scope.tenantTalSuccess = false;
			$scope.tenantTalFeedback = "has-error has-feedback"; 
		}
	}
	
}
