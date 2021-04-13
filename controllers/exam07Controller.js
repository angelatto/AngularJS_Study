// 메인 모듈인 app을 가져온다. 
angular.module("app")
    .controller("exam07Controller", function($scope){
        console.log("exam07Controller instanciation (객체 생성 시점 확인)");
        $scope.controllerName = "exam07Controller";
        /* 배열로 가져온다. 이 안의 하나의 요소는 객체로 이루어짐. */
        $scope.todos = [
            {action: "동영상 녹화", complete: false},
            {action: "앵귤러JS 복습", complete: false},
            {action: "알마인드", complete: false}
        ];

        // 1. 뷰에서 생성된 객체를 파라미터로 직접 넘겨줌 
        $scope.addNewItem1 = (newTodo) => {  
            if(newTodo && newTodo.action && newTodo.location){
                $scope.todos.push({
                    action: newTodo.action + "(" + newTodo.location + ")",
                    complete: false
                }); // 배열에 데이터 넣을 때 푸시 메소드 이용 
                newTodo.action = ""; // 초기화 
                newTodo.location = ""; // 초기화 
            }else{
                console.log("올바르게 입력되지 않았음");
            }
        };

        // 2. $scope에 자동으로 생성되어 저장된 객체를 불러옴
        $scope.addNewItem2 = () => {
            if($scope.newTodo && $scope.newTodo.action && $scope.newTodo.location){
                $scope.todos.push({
                    action: $scope.newTodo.action + "(" + $scope.newTodo.location + ")",
                    complete: false
                }); 
                $scope.newTodo.action = "";
                $scope.newTodo.location = "";
            }else{
                console.log("올바르게 입력되지 않았음");
            }
        };
    });