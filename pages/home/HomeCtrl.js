/**
*/

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', 'jrgFacebookAuth', function($scope, jrgFacebookAuth) {
	var fbAppId;
	fbAppId ='195380783916970';		//hardcoded - localhost
	fbAppId ='1414630222101442';	//hardcoded - github.io
	
	//initialize with facebook app id
	jrgFacebookAuth.init({'fbAppId':fbAppId, 'fbPerms':'email,user_birthday,offline_access,publish_stream'});

	//do actual login
	var evtFBLogin ="evtFBLogin";
	$scope.fbLogin =function() {
		jrgFacebookAuth.login({'callback':{'evtName':evtFBLogin, 'args':[]} });
	};
	
	$scope.vals;
	// @param {Object} fbCookie
		// @param {String} accessToken
		// @param {String} userID
	$scope.$on(evtFBLogin, function(evt, fbCookie) {
		$scope.vals ={'facebook_id':fbCookie.userID, 'access_token':fbCookie.accessToken};
		//do stuff here
	});
}]);