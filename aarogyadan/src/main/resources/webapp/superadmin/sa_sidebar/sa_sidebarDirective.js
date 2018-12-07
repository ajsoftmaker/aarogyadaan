'use strict';

angular.module('aarogyadanWebApp')
  .directive('saSidebarDirective', saSidebarDirective);

function saSidebarDirective() {
	
	var sidebar = {};
	sidebar.templateUrl = 'superadmin/sa_sidebar/sa_sidebar.html';
	sidebar.restrict = 'E';
	sidebar.controller = saSidebarController;
	
	return sidebar;
}