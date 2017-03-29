
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
        templateUrl: 'templates/inicio.html'
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
  })
   .state('inicio.perfil', {
    url: '/perfil',
    views: {
      'inicio-perfil': {
        templateUrl: 'templates/perfil.html',
        controller: 'PerfilCtrl'
      }
    }
  })
 .state('inicio.batepapo',{
    url: '/batepapo',
    views: {
      'inicio-perfil': {
        templateUrl: 'templates/batepapo.html'
      }
    }
  })
  .state('inicio.curtido',{
    url: '/curtido',
    views: {
      'inicio-perfil': {
        templateUrl: 'templates/curtido.html'
      }
    }
  })
  .state('inicio.seguidores',{
    url: '/seguidores',
    views: {
      'inicio-perfil': {
        templateUrl: 'templates/seguidores.html'
      }
    }
  }); 



  
  $urlRouterProvider.otherwise('/login');

});
