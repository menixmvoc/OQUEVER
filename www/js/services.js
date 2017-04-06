angular.module('starter.services', [])

.factory('Context', function(){
   var config = {
    apiKey: "AIzaSyDdJfPN8bV-Ku8aBH6hRRTH8H4WPfZAr3o",
    authDomain: "oquever-ac792.firebaseapp.com",
    databaseURL: "https://oquever-ac792.firebaseio.com",
    storageBucket: "oquever-ac792.appspot.com",
    messagingSenderId: "238109741892"
  };
  firebase.initializeApp(config);
  return{
      get: function() {
        return firebase;
      }
  }
})
.factory('Login', function(Context){
  
  return{
    login: function(email, senha, callback){
      firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(function(){
        callback();

      })
      .catch(function(error){
        callback(error);

      });

    },
     novo: function(email, senha, callback){
       firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(function(){
          callback();

        })
        .catch(function(error){
          callback(error);


      });
     }

  };
})
.factory('Perfil', function(Context){
  return{
    getUsuario: function() {
      return firebase.auth().currentUser;
    },
    getTodos: function(callback){
      firebase.database().ref('perfil').on('value', function(snapshot){
       callback(snapshot.val());
      }) 
    },
    get: function(usuario, callback){
      firebase.database().ref('perfil/' + usuario).on('value', function(snapshot){
       callback(snapshot.val());
      }) 
    },
    salvar: function(usuario, generos, email) {
        firebase.database().ref('perfil/' + usuario).set({
          email: email,
          generos : generos
        });
    }
  }
})
.factory('Filme', function(Context){
return{
  get: function(callback){
    firebase.database().ref('filme').on('value', function(snapshot) {
        callback(snapshot.val());
      })  
    },
  salvarFilme: function(imagem, nomeDoFilme, descricao, genero, callback) {
      var filmeRef = firebase.database().ref('filme').push();
      filmeRef.set({
        imagem: imagem,
        nomeDoFilme: nomeDoFilme,
        descricao: descricao,
        genero: genero          
      })
      .then(function() {
        callback();
      });
  }
}
})



 
