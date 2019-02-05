'use strict';

angular.module('aarogyadanWebApp')
	.controller('faqController', faqController);

faqController.$inject = ['$http', '$rootScope', '$scope', '$state', 'restAPIService', 'dialogs'];

function faqController ($http, $rootScope, $scope, $state, restAPIService, dialogs) {
	$rootScope.apiUrl = "/api/";
	$scope.myData=myData;
	$scope.sData="";
	$scope.example14data = [ {id: 1, label: "David"}, {id: 2, label: "Jhon"}, {id: 3, label: "Lisa"}, {id: 4, label: "Nicole"}, {id: 5, label: "Danny"}, {id: 6, label: "Dan"}, {id: 7, label: "Dean"}, {id: 8, label: "Adam"}, {id: 9, label: "Uri"}, {id: 10, label: "Phil"} ]; 
	$scope.example14settings = { scrollableHeight: '200px', scrollable: true,smartButtonMaxItems: 3, smartButtonTextConverter: function(itemText, originalItem) { return itemText; }};
	$scope.example14model = [];
	
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
				patientIFSC : "",
				patientDoctorinfo : "",
				patientDate : ""
				}
		
		$scope.backer={
				backerName : "",
				backerCity : "",
				backerTal : "",
				backerDist : "",
				backerPhone : "",
				backerAadharNo : "",
				backerEmail : "",
				backerPaymentMode : "",
				backerAmount : "",
				backerVision : "",
				backerPreferences : "All"
				}
		
		$scope.pref=["All","District","Disease"];
		
		$scope.contribution = ["Financial","Things(objects)","Services"];
		$scope.payment = ["cash","Cheque","Demand draft","ECS"];
		
		$scope.disease=["All Diseases","Cancer","Heart Disease","Brain Surgery","Accident"];
		$scope.diseasePreferences = $scope.disease[0];
		$scope.patient.patientDisese = $scope.disease[0];
		
		
		$scope.backerNameValid = false;
		$scope.backerNameSuccess = false;
		$scope.backerNameError = false;
		$scope.backerNameFeedback = "";
		
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
		
		
		$scope.addBacker = function() {
//				var fd = new FormData();
				$scope.backer.backerPhone = "" + $scope.backer.backerPhone;
				$scope.backer.backerAadharNo = "" + $scope.backer.backerAadharNo;
				$scope.backer.backerAmount = "" + $scope.backer.backerAmount;
				$scope.dist = $scope.Districts[$scope.backer.backerDist-1].name;  
				$scope.tal = $scope.Districts[$scope.backer.backerDist-1].Talukas[$scope.backer.backerTal-1].dep; 
				$scope.backer.backerDist = $scope.dist
				$scope.backer.backerTal = $scope.tal
				
				
				
//				var fileReference = document.getElementById('imageBacker').files[0];
//				if (fileReference.size > 30720) {
//					dialogs.error("Error","Please select an image with size less than 30 KB", {'size' : 'sm'});
//					return;
//				}
//				if (fileReference.type.indexOf('image') < 0) {
//					
//				} else {
//					
////					$scope.backer.imageBacker = fileReference;
//					fd.append('imageBacker', fileReference);
//					console.log(fd)
//					console.log($scope.backer)
//					
//				}
				
				
				var promise = restAPIService.backersService().save(null,$scope.backer);
				promise.$promise.then(
						function (response) {
							dialogs.notify("Success", response.success, {'size': 'sm' });
							$scope.backer={
									backerName : "",
									backerCity : "",
									backerTal : "",
									backerDist : "",
									backerPhone : "",
									backerAadharNo : "",
									backerEmail : "",
									backerPaymentMode : "",
									backerAmount : "",
									backerVision : ""
									}
							$scope.diseasePreferences = $scope.disease[0];
						},
						function (error) {
							dialogs.error("Error", error.data.error, {'size': 'sm' });
						}
				);
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
		
		$scope.validBackerCity = function(valid){
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
		$scope.patientDistSuccess = true;
		$scope.patientDistError = false;
		$scope.patientDistFeedback = "has-success has-feedback";
		
		$scope.patientTalValid = false;
		$scope.patientTalSuccess = true;
		$scope.patientTalError = false;
		$scope.patientTalFeedback = "has-success has-feedback";
		
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
		
		$scope.addPatient = function() {
			
				$scope.patient.patientPhone = "" + $scope.patient.patientPhone;
				$scope.patient.patientAadharno = "" + $scope.patient.patientAadharno;
				$scope.patient.patientAccountno = "" + $scope.patient.patientAccountno;
				
				$scope.dist = $scope.Districts[$scope.patient.patientDist-1].name;  
				$scope.tal = $scope.Districts[$scope.patient.patientDist-1].Talukas[$scope.patient.patientTal-1].dep; 
				$scope.patient.patientDist = $scope.dist
				$scope.patient.patientTal = $scope.tal
				
				var promise = restAPIService.patientsService().save(null,$scope.patient);
				promise.$promise.then(
						function (response) {
							dialogs.notify("Success", response.success, {'size': 'sm' });
							$scope.patient={
									patientName : "",
									patientCity : "",
									patientTal : "",
									patientDist : "",
									patientPhone : "",
									patientAadharno : "",
									patientEmail : "",
									patientHelptype : "",
									patientAccountno : "",
									patientIFSC : "",
									patientDoctorinfo : "",
									patientDate : ""
									}
				        	$scope.patient.patientDisese = $scope.disease[0];
							$state.reload();
						},
						function (error) {
							dialogs.error("Error", error.data.error, {'size': 'sm' });
						}
				);
			
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
				var patientAadharno = ""+$scope.patient.patientAadharno;
				if($scope.patient.patientAadharno > 99999999999 ) {
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
				
					$scope.patientAccountnoSuccess = true;
					$scope.patientAccountnoError = false;
					$scope.patientAccountnoFeedback = "has-success has-feedback";
				
			} else {
				$scope.patientAccountnoError = true;
				$scope.patientAccountnoSuccess = false;
				$scope.patientAccountnoFeedback = "has-error has-feedback"; 
			}
		}
		
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
		
		function myData(){
//			$scope.sData="DATA";
			if($scope.example14model.length==0)
				$scope.sData="";
			else
			if($scope.example14model.length==$scope.Districts.length)
				$scope.sData="All";
			else {
				if($scope.sData=="" && $scope.example14model.length==1)
					$scope.sData=$scope.Districts[$scope.example14model[($scope.example14model.length)-1].id-1].name;
				else{
					$scope.sData=$scope.Districts[$scope.example14model[0].id-1].name;
					for(var i=1;i<$scope.example14model.length;i++){
						$scope.sData=$scope.sData+","+$scope.Districts[$scope.example14model[i].id-1].name;
					}
				}
//					$scope.sData=$scope.sData+","+$scope.example14data[$scope.example14model[($scope.example14model.length)-1].id-1].label;
				
			}
		}
		
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
		
		$scope.volunteerCityValid = false;
		$scope.volunteerCitySuccess = false;
		$scope.volunteerCityError = false;
		$scope.volunteerCityFeedback = "";
		
		$scope.volunteerDistValid = true;
		$scope.volunteerDistSuccess = true;
		$scope.volunteerDistError = false;
		$scope.volunteerDistFeedback = "has-success has-feedback";
		
		$scope.volunteerTalValid = true;
		$scope.volunteerTalSuccess = true;
		$scope.volunteerTalError = false;
		$scope.volunteerTalFeedback = "has-success has-feedback";
		
		$scope.addVolunteer = function() {
			
			$scope.dist = $scope.Districts[$scope.volDist-1].name;  
			$scope.tal = $scope.Districts[$scope.volDist-1].Talukas[$scope.volTal-1].dep; 
			$scope.volunteer.volunteerDist = $scope.dist
			$scope.volunteer.volunteerTal = $scope.tal
			
				var promise = restAPIService.volunteersService().save(null,$scope.volunteer);
				promise.$promise.then(
						function (response) {
							dialogs.notify("Success", response.success, {'size': 'sm' });
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
							$state.reload();
						},
						function (error) {
							dialogs.error("Error", error.data.error, {'size': 'sm' });
						}
				);
			
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