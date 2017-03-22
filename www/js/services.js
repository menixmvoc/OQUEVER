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
    get: function(callback){
     firebase.database().ref('Perfil').on('value', function(snapshot){
       callback(snapshot.val());
     }) 
    },
    salvar: function(usuario, sexo, genero){
      alert(usuario)
       var cadastro2 = {
      usuario: usuario,
      sexo: sexo,
      genero: genero
       };
       firebase.database().ref('usuarios').set(cadastro2);

    }
  }
});
 
