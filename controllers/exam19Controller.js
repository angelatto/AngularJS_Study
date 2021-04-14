// 메인 모듈인 app을 가져온다. 
angular.module("app")
.controller("exam19Controller", function($scope){
    $scope.imageName = "photo5.jpg";

    $scope.handleBtnClick = (event) => {
        if($scope.imageName === "photo1.jpg"){
            $scope.imageName = "photo2.jpg";
        }else{
            $scope.imageName = "photo1.jpg";
        }
    };

    $scope.todos = [
        {action: "동영상 녹화", complete: false},
        {action: "앵귤러JS 복습", complete: false},
        {action: "알마인드", complete: false},
        {action: "밥먹기", complete: false}
    ];

    $scope.handleMouseEvent = (event) => {
        console.log("event type: " + event.type);
        console.log("event target: " + event.target); // 타겟이 td -> 부모가 tr 
        if(event.type === "mouseenter"){
            $(event.target).parent("tr").css("background-color", "#e9ecef");
        }else{
            $(event.target).parent("tr").css("background-color", "#ffffff");
        }
    };
});