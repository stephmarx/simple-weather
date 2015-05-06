// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require angular

var myApp = angular.module("myApp", []);

var myCtrl = myApp.controller("myCtrl",["$scope", "$http", function($scope, $http) {
	$http.get('/api/v1/location/60626.json').success(function(response) {console.log(response);});

}]);


myApp.directive("zipValidation", function () {
  return {
    restrict: "A",
    require: "ngModel",
    link: function (scope, element, attr, myCtrl) {
      var zipVal = function (value) {
        if (/^\d{5}$/.test(value)) {
            return value;
        }

        return undefined;
      }

      myCtrl.$parsers.push(zipVal);
      myCtrl.$formatters.push(zipVal);

	    element.bind("blur", "$http", function ($http) {
        var value = zipVal(element.val());
        var isValid = !!value;
        myCtrl.$setValidity("zip", isValid);

        if (isValid) {
        	console.log(value);
        };
        scope.$apply();
				// $http.get('/api/v1/location/60626.json').success(function(response) {console.log(response);});

	    });
    }
  };
});


// '/api/v1/location/' + zip + '.json'