// 메인 모듈인 app을 가져온다. 
angular.module("app")
    .controller("exam10Controller", function($rootScope, $scope){
        console.log("exam10Controller instanciation (객체 생성 시점 확인)");
        $scope.btnDisabled = true;
        
        // 하나의 속성값을 감시할 경우 
        $scope.$watch("user.password1", (newPassword1) => {
            console.log("password1 변경 값: ", newPassword1);
            if($scope.user && newPassword1 && $scope.user.password2){
                if($scope.user.password2 === newPassword1){
                    $scope.btnDisabled = false;
                }else{
                    $scope.btnDisabled = true;
                }
            }else{
                $scope.btnDisabled = true;
            }
        });
        $scope.$watch("user.password2", (newPassword2) => {
            console.log("password2 변경 값: ", newPassword2);
            if($scope.user && $scope.user.password1 && newPassword2){
                if($scope.user.password1 === newPassword2){
                    $scope.btnDisabled = false;
                }else{
                    $scope.btnDisabled = true;
                }
            }else{
                $scope.btnDisabled = true;
            }
        });

        // 객체의 모든 속성값들을 감시 
        $scope.$watchCollection("user", (newUser) => {
            console.log("user 변경 값: ", newUser);
            if(newUser && newUser.password1 && newUser.password2){
                if(newUser.password1 === newUser.password2){
                    $scope.btnDisabled = false;
                }else{
                    $scope.btnDisabled = true;
                }
            }else{
                $scope.btnDisabled = true;
            }
        });
    });