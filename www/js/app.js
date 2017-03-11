
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
  
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  
  $stateProvider
   .state('login', {
    url: '/login',
    views:{
      'view-inicial': {
        templateUrl: 'templates/login.html',
        controller: 'DashCtrl'
      }
    }
  })
   .state('cadastro', {
    url: '/cadastro',
    views:{
      'view-inicial': {
        templateUrl: 'templates/cadastro.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tarefas', {
    url: '/tarefas',
    views:{
      'view-inicial': {
        templateUrl: 'templates/tarefas.html',
        controller: 'DashCtrl'
      }
    }
  });

  
  $urlRouterProvider.otherwise('/login');

});
