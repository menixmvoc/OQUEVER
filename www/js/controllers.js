
 angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, Login) {
  $scope.email = '';
  $scope.senha = '';

  $scope.fazerLogin = function(email, senha) {
    Login.login(email, senha, function(erro) {
      alert(erro);
        if (erro) {
          alert(erro);
         }else {
           $state.go("inicio.film");
         }
    });
  }

  $scope.novoCadastro = function(email, senha) {
    Login.novo(email, senha, function(erro) {
      if (!erro) {
        $state.go("cadastro2", {email: email}); 
      }
    });
  }
 
})

.controller('Cadastro2Ctrl', function($scope, $stateParams, Perfil) {
  $scope.usuario = '';
  $scope.sexo = '';
  $scope.generos = {};

 $scope.salvarPerfil = function(usuario, sexo, generos) {
   
      Perfil.salvar(usuario, sexo, generos, $stateParams.email)
      //$state.go("inicio.film"); 
    
  }
})
  .controller('InicioCtrl', function(){} )


 /* $scope.generosPadrao = [
    'Ação',
    'Animação',
    'Aventura',
    'Cinema catástrofe',
    'Comédia',
    'Comédia romântica',
    'Comédia dramática',
    'Comédia de ação',
    'Dança',
    'Documentários',
    'Drama',
    'Espionagem',
    'Fantasia',
    'Faroeste',
    'Ficção científica',
    'Guerra',
    'Musical',
    'Policial',
    'Suspense',
    'Terror'
  ];*/