'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ["$scope", function ($scope) {

        $scope.btnLogin = function () {

            // db
            if($scope.email === "toyongyeon@naver.com" && $scope.pwd === "1234")
            {
                //token, session
                alert("로그인 성공");
                location.href = "#/view2";
            } else {
                alert("실패");
                $scope.email = "";
                $scope.pwd = "";
            }

        };


    }]);