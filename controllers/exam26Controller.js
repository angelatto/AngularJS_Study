angular.module("app")
    .controller("exam26Controller", function($scope, exam26Service, $rootScope){
        // 경로 변경 후 이벤트 
        $scope.$on("$routeChangeSuccess", () => {
            $scope.getList(1); 
        });

        // 처음은 list 보여주게 함. 초기화 
        $scope.view = "list";

        // index.html에서 ng-include로 페이지 이동 
        $scope.getView = () => {
            console.log("getView가 언제마다 실행되는지 실험 ");
            // 여기서 리턴한는 것이 ng-include의 src 부분에 들어가서 페이지 이동댐 
            switch($scope.view){
                case "list": return "views/exam26_http_boards/list.html";
                case "create": return "views/exam26_http_boards/create.html";
                case "read": return "views/exam26_http_boards/read.html";
                case "update": return "views/exam26_http_boards/update.html";
            }
        };
        
        // 보드 폼 생성하기로 이동 
        $scope.createBoardForm = () => {
            console.log("createBoardForm() ");
            $scope.board = null; // 읽고 생성할 때 버그 제거 
            $scope.view = "create";
        };

        // 게시물 목록 - 페이지 이동 
        // 처음 list.html 로드할 때 한번은 자동으로 실행되어야 함. 
        $scope.getList = (pageNo) => {
           /* 서비스 객체의 list 메소드의 $http.get()은 promise를 리턴한다.  */
           exam26Service.list(pageNo)
            .then((response) => { // 비동기 통신이 응답하면 
                console.log(response);
                $scope.pager = response.data.pager;
                $scope.boards = response.data.boards;
                $scope.pageRange = [];
                for(var i=$scope.pager.startPageNo; i<$scope.pager.endPageNo; i++){
                    $scope.pageRange.push(i);
                }
                $scope.view = "list";
            });
        };

        // 게시물 읽기 - 상세페이지로 이동 
        $scope.read = (bno) => {
            console.log("read() 진입 ");
            exam26Service.read(bno)
                .then((response) => { // 비동기 통신 응답 
                    $scope.board = response.data;
                    $scope.view = "read";
                });
        };

        // read.html 
        $scope.battachUrl = (bno) => {
            return exam26Service.battachUrl(bno);
        };

        $scope.createBoard = (board) => {
            if(board && board.btitle && board.bcontent){
                var formData = new FormData();
                formData.append("btitle", board.btitle);
                formData.append("bcontent", board.bcontent);
                formData.append("bwriter", $rootScope.rootUid);

                // 파일 첨부 
                var battach = $("#battach")[0].files[0];
                if(battach){
                    formData.append("battach", battach);
                }
                exam26Service.create(formData)
                    .then((response) => {
                        $scope.getList(1);
                        $scope.view = "list";
                    });
                    // .catch((response) => {
                    //     con
                    // });
            }
        };

        $scope.cancel = () => {
            $scope.getList($scope.pager.pageNo);
            $scope.view = "list";
        };

        $scope.updateBoardForm = () => {
            $scope.view = "update";
          };
      
          $scope.updateBoard = (board) => {
            if(board.btitle && board.bcontent) {
              var formData = new FormData();
              formData.append("bno", board.bno);
              formData.append("btitle", board.btitle);
              formData.append("bcontent", board.bcontent);
              var battach = $("#battach")[0].files[0];
              if(battach) {
                formData.append("battach", battach);
              }
              exam26Service.update(formData)
                .then((response) => {
                  $scope.read(board.bno);
                  $scope.view = "list";
                });
            }
          };

        $scope.deleteBoard = (bno) => {
            exam26Service.delete(bno)
            .then((response) => {
                $scope.getList($scope.pager.pageNo);
                $scope.view = "list";
            });
           
        };
        
    });