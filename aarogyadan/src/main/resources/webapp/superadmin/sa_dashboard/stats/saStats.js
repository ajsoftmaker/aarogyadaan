'use strict';

angular.module('aarogyadanWebApp')
    .directive('saStats',function() {
    	return {
  		templateUrl:'superadmin/sa_dashboard/stats/stats.html',
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
