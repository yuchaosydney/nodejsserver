/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	angular.module('app',[])
	  .controller('PasswordController', function PasswordController($scope){
	    $scope.password = '';
	    $scope.grade = function() {
	      var size = $scope.password.length;
	      if (size > 8) {
	        $scope.strength = 'strong';
	      } else if (size > 3) {
	        $scope.strength = 'medium';
	      } else {
	        $scope.strength = 'weak';
	      }
	    };
	});

	angular.module('app')
	  .filter('length', function(){
	    return function(text){
	      return ('' + (text || '')).length; 
	    } 
	  });

	angular.module('app')
	  .directive('aGreatEye', function(){
	    return {
	      restrict: 'E',
	      replace: true,
	      template: '<h1>lidless, wreathed in flame, {{1 + 1}} times</h1>'
	    }; 
	  });


/***/ })
/******/ ]);