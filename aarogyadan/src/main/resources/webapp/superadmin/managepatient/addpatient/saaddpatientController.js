'use strict';

angular.module('aarogyadanWebApp')
	.controller('saaddpatientController', saaddpatientController);

function saaddpatientController($scope,$rootScope,$state,dialogs,restAPIService,$location){
	$scope.patient={
			patientName : "",
			patientCity : "",
			patientTal : "",
			patientDist : "",
			patientPhone : "",
			patientAadharno : "",
			patientEmail : "",
			patientDisese : "",
			patientHelptype : "",
			patientAccountno : "",
			patientDoctorinfo : "",
			patientDate : ""
			}
	
	$scope.patient.patientDate = ""+new Date();
	
	$scope.patientNameValid = false;
	$scope.patientNameSuccess = false;
	$scope.patientNameError = false;
	$scope.patientNameFeedback = "";
	
	$scope.patientAddressValid = false;
	$scope.patientAddressSuccess = false;
	$scope.patientAddressError = false;
	$scope.patientAddressFeedback = "";
	
	$scope.patientCityValid = false;
	$scope.patientCitySuccess = false;
	$scope.patientCityError = false;
	$scope.patientCityFeedback = "";
	
	$scope.patientDistValid = false;
	$scope.patientDistSuccess = false;
	$scope.patientDistError = false;
	$scope.patientDistFeedback = "";
	
	$scope.patientTalValid = false;
	$scope.patientTalSuccess = false;
	$scope.patientTalError = false;
	$scope.patientTalFeedback = "";
	
	$scope.patientPhoneValid = false;
	$scope.patientPhoneSuccess = false;
	$scope.patientPhoneError = false;
	$scope.patientPhoneFeedback = "";
	
	$scope.patientEmailValid = false;
	$scope.patientEmailSuccess = false;
	$scope.patientEmailError = false;
	$scope.patientEmailFeedback = "";
	
	$scope.patientOccupationValid = false;
	$scope.patientOccupationSuccess = false;
	$scope.patientOccupationError = false;
	$scope.patientOccupationFeedback = "";
	
	$scope.patientDoctorinfoValid = false;
	$scope.patientDoctorinfoSuccess = false;
	$scope.patientDoctorinfoError = false;
	$scope.patientDoctorinfoFeedback = "";
	
//	$scope.patientPasswordValid = false;
//	$scope.patientPasswordSuccess = false;
//	$scope.patientPasswordError = false;
//	$scope.patientPasswordFeedback = "";
//	
//	$scope.patientConfirmPasswordValid = false;
//	$scope.patientConfirmPasswordSuccess = false;
//	$scope.patientConfirmPasswordError = false;
//	$scope.patientConfirmPasswordFeedback = "";
	
	$scope.patientAadharnoValid = false;
	$scope.patientAadharnoSuccess = false;
	$scope.patientAadharnoError = false;
	$scope.patientAadharnoFeedback = "";
	
	$scope.patientAccountnoValid = false;
	$scope.patientAccountnoSuccess = false;
	$scope.patientAccountnoError = false;
	$scope.patientAccountnoFeedback = "";
	
	$scope.patientHelptypeValid = false;
	$scope.patientHelptypeSuccess = false;
	$scope.patientHelptypeError = false;
	$scope.patientHelptypeFeedback = "";

	$scope.patientDiseseValid = false;
	$scope.patientDiseseSuccess = false;
	$scope.patientDiseseError = false;
	$scope.patientDiseseFeedback = "";
	
	if($scope.mode=="edit"){
		$scope.heading = "Edit Patient";
		$scope.editMode = true;
		var id = Number($scope.id);
//		var promise1 = restAPIService.patientService(id).get();
//		promise1.$promise.then(
//			function (response) {
//				$scope.patient=response;
//				$scope.patientRePassword = $scope.patient.patientPassword
//				$scope.patient.phone1 = Number($scope.patient.phone1)
//				if($scope.patient.phone2)
//					$scope.patient.phone2 = Number($scope.patient.phone2)
//		    },
//		    function(error){
//		    	dialogs.error("Error", error.data.error, {'size': 'sm' });
//		    }
//		);
	} else {
		$scope.heading = "Add New Patient";
		$scope.editMode = false;
	}
	
	$scope.addPatient = function() {
		if($scope.mode=="edit"){
			var promise = restAPIService.patientService($scope.patient.id).update($scope.patient);
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
//			$scope.patient
			$scope.patient.patientPhone = "" + $scope.patient.patientPhone;
			$scope.patient.patientAadharno = "" + $scope.patient.patientAadharno;
			$scope.patient.patientAccountno = "" + $scope.patient.patientAccountno;
			var promise = restAPIService.patientsService().save(null,$scope.patient);
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
	
	$scope.cancelAddPatient = function() {
		$state.reload();
	}

	$scope.validPatientName = function(valid){
		$scope.patientNameValid = valid;
		if($scope.patient.patientName != undefined) {
			if($scope.patient.patientName.length <= 0) {
				$scope.patientNameError = true;
				$scope.patientNameFeedback = "has-error has-feedback";
			} else {
				$scope.patientNameSuccess = true;
				$scope.patientNameError = false;
				$scope.patientNameFeedback = "has-success has-feedback";
			}
		} else {
			$scope.patientNameError = true;
			$scope.patientNameSuccess = false;
			$scope.patientNameFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validPatientAddress = function(valid){
		$scope.patientAddressValid = valid;
		if($scope.patient.patientAddress != undefined) {
			if($scope.patient.patientAddress.length <= 0) {
				$scope.patientAddressSuccess = false;
				$scope.patientAddressError = true;
				$scope.patientAddressFeedback = "has-error has-feedback";
			} else {
				$scope.patientAddressSuccess = true;
				$scope.patientAddressError = false;
				$scope.patientAddressFeedback = "has-success has-feedback";
			}
		} else {
			$scope.patientAddressError = true;
			$scope.patientAddressSuccess = false;
			$scope.patientAddressFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validPatientPhone = function(valid){
		$scope.patientPhoneValid = valid;
		if($scope.patient.patientPhone != undefined) {
			var phoneNo = ""+$scope.patient.patientPhone;
			if(phoneNo.length != 10 ) {
				$scope.patientPhoneSuccess = false;
				$scope.patientPhoneError = true;
				$scope.patientPhoneFeedback = "has-error has-feedback";
				
			} else {
				$scope.patientPhoneSuccess = true;
				$scope.patientPhoneError = false;
				$scope.patientPhoneFeedback = "has-success has-feedback";
				
			}
		} else {
			$scope.patientPhoneError = true;
			$scope.patientPhoneSuccess = false;
			$scope.patientPhoneFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validPatientEmail = function(valid){
		$scope.patientEmailValid = valid;
		if(valid == true) {
			$scope.patientEmailSuccess = false;
			$scope.patientEmailError = true;
			$scope.patientEmailFeedback = "has-error has-feedback";
		} else {
			$scope.patientEmailError = false;
			$scope.patientEmailSuccess = true;
			$scope.patientEmailFeedback = "has-success has-feedback";
		}
	}
	
	$scope.validPatientOccupation = function(valid){
		if($scope.patient.patientOccupation.length == 0) {
			$scope.patientOccupationSuccess = false;
			$scope.patientOccupationError = false;
			$scope.patientOccupationFeedback = "";
		} else {
			$scope.patientOccupationSuccess = true;
			$scope.patientOccupationError = false;
			$scope.patientOccupationFeedback = "has-success has-feedback";
		}
	}
	
	$scope.validPatientDoctorinfo = function(valid){
		$scope.patientDoctorinfoValid = valid;
		if($scope.patient.patientDoctorinfo != undefined) {
			if($scope.patient.patientDoctorinfo.length <= 0) {
				$scope.patientDoctorinfoSuccess = false;
				$scope.patientDoctorinfoError = true;
				$scope.patientDoctorinfoFeedback = "has-error has-feedback";
			} else {
				$scope.patientDoctorinfoSuccess = true;
				$scope.patientDoctorinfoError = false;
				$scope.patientDoctorinfoFeedback = "has-success has-feedback";
			}
		} else {
			$scope.patientDoctorinfoError = true;
			$scope.patientDoctorinfoSuccess = false;
			$scope.patientDoctorinfoFeedback = "has-error has-feedback"; 
		}
	}
	
	
	$scope.patientAadharnoValid = false;
	$scope.patientAadharnoSuccess = false;
	$scope.patientAadharnoError = false;
	$scope.patientAadharnoFeedback = "";
	
	$scope.validPatientAadharNo = function(valid){
		$scope.patientAadharnoValid = valid;
		if($scope.patient.patientAadharno != undefined) {
			var phoneNo = ""+$scope.patient.patientAadharno;
			if(phoneNo.length == 12 ) {
				$scope.patientAadharnoSuccess = true;
				$scope.patientAadharnoError = false;
				$scope.patientAadharnoFeedback = "has-success has-feedback";
				$scope.patientAadharnoValid = false;
			} else {
				$scope.patientAadharnoSuccess = false;
				$scope.patientAadharnoError = true;
				$scope.patientAadharnoFeedback = "has-error has-feedback";
				$scope.patientAadharnoValid = true;
			}
		} else {
			$scope.patientAadharnoError = true;
			$scope.patientAadharnoSuccess = false;
			$scope.patientAadharnoFeedback = "has-error has-feedback"; 
			$scope.patientAadharnoValid = true;
		}
	}
	
	$scope.patientAccountnoValid = false;
	$scope.patientAccountnoSuccess = false;
	$scope.patientAccountnoError = false;
	$scope.patientAccountnoFeedback = "";
	
	$scope.validPatientAccountno = function(valid){
		$scope.patientAccountnoValid = valid;
		if($scope.patient.patientAccountno != undefined) {
			var amount = ""+$scope.patient.patientAccountno;
			if(amount.length<13 && amount.length>9) {
				$scope.patientAccountnoSuccess = true;
				$scope.patientAccountnoError = false;
				$scope.patientAccountnoFeedback = "has-success has-feedback";
			} else {
				$scope.patientAccountnoSuccess = false;
				$scope.patientAccountnoError = true;
				$scope.patientAccountnoFeedback = "has-error has-feedback";
			}
		} else {
			$scope.patientAccountnoError = true;
			$scope.patientAccountnoSuccess = false;
			$scope.patientAccountnoFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.patientHelptypeValid = false;
	$scope.patientHelptypeSuccess = false;
	$scope.patientHelptypeError = false;
	$scope.patientHelptypeFeedback = "";
	
	$scope.validPatientHelptype = function(valid){
		$scope.patientHelptypeValid = valid;
		if($scope.patient.patientHelptype != undefined) {
			if($scope.patient.patientHelptype.length <= 0) {
				$scope.patientHelptypeSuccess = false;
				$scope.patientHelptypeError = true;
				$scope.patientHelptypeFeedback = "has-error has-feedback";
			} else {
				$scope.patientHelptypeSuccess = true;
				$scope.patientHelptypeError = false;
				$scope.patientHelptypeFeedback = "has-success has-feedback";
			}
		} else {
			$scope.patientHelptypeError = true;
			$scope.patientHelptypeSuccess = false;
			$scope.patientHelptypeFeedback = "has-error has-feedback"; 
		}
	}

	$scope.patientDiseseValid = false;
	$scope.patientDiseseSuccess = false;
	$scope.patientDiseseError = false;
	$scope.patientDiseseFeedback = "";
	
	$scope.validPatientDisese = function(valid){
		$scope.patientDiseseValid = valid;
		if($scope.patient.patientDisese != undefined) {
			if($scope.patient.patientDisese.length <= 0) {
				$scope.patientDiseseSuccess = false;
				$scope.patientDiseseError = true;
				$scope.patientDiseseFeedback = "has-error has-feedback";
			} else {
				$scope.patientDiseseSuccess = true;
				$scope.patientDiseseError = false;
				$scope.patientDiseseFeedback = "has-success has-feedback";
			}
		} else {
			$scope.patientDiseseError = true;
			$scope.patientDiseseSuccess = false;
			$scope.patientDiseseFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validPatientCity = function(valid){
		$scope.patientCityValid = valid;
		if($scope.patient.patientCity != undefined) {
			if($scope.patient.patientCity.length <= 0) {
				$scope.patientCitySuccess = false;
				$scope.patientCityError = true;
				$scope.patientCityFeedback = "has-error has-feedback";
			} else {
				$scope.patientCitySuccess = true;
				$scope.patientCityError = false;
				$scope.patientCityFeedback = "has-success has-feedback";
			}
		} else {
			$scope.patientCityError = true;
			$scope.patientCitySuccess = false;
			$scope.patientCityFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validPatientDist = function(valid){
		$scope.patientDistValid = valid;
		if($scope.patient.patientDist != undefined) {
			if($scope.patient.patientDist.length <= 0) {
				$scope.patientDistSuccess = false;
				$scope.patientDistError = true;
				$scope.patientDistFeedback = "has-error has-feedback";
			} else {
				$scope.patientDistSuccess = true;
				$scope.patientDistError = false;
				$scope.patientDistFeedback = "has-success has-feedback";
			}
		} else {
			$scope.patientDistError = true;
			$scope.patientDistSuccess = false;
			$scope.patientDistFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validPatientTal = function(valid){
		$scope.patientTalValid = valid;
		if($scope.patient.patientTal != undefined) {
			if($scope.patient.patientTal.length <= 0) {
				$scope.patientTalSuccess = false;
				$scope.patientTalError = true;
				$scope.patientTalFeedback = "has-error has-feedback";
			} else {
				$scope.patientTalSuccess = true;
				$scope.patientTalError = false;
				$scope.patientTalFeedback = "has-success has-feedback";
			}
		} else {
			$scope.patientTalError = true;
			$scope.patientTalSuccess = false;
			$scope.patientTalFeedback = "has-error has-feedback"; 
		}
	}
}
