/**
 * Created by jimmy on 28/01/16.
 */

var model = {
    user: "Jimmy"
};

var todoApp = angular.module('appList',[]);

todoApp.run(function($http){

    $http.get("todo.json").success(function(data){

        model.items = data;

    })

});

todoApp.filter("ItemsChequeados",function(){

    return function(items,showComplete){
        var resultArr = [];

        angular.forEach(items, function(item){
            if(item.done == false || showComplete == true){
                resultArr.push(item);
            }
        });
        return resultArr;
    }
});


todoApp.controller("ToDoCtrl",function($scope){

    $scope.todo = model;

    $scope.incompleteCount = function () {
        var count = 0;
        angular.forEach($scope.todo.items, function (item) {
            if (!item.done) {
                count++
            }
        });
        return count;
    }

    $scope.warningLevel = function(){
        return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
    }

    //add new items
    $scope.addNewItem = function(actionText){

        $scope.todo.items.push({
            action: actionText,
            done: false
        });

    }
});

