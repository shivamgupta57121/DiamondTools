var app = angular.module('app',['ui.router']);

app.config(['$stateProvider',function($stateProvider){

    $stateProvider.state('firstpage',{
        url:'/products',
        templateUrl:'/product.html',
       

    })
    .state('sign',{
        url:'/sign',
        templateUrl:'/sign.html',
       

    }).state('sign1',{
        url:'/sign1',
        templateUrl:'/sign1.html',
       

    })
    .
    state('contact',{
        url:'/contact',
        templateUrl:'/contact.html',
       

    })
    
    
    .state('noroute',{
            url:'',
            templateUrl:'/initiall.html'

    })


}]);

