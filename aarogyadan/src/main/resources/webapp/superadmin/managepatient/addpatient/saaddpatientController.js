'use strict';

angular.module('aarogyadanWebApp')
	.controller('saaddpatientController', saaddpatientController);

function saaddpatientController($scope,$rootScope,$state,dialogs,restAPIService,$location){
	$scope.Districts =[
	{
	    id: 1, name: "Kolhapur", label: "Kolhapur",
		Talukas:
	        [
	            {
	            id: 1,
	            dep: "Karvir"
	            },
	            {
	            id: 2,
	            dep: "Panhala"
	            },
	            {
	            id: 3,
	            dep: "Shahuwadi"
	            },
	            {
	            id: 4,
	            dep: "Kagal"
	            },
	            {
	            id: 5,
	            dep: "Hatkanangale"
	            },
	            {
	            id: 6,
	            dep: "Shorol"
	            },
	            {
	            id: 7,
	            dep: "Radhanagri"
	            },
	            {
	            id: 8,
	            dep: "Gaganbawada"
	            },
	            {
	            id: 9,
	            dep: "Bhudargari"
	            },
	            {
	            id: 10,
	            dep: "Gadhinglaj"
	            },
	            {
	            id: 11,
	            dep: "Chandgad"
	            },
	            {
	            id: 12,
	            dep: "Ajra"
	            }
	        ]
	},
	{
	    id: 2, name: "Pune", label: "Pune",
		Talukas:
	        [
	            {
	            id: 1,
	            dep: "Haveli"
	            },
	            {
	            id: 2,
	            dep: "Khed"
	            },
	            {
	            id: 3,
	            dep: "Junnar"
	            },
	            {
	            id: 4,
	            dep: "Ambegaon"
	            },
	            {
	            id: 5,
	            dep: "Maval"
	            },
	            {
	            id: 6,
	            dep: "Mulshi"
	            },
	            {
	            id: 7,
	            dep: "Shirur"
	            },
	            {
	            id: 8,
	            dep: "Purandar"
	            },
	            {
	            id: 9,
	            dep: "Velhe"
	            },
	            {
	            id: 10,
	            dep: "Bhor"
	            },
	            {
	            id: 11,
	            dep: "Baramati"
	            },
	            {
	            id: 12,
	            dep: "Indapur"
	            },
	            {
	            id: 13,
	            dep: "Daund"
	            }
	        ]
	},
	{
	    id: 3, name: "Sangli", label: "Sangli",
		Talukas:
	        [
	            {
	            id: 1,
	            dep: "Miraj"
	            },
	            {
	            id: 2,
	            dep: "Kvathe-Mahakal"
	            },
	            {
	            id: 3,
	            dep: "Tasgaon"
	            },
	            {
	            id: 4,
	            dep: "Jat"
	            },
	            {
	            id: 5,
	            dep: "Walwa"
	            },
	            {
	            id: 6,
	            dep: "Shirala"
	            },
	            {
	            id: 7,
	            dep: "Khanapur"
	            },
	            {
	            id: 8,
	            dep: "Atpadi"
	            },
	            {
	            id: 9,
	            dep: "Palus"
	            },
	            {
	            id: 10,
	            dep: "Kadegaon"
	            }
	        ]
	},
	{
	    id: 4, name: "Satara", label: "Satara",
		Talukas:
	        [
	            {
	            id: 1,
	            dep: "Jaoli"
	            },
	            {
	            id: 2,
	            dep: "Koregaon"
	            },
	            {
	            id: 3,
	            dep: "Wai"
	            },
	            {
	            id: 4,
	            dep: "Mahabaleshwar"
	            },
	            {
	            id: 5,
	            dep: "Khandala"
	            },
	            {
	            id: 6,
	            dep: "Phaltan"
	            },
	            {
	            id: 7,
	            dep: "Maan"
	            },
	            {
	            id: 8,
	            dep: "Khatav"
	            },
	            {
	            id: 9,
	            dep: "Patan"
	            },
	            {
	            id: 10,
	            dep: "Kard"
	            }
	        ]
	},
	{
	    id: 5, name: "Solapur", label: "Solapur",
		Talukas:
	        [
	            {
	            id: 1,
	            dep: "Solapur North"
	            },
	            {
	            id: 2,
	            dep: "Solapur South"
	            },
	            {
	            id: 3,
	            dep: "Akkalkot"
	            },
	            {
	            id: 4,
	            dep: "Barshi"
	            },
	            {
	            id: 5,
	            dep: "Madha"
	            },
	            {
	            id: 6,
	            dep: "Karmala"
	            },
	            {
	            id: 7,
	            dep: "Mohol"
	            },
	            {
	            id: 8,
	            dep: "Pandharpur"
	            },
	            {
	            id: 9,
	            dep: "Malshiras"
	            },
	            {
	            id: 10,
	            dep: "Sangole"
	            },
	            {
	            id: 11,
	            dep: "Mangaledhe"
	            }
	        ]
	},
	{
	    id: 6, name: "Ahmednagar", label: "Ahmednagar",
		Talukas:
	        [
	            {
	            id: 1,
	            dep: "Shevgaon"
	            },
	            {
	            id: 2,
	            dep: "Pathardi"
	            },
	            {
	            id: 3,
	            dep: "Parner"
	            },
	            {
	            id: 4,
	            dep: "Sangamner"
	            },
	            {
	            id: 5,
	            dep: "Kopargaon"
	            },
	            {
	            id: 6,
	            dep: "Akola"
	            },
	            {
	            id: 7,
	            dep: "Shrirampur"
	            },
	            {
	            id: 8,
	            dep: "Nevasa"
	            },
	            {
	            id: 9,
	            dep: "Rahata"
	            },
	            {
	            id: 10,
	            dep: "Rahuri"
	            },
	            {
	            id: 11,
	            dep: "Shrigonda"
	            },
	            {
	            id: 12,
	            dep: "Karjat"
	            },
	            {
	            id: 13,
	            dep: "Jamkhed"
	            }
	        ]
	}
	];
	
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
	
	$scope.contribution = ["Financial","Things(objects)","Services"];
	$scope.payment = ["cash","Cheque","Demand draft","ECS"];
	
	$scope.disease=["All Diseases","Cancer","Heart Disease","Brain Surgery","Accident"];
	$scope.diseasePreferences = $scope.disease[0];
	$scope.patient.patientDisese = $scope.disease[0];
	
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
	
	$scope.patientIFSCValid = false;
	$scope.patientIFSCSuccess = false;
	$scope.patientIFSCError = false;
	$scope.patientIFSCFeedback = "";
	
	$scope.validPatientIFSC = function(valid){
		$scope.patientIFSCValid = valid;
		if($scope.patient.patientIFSC != undefined) {
				$scope.patientIFSCSuccess = true;
				$scope.patientIFSCError = false;
				$scope.patientIFSCFeedback = "has-success has-feedback";
		} else {
			$scope.patientIFSCError = true;
			$scope.patientIFSCSuccess = false;
			$scope.patientIFSCFeedback = "has-error has-feedback"; 
		}
	}
	
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
		$scope.patient.patientPhone = "" + $scope.patient.patientPhone;
		$scope.patient.patientAadharno = "" + $scope.patient.patientAadharno;
		$scope.patient.patientAccountno = "" + $scope.patient.patientAccountno;
		
		$scope.dist = $scope.Districts[$scope.patient.patientDist-1].name;  
		$scope.tal = $scope.Districts[$scope.patient.patientDist-1].Talukas[$scope.patient.patientTal-1].dep; 
		$scope.patient.patientDist = $scope.dist
		$scope.patient.patientTal = $scope.tal
		
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
