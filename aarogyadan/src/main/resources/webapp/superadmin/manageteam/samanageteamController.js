'use strict';

angular.module('aarogyadanWebApp').controller('samanageteamController',
		samanageteamController);

function samanageteamController($scope, $rootScope, $state, dialogs,
		restAPIService, $location,$timeout) {
	$scope.tenantsData = [];
	$scope.batchData = [];
	$scope.parent = true;
	
	 $timeout(function () {
		 if($scope.tenantsData.length < 10) {
			 $('#manageTenantDataTable_paginate').attr("style","display:none;");
		 }
    }, 1000);
	 
	getTenants();
		
	function getTenants() {
			var promise1 = restAPIService.tenantsService().query();
			promise1.$promise.then(function(response) {
				$scope.tenantsData = response; 
			}, function(error) {
				dialogs.error("Error", error.data.error, {'size' : 'sm'});
			});
	}
	
	$scope.onEdit = function(tenant) {
		$scope.parent = false;
		$scope.mode = "edit";
		$scope.id = tenant.id;
		$state.go("home.samanageteam.saaddteam");
	}

	$scope.addNewTeam = function() {
		$scope.parent = false;
		$scope.mode = "add";
		$state.go("home.samanageteam.saaddteam");
	}
	
	$scope.onEnable = function(tenant) {
		
		var dlg = dialogs.confirm("Are you sure ?","Are you sure you wish to enable this member? All login accounts for this tenant will be enabled",{'size' : 'sm'});
		dlg.result.then(function(btn) {
			tenant.tenantStatus = "1";
			var promise = restAPIService.tenantService(tenant.id).update(tenant);
			promise.$promise.then(function(response) {
				dialogs.notify("Success",  "Member Enabled Sucessfully", {'size' : 'sm'});
				getTenants();
				$state.go('home.samanageteam');
			}, function(error) {
				dialogs.error("Error", error.data.error, {'size' : 'sm'});
			});
		}, function(btn) {
		});
		
	}
	
	$scope.onDisable = function(tenant) {
		var dlg = dialogs.confirm("Are you sure?","Are you sure you wish to disable this tenant? All login accounts for this tenant will be disabled",{'size' : 'sm'});
		dlg.result.then(function(btn) {
			tenant.tenantStatus = "0";
			var promise = restAPIService.tenantService(tenant.id).update(tenant);
			promise.$promise.then(function(response) {
				dialogs.notify("Success",  "Member Disabled Sucessfully", {'size' : 'sm'});
				getTenants();
				$state.go('home.samanageteam');
			}, function(error) {
				dialogs.error("Error", error.data.error, {'size' : 'sm'});
			});
		}, function(btn) {
		});

	}
	
	$scope.onDelete = function(tenant) {
		var dlg = dialogs.confirm("Are you sure?","Are you sure you wish to delete this member?", {'size' : 'sm'});
		dlg.result.then(function(btn) {
			var promise2 = restAPIService.tenantService(tenant.id).remove();
			promise2.$promise.then(function(response) {
				dialogs.notify("Success", response.success, {'size' : 'sm'});
				$state.reload();
			}, function(error) {
				dialogs.error("Error", error.data.error, {'size' : 'sm'});
			});
		}, function(btn) {
		});
	}

	$scope.onReset = function(tenant) {
		tenant.tenantPassword = "admin";
		var promise = restAPIService.tenantService(tenant.id).get();
		promise.$promise.then(function(response) {
			var reset = restAPIService.tenantResetService(tenant.id).update();
			reset.$promise.then(function(response) {
				dialogs.notify("Success",  response.success, {'size' : 'sm'});
				getTenants();
				$state.go('home.samanageteam');
			}, function(error) {
				dialogs.error("Error",error.data.error, {'size' : 'sm'});
			});

		}, function(error) {
			dialogs.error("Error", error.data.error, {'size' : 'sm'});
		});
	}

}
