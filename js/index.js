var myApp=angular.module("myApp",[]);

myApp.controller("myController",function($scope,$http){

$scope.orderByField = 'restaurant.name';
  $scope.reverseSort = false;

    $scope.getImages=function(image){
    $scope.imageResults=[];
    console.log(image);
    if(image==undefined){
      alert('Enter City name')
    }
    else{
      var params={image:image}
      $("#tablePreloader").show();
      $http({
        "url":"http://localhost:8081/getImages",
        "method":"POST",
        "params":params
      }).then(function (response) {
        console.log(response.data.data)
        if(response.data.data.length>0){
         $("#tablePreloader").hide();
         $scope.imageResults  = response.data.data;
        }
      })
    }

  }

  $scope.getSearchData=function() {
    $("#modalPreloader").show();
    $http({
      "url":"http://localhost:8081/getSearchData",
      "method":"GET",
    }).then(function (response) {
      console.log(response.data)
      $("#modalPreloader").hide();
      $scope.history=response.data;
    })
  }

  $scope.showSearchData = function(history){
    $scope.historyData  = history.data;
    $('#modal1').modal('open');
    console.log($scope.historyData);
  }
});