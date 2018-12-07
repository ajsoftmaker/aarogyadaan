'use strict';

angular.module('aarogyadanWebApp')
    .directive('taStats',function() {
    	return {
  		templateUrl:'tenantadmin/ta_dashboard/stats/stats.html',
  		restrict:'E',
  		replace:true,
  		scope: {
        'model': '=',
        'comments': '@',
        'number': '@',
        'name': '@',
        'colour': '@',
        'details':'@',
        'type':'@',
        'goto':'@'
  		}
  		
  	}
  });
