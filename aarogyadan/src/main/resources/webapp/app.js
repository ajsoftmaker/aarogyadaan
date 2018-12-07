'use strict';

var aarogyadanWebApp = angular.module(
		'aarogyadanWebApp',
		[ 'ui.calendar','angularMoment','ui.router', 'ui.bootstrap', 'datatables', 'ngResource', 'ngTable',
				'ngTableResizableColumns', 'ngBootstrap', 'ngMessages','MassAutoComplete',
				'ngSanitize', 'dialogs.main', 'eqRestAPIs', 'angular-loading-bar','checklist-model','chart.js',
				])
		.config(config)
		.controller('appController', function($location,$http,$rootScope) {
			var path = $location.path();
			if (path.match(/activate/g) == null && path.match(/resetpassword/g) == null ) {
				if($http.defaults.headers.common.Authorization == null || $http.defaults.headers.common.Authorization == undefined) {
					if(localStorage.getItem("rootScope") !=null || localStorage.getItem("rootScope") != undefined) {
						$http.defaults.headers.common.Authorization = localStorage.getItem("rootScope");
						$rootScope.apiUrl="api/"
						localStorage.removeItem("rootScope");
					}else {
						window.location.href = "#/main";//main
					}
				}
			}
		});

function config($stateProvider, $urlRouterProvider) {
	
	$stateProvider.state('main', {
		url : '/main',
		templateUrl : 'main/main.html',
		controller : "mainController"
	}).state('feedback', {
		url : '/feedback',
		templateUrl : 'feedback/feedback.html',
		controller : "feedbackController"
	}).state('gallery', {
		url : '/gallery',
		templateUrl : 'gallery/gallery.html',
		controller : "galleryController"
	}).state('about', {
		url : '/about',
		templateUrl : 'about/about.html',
		controller : "aboutController"
	}).state('volunteer', {
		url : '/volunteer',
		templateUrl : 'volunteer/volunteer.html',
		controller : "volunteerController"
	}).state('login', {
		url : '/login',
		templateUrl : 'login/login.html',
		controller : "loginController"
	}).state('multipleId', {
		url : '/login/multipleid',
		templateUrl : 'login/multipleID/multipleID.html',
		controller : "multipleIDController"
	}).state('activate', {
		url : '/activate/:userkey',
		templateUrl : 'login/activate/activate.html',
		controller : "activateController"
	}).state('forgot', {
		url : '/forgot',
		templateUrl : 'login/forgot/forgot.html',
		controller : "forgotController"
	}).state('resetpassword', {
		url : '/resetpassword/:resetKey',
		templateUrl : 'login/resetpassword/resetpassword.html',
		controller : "resetPasswordController"
	}).state('home', {
		url : '/home',
		templateUrl : 'home/home.html',
		controller : "homeController"
	})
	
	.state('allvolunteer', {
		url : '/allvolunteer',
		templateUrl : 'viewall/allvolunteer.html',
		controller : "allvolunteerController"
	})
	
	.state('allbacker', {
		url : '/allbacker',
		templateUrl : 'viewall/allbacker.html',
		controller : "allbackerController"
	})
	
	.state('faq', {
		url : '/faq',
		templateUrl : 'faq/faq.html',
		controller : "faqController"
	})
	
	// ------------ SUPER ADMIN WORKFLOW ---------------
	.state('home.sadashboard', {
		templateUrl : 'superadmin/sa_dashboard/sa_dashboard.html',
		url : '/sadashboard',
		controller : "saDashboardController"
	})
	//Aarogyadan
	.state('home.samanagevolunteer', {
		templateUrl : 'superadmin/managevolunteer/samanagevolunteer.html',
		url : '/samanagevolunteer',
		controller : "samanagevolunteerController"
	}).state('home.samanagevolunteer.saaddvolunteer', {
		templateUrl : 'superadmin/managevolunteer/addvolunteer/saaddvolunteer.html',
		url : '/saaddvolunteer',
		controller : "saaddvolunteerController"
	})
	
	.state('home.samanageteam', {
		templateUrl : 'superadmin/manageteam/samanageteam.html',
		url : '/samanageteam',
		controller : "samanageteamController"
	}).state('home.samanageteam.saaddteam', {
		templateUrl : 'superadmin/manageteam/addteam/saaddteam.html',
		url : '/saaddteam',
		controller : "saaddteamController"
	})
	
	.state('home.samanagebacker', {
		templateUrl : 'superadmin/managebacker/samanagebacker.html',
		url : '/samanagebacker',
		controller : "samanagebackerController"
	}).state('home.samanagebacker.saaddbacker', {
		templateUrl : 'superadmin/managebacker/addbacker/saaddbacker.html',
		url : '/saaddbacker',
		controller : "saaddbackerController"
	})
	
	.state('home.samanagepatient', {
		templateUrl : 'superadmin/managepatient/samanagepatient.html',
		url : '/samanagepatient',
		controller : "samanagepatientController"
	}).state('home.samanagepatient.saaddpatient', {
		templateUrl : 'superadmin/managepatient/addpatient/saaddpatient.html',
		url : '/saaddpatient',
		controller : "saaddpatientController"
	})
	
	.state('home.samanageblog', {
		templateUrl : 'superadmin/manageblog/samanageblog.html',
		url : '/samanageblog',
		controller : "samanageblogController"
	}).state('home.samanageblog.saaddblog', {
		templateUrl : 'superadmin/manageblog/addblog/saaddblog.html',
		url : '/saaddblog',
		controller : "saaddblogController"
	})
	
	//samanagevolunteerController
	
	
	// ------------ TENANT ADMIN WORKFLOW ---------------
	.state('home.tadashboard', {
		templateUrl : 'tenantadmin/ta_dashboard/ta_dashboard.html',
		url : '/tadashboard',
		controller : "taDashboardController"
	})
	
	.state('home.tamanagevolunteer', {
		templateUrl : 'tenantadmin/managevolunteer/tamanagevolunteer.html',
		url : '/tamanagevolunteer',
		controller : "tamanagevolunteerController"
	}).state('home.tamanagevolunteer.taaddvolunteer', {
		templateUrl : 'tenantadmin/managevolunteer/addvolunteer/taaddvolunteer.html',
		url : '/taaddvolunteer',
		controller : "taaddvolunteerController"
	})
	
	
	.state('home.tamanagebacker', {
		templateUrl : 'tenantadmin/managebacker/tamanagebacker.html',
		url : '/tamanagebacker',
		controller : "tamanagebackerController"
	}).state('home.tamanagebacker.taaddbacker', {
		templateUrl : 'tenantadmin/managebacker/addbacker/taaddbacker.html',
		url : '/taaddbacker',
		controller : "taaddbackerController"
	})
	
	.state('home.tamanagepatient', {
		templateUrl : 'tenantadmin/managepatient/tamanagepatient.html',
		url : '/tamanagepatient',
		controller : "tamanagepatientController"
	}).state('home.tamanagepatient.taaddpatient', {
		templateUrl : 'tenantadmin/managepatient/addpatient/taaddpatient.html',
		url : '/taaddpatient',
		controller : "taaddpatientController"
	})
	
	.state('home.tamanageblog', {
		templateUrl : 'tenantadmin/manageblog/tamanageblog.html',
		url : '/tamanageblog',
		controller : "tamanageblogController"
	}).state('home.tamanageblog.taaddblog', {
		templateUrl : 'tenantadmin/manageblog/addblog/taaddblog.html',
		url : '/taaddblog',
		controller : "taaddblogController"
	})
}
