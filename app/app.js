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
