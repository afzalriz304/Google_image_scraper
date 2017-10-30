var myApp=angular.module("myApp",[]);

myApp.controller("myController",function($scope,$http){

$scope.orderByField = 'restaurant.name';
  $scope.reverseSort = false;

    $scope.getImages=function(image){
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
        console.log(response.data)
        if(response.data.length>0){
         $("#tablePreloader").hide();
         $scope.imageResults  = response.data;
        }
        /*$("#tablePreloader").hide();
        $scope.resturantList=response.data.nearby_restaurants;
        $scope.city=response.data.location.city_name+","+response.data.location.country_name*/
      })
    }

  }

  $scope.getRestaurantDetails=function(res_id) {
    console.log(res_id);
    var params={res_id:res_id}
    $("#modalPreloader").show();
    $http({
      "url":"",
      "method":"POST",
      "params":params
    }).then(function (response) {
      console.log(response.data)
      $("#modalPreloader").hide();
      $scope.restaurant=response.data;
    })
  }
});