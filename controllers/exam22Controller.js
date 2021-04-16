// 메인 모듈인 app을 가져온다. 
angular.module("app")
    .controller("exam22Controller", function($scope){   
        $scope.products = [
            {pno:1, name:"사과", category:"과일", price:2000.123, expiry:10},
            {pno:2, name:"오징어", category:"해산물", price:10000.56, expiry:2},
            {pno:3, name:"복분자", category:"주류", price:1500, expiry:5},
            {pno:4, name:"오렌지", category:"과일", price:4000, expiry:21},
            {pno:5, name:"사케", category:"주류", price:2000, expiry:11},
            {pno:6, name:"키조개", category:"해산물", price:1500, expiry:2},
            {pno:7, name:"꽁치", category:"해산물", price:20000, expiry:6},
            {pno:8, name:"포도", category:"과일", price:5000, expiry:4},
            {pno:9, name:"귤", category:"과일", price:4300, expiry:2}
        ];
        
        $scope.limitRange = [3, 5, 7, 9];
        $scope.limitVal = "5";

        $scope.getExpiryDate = (days) => {
            var now = new Date();
            return now.setDate(now.getDate() + days);
        };

        $scope.categoryList = ["전체", "과일", "해산물", "주류"];
        $scope.categoryVal = "전체";
        $scope.getCategoryVal = () => {
            return $scope.categoryVal === "전체"? "" : $scope.categoryVal;
        };

        $scope.checkFiltering = (product) => { // 복잡한 조건 필터링 
            const result = (product.category === "과일") && (product.price > 2000);
            return result;
        };
});
