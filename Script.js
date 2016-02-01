var myapp = angular.module("myModule", []);

var fun = function () {
    var self = this;
    self.name = "someName";
    self.$get = function () {
        //this.name = "New Name";
        return " Default fun.$get(). this.name = " + this.name;
    };
    return "fun().  self.name = " + self.name;
};

myapp.service('serviceExample', fun);
myapp.provider('providerExample', fun);
myapp.factory('factoryExample', fun);

myapp.controller('ModuleController', function($scope,serviceExample,providerExample, factoryExample){
    $scope.service  = " the service is actual function value = " + serviceExample;  
    $scope.factory  = "the factory is the function return type = " + factoryExample;
    $scope.provider  = " the provider is proivder $get = " + providerExample;
});