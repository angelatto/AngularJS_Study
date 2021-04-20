angular.module("app")
    .controller("exam27Controller", function($scope, exam27Service, $window, $rootScope, $location){
        $scope.login = (user) => {
            exam27Service.login(user)
                .then((response) => {
                    $rootScope.rootUid = response.data.uid;
                    $rootScope.authToken = response.data.authToken;   

                    // 세션 스토리지 저장 
                    sessionStorage.setItem("uid", $rootScope.rootUid);
                    sessionStorage.setItem("authToken", $rootScope.authToken);
                   
                    $location.url("/");
                })
                .catch((response) => {
                    $window.alert("로그인 실패 ");
                });
        };

    });

