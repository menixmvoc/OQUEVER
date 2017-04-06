
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

.controller('Cadastro2Ctrl', function($scope, $state, $stateParams, Perfil) {
  $scope.usuario = '';
  $scope.sexo = '';
  $scope.generos = {};

 $scope.salvarPerfil = function(usuario, generos) {
   
      Perfil.salvar(usuario, generos, $stateParams.email)
      $state.go("inicio.film");  
  }
   $scope.abrirGaleria = function(){
      alert("abrirGaleria")
    }
})
  .controller('PerfilCtrl', function($scope,$state, Perfil){
    $scope.irCadastro = function(){
        var email = Perfil.getUsuario().email
       $state.go("cadastro2", {email: email});
       
    }
  } )
  .controller('CadastroFilmeCtrl', function($scope, Filme){
    $scope.imagem ='';
    $scope.nomeDoFilme ='';
    $scope.genero ='';
    $scope.descricao ='';
    $scope.cadastrarFilme = function(imagem, nomeDoFilme, genero, descricao){
      alert("salvou")
      Filme.salvarFilme(imagem, nomeDoFilme, genero, descricao, function(){
        alert("salvou")
      })
    }
  })
  .controller('FilmCtrl', function($scope, Filme){
    $scope.filmes = [];

    Filme.get(function(filmes){
      $scope.filmes = converterObjParaArray(filmes);
    })
  })

function converterObjParaArray (obj) {
  var array = [];
  for (var key in obj) {
    obj[key].id = key;
    array.push(obj[key]);
  }
  return array;
}


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