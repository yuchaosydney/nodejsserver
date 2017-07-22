describe('PasswordController', function() {
  
  beforeEach(angular.mock.module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.grade', function(){
    
    var $scope, controller;

    beforeEach(function(){
      $scope = {};
      controller = $controller('PasswordController', {$scope: $scope});
    });
    
    it('sets the strength to "strong" if the password length is >8 chars', function(){

      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');;
      
    });
    
    it('sets the strength to "weak" if the password length <3 chars', function() {
      
      $scope.password = 'a';
      $scope.grade();
      expect($scope.strength).toEqual('weak');
    
    });

  });

  describe('length filter', function(){
  
    var length,$filter;

    beforeEach(inject(function(_$filter_){
      $filter = _$filter_;
      length = $filter('length');
    }));

    it('returns 0 when given null', function(){
      expect(length(null)).toEqual(0);
    });

    it('returns correct value when given a string of chars',function(){
      expect(length('abc')).toEqual(3);;
    });

  });

  describe('Unit testing great quotes', function(){
    var $compile,
      $rootScope;
    
    beforeEach(inject(function(_$compile_, _$rootScope_){
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    it('Replaces the element with appropriate content', function(){
    
      var element = $compile("<a-great-eye></a-great-eye>")($rootScope);
      $rootScope.$apply();

      expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
    });

  });

});
