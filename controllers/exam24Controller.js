// 메인 모듈인 app을 가져온다. 
angular.module("app")
    .controller("exam24Controller", function($scope, $window, $document, 
                          $interval, $location, $routeParams,
                          $anchorScroll, $log){ // 서비스는 주입될 수 있다. 
      $scope.openAlert = () => {
        $window.alert("알림 메세지..."); // window.alert() == alert() == $window.alert()
      };

      $scope.findDom = () => {
        // $("#content").html("Hello, AngularJS"); ==  document.querySelctor()
        $document.find("#content").html("Hello, AngularJS"); 
      };

      $scope.data = "xxx"; // 순수 앵큘러 영역 
     
      let timerId;
      $scope.startTime = () => {
         // BOM에서 제공하는 window 객체 , 앵귤러가 관여하지 않는다. 
        //  window.setTimeout(() => {
        //   $scope.data = "yyy"; // 이게 안될 수 있다. 
        // }, 3000);
        timerId = $interval(() => {  // timeout vs interval 
          var now = new Date();
          $document.find("#content").html(now.toLocaleDateString() + " " + now.toLocaleTimeString());
        }, 1000);
      };

      $scope.endTime = () => {
        if(timerId) {
          $interval.cancel(timerId);
        }
      };

      $scope.changePage1 = (pageNo) => {
        const path = `/exam24_builtin_service/boards?pageNo=${pageNo}#bottom`; // #bottom은 해쉬 이다. 
        //"/exam24_builtin_service/boards?pageNo="+pageNo;
        $location.url(path);
      };

      $scope.changePage2 = (bno, pageNo) => {
        const path = `/exam24_builtin_service/boards/${bno}?pageNo=${pageNo}#bottom`; // #bottom은 해쉬 이다. 
        $location.url(path);
      };

      //url이 완전하게 변경이 되었을 때 발생하는 이벤트, 콜백 핸들러 등록 
      $scope.$on("$locationChangeSuccess", () => {
        console.log("url이 변경됨 ");
        console.log("$location.url(): ", $location.url());
        console.log("$location.path(): ", $location.path());
        console.log("$location.search(): ", $location.search());
        console.log("$location.hash(): ", $location.hash());
        console.log("$routeParams: ", $routeParams);

        // 이 라우트파람 서비스를 이용해서 요청 파라미처의 값 뿐만 아니라 경로 변수의 값도 알아낼 수 있다.
        const bno = $routeParams.bno;
        const pageNo = $routeParams.pageNo;
      });

      $scope.items = [];
      for(var i=0; i<50; i++){
        $scope.items.push("Item " + i);
      }

      $scope.show = (id) => {
        $anchorScroll(id);
        /*
          1. 컨트롤에 $anchorScroller이 주입되어 있고 && 
          2. 요청 URL에 해시로 #bottom이 지정되어 있으면 
          => 따로 메소드로 써주지 않아도 로드될 때 자동으로 그곳으로 이동한다. 
         */
      };

      $scope.handlePrintLog = () => {
        $log.error("error message");
        $log.warn("warn message");
        $log.info("info message");
        $log.debug("debug message");
      };


    });
