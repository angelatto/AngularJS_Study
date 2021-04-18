// 메인 모듈인 app을 가져온다. 
angular.module("app")
    .controller("exam23Controller", function($scope, 
                                        counterServiceByFactory, 
                                        counterServiceByService,
                                        counterServiceByProvider){   
      $scope.addCount = () => {
        counterServiceByFactory.addCount();
        counterServiceByService.addCount();
        counterServiceByProvider.addCount();
      };

      $scope.getCount1 = () => {
        return counterServiceByFactory.getCount();
      };

      $scope.getCount2 = () => {
        return counterServiceByService.getCount();
      };

      $scope.getCount3 = () => {
        return counterServiceByProvider.getCount();
      };

  
});
