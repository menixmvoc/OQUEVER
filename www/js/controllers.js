
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
           $state.go("tarefas");
         }
    });
  }

  $scope.novoCadastro = function(email, senha) {
    Login.novo(email, senha, function(erro) {
      alert(erro)
      $state.go("cadastro2"); 
      
    });
  }
 
})

.controller('Cadastro2Ctrl', function($scope, $state, Perfil) {
  $scope.usuario = '';
  $scope.sexo = '';
  $scope.genero = '';

 $scope.salvarPerfil = function(usuario, sexo, genero) {
   
      $state.go("inicio"); 
    
  }
})
  .controller('InicioCtrl', function(){} )