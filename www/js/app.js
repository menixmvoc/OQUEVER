
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
        controller: 'LoginCtrl'
      }
    }
  })
   .state('cadastro', {
    url: '/cadastro',
    views:{
      'view-inicial': {
        templateUrl: 'templates/cadastro.html',
         controller: 'LoginCtrl'
      }
    }
  })
  .state('cadastro2', {
    url: '/cadastro2/:email',
    views:{
      'view-inicial': {
        templateUrl: 'templates/cadastro2.html',
         controller: 'Cadastro2Ctrl'
      }
    }
  })
 .state('inicio', {
    url: '/inicio',
    abstract: true,
    views:{
      'view-inicial': {
        templateUrl: 'templates/inicio.html',
         controller: 'InicioCtrl'
      }
    }
  })
  .state('inicio.film', {
    url: '/film',
    views: {
      'inicio-filmes': {
        templateUrl: 'templates/film.html'
      }
    }
  })
   .state('inicio.series', {
    url: '/series',
    views: {
      'inicio-series': {
        templateUrl: 'templates/series.html'
      }
    }
  });



  
  $urlRouterProvider.otherwise('/login');

});
