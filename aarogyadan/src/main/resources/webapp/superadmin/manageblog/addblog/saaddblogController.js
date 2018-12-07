'use strict';

angular.module('aarogyadanWebApp')
	.controller('saaddblogController', saaddblogController);

function saaddblogController($scope,$rootScope,$state,dialogs,restAPIService,$location){
	$scope.blog={
			blogTitle : "",
			blogWriter : "",
			blogDate : "",
			blogData : ""
			}
	
	
	$scope.blog.blogDate = ""+new Date();
	
	$scope.blogTitleValid = false;
	$scope.blogTitleSuccess = false;
	$scope.blogTitleError = false;
	$scope.blogTitleFeedback = "";
	
	$scope.blogWriterValid = false;
	$scope.blogWriterSuccess = false;
	$scope.blogWriterError = false;
	$scope.blogWriterFeedback = "";
	
	
	
	$scope.blogDataValid = false;
	$scope.blogDataSuccess = false;
	$scope.blogDataError = false;
	$scope.blogDataFeedback = "";
	
	if($scope.mode=="edit"){
		$scope.heading = "Edit Blog";
		$scope.editMode = true;
		var id = Number($scope.id);
//		var promise1 = restAPIService.blogService(id).get();
//		promise1.$promise.then(
//			function (response) {
//				$scope.blog=response;
//				$scope.blogRePassword = $scope.blog.blogPassword
//				$scope.blog.phone1 = Number($scope.blog.phone1)
//				if($scope.blog.phone2)
//					$scope.blog.phone2 = Number($scope.blog.phone2)
//		    },
//		    function(error){
//		    	dialogs.error("Error", error.data.error, {'size': 'sm' });
//		    }
//		);
	} else {
		$scope.heading = "Add New Blog";
		$scope.editMode = false;
	}
	
	$scope.addBlog = function() {
//		if($scope.mode=="edit"){
//			var promise = restAPIService.blogService($scope.blog.id).update($scope.blog);
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
			var promise = restAPIService.blogsService().save(null,$scope.blog);
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
	
	$scope.cancelAddBlog = function() {
		$state.reload();
	}

	$scope.validBlogName = function(valid){
		$scope.blogTitleValid = valid;
		if($scope.blog.blogTitle != undefined) {
			if($scope.blog.blogTitle.length <= 0) {
				$scope.blogTitleError = true;
				$scope.blogTitleFeedback = "has-error has-feedback";
			} else {
				$scope.blogTitleSuccess = true;
				$scope.blogTitleError = false;
				$scope.blogTitleFeedback = "has-success has-feedback";
			}
		} else {
			$scope.blogTitleError = true;
			$scope.blogTitleSuccess = false;
			$scope.blogTitleFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validBlogData = function(valid){
		$scope.blogDataValid = valid;
		if($scope.blog.blogData != undefined) {
			if($scope.blog.blogData.length <= 0) {
				$scope.blogDataSuccess = false;
				$scope.blogDataError = true;
				$scope.blogDataFeedback = "has-error has-feedback";
			} else {
				$scope.blogDataSuccess = true;
				$scope.blogDataError = false;
				$scope.blogDataFeedback = "has-success has-feedback";
			}
		} else {
			$scope.blogDataError = true;
			$scope.blogDataSuccess = false;
			$scope.blogDataFeedback = "has-error has-feedback"; 
		}
	}
	
	$scope.validBlogWriter = function(valid){
		$scope.blogWriterValid = valid;
		if($scope.blog.blogWriter != undefined) {
			if($scope.blog.blogWriter.length <= 0) {
				$scope.blogWriterSuccess = false;
				$scope.blogWriterError = true;
				$scope.blogWriterFeedback = "has-error has-feedback";
			} else {
				$scope.blogWriterSuccess = true;
				$scope.blogWriterError = false;
				$scope.blogWriterFeedback = "has-success has-feedback";
			}
		} else {
			$scope.blogWriterError = true;
			$scope.blogWriterSuccess = false;
			$scope.blogWriterFeedback = "has-error has-feedback"; 
		}
	}
	
}
