angular
  .module("app")
  .controller("exam25Controller", function ($scope, exam25Service, $rootScope) {
    // 경로 변경 후 이벤트
    $scope.$on("$routeChangeSuccess", () => {
      $scope.getList(1);
    });

    // 처음은 list 보여주게 함. 초기화
    $scope.view = "list";

    // index.html에서 ng-include로 페이지 이동
    $scope.getView = () => {
      // 여기서 리턴한는 것이 ng-include의 src 부분에 들어가서 페이지 이동댐
      switch ($scope.view) {
        case "list":
          return "views/exam25_http_products/list.html";
        case "create":
          return "views/exam25_http_products/create.html";
        case "read":
          return "views/exam25_http_products/read.html";
        case "update": 
          return "views/exam25_http_products/update.html";
      }
    };

    // 게시물 목록 - 페이지 이동
    // 처음 list.html 로드할 때 한번은 자동으로 실행되어야 함.
    $scope.getList = (pageNo) => {
      /* 서비스 객체의 list 메소드의 $http.get()은 promise를 리턴한다.  */
      exam25Service
        .list(pageNo)
        .then((response) => {
          // 비동기 통신이 응답하면
          console.log("here i am 2");

          $scope.pager = response.data.pager;
          $scope.products = response.data.products;
          $scope.pageRange = [];
          for (
            var i = $scope.pager.startPageNo;
            i < $scope.pager.endPageNo;
            i++
          ) {
            $scope.pageRange.push(i);
          }
          $scope.view = "list";
        })
        .catch((response) => {
          console.log("333");
        });
    };

    // 폼 생성하기로 이동
    $scope.createProductForm = () => {
      console.log("createProductForm() ");
      $scope.product = null; // 읽고 생성할 때 버그 제거
      $scope.view = "create";
    };
    // 취소 버튼 눌렀을 때
    $scope.cancel = () => {
      $scope.getList($scope.pager.pageNo);
      $scope.view = "list";
    };
    // 등록 버튼 눌렀을 때
    $scope.createProduct = (product) => {
      if (product && product.name && product.description && product.category && product.price) {
        var jsonData = {
          name: product.name,
          description: product.description,
          category: product.category,
          price: product.price,
        };
        exam25Service.create(jsonData).then((response) => {
          $scope.getList(1);
          $scope.view = "list";
        });
      }
    };

    // 리스트에서 제목 눌렀을 때
    $scope.read = (pid) => {
      console.log("read() 진입 ");
      exam25Service.read(pid).then((response) => {
        // 비동기 통신 응답
        $scope.product = response.data;
        $scope.view = "read";
      });
    };

    // read페이지에서 수정 버튼 눌렀을 때
    $scope.updateProductForm = () => {
        $scope.view = "update";
    };

    $scope.updateProduct = (product) => {
        if (product && product.name && product.description && product.category && product.price) {
            var jsonData = {
                pid: product.pid,
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
            };

            exam25Service.update(jsonData)
            .then((response) => {
                $scope.read(product.pid);
                $scope.view = "list";
            });
        }
    };

    // read페이지에서 삭제 버튼 눌렀을 때
    $scope.deleteProduct = (pid) => {
      exam25Service.delete(pid).then((response) => {
        $scope.getList($scope.pager.pageNo);
        $scope.view = "list";
      });
    };
  });
