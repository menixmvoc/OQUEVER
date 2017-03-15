angular.module('starter.services', [])

.factory('context', function(){
  var config = {
    apiKey: "AIzaSyDjQgRtvJNZkvhBSCveyXbmdv5n7EFY6Jg",
    authDomain: "html-mil-grau.firebaseapp.com",
    databaseURL: "https://html-mil-grau.firebaseio.com",
    storageBucket: "html-mil-grau.appspot.com",
    messagingSenderId: "906905468037"
  };
  firebase.initializeApp(config);
  return{
      get: function() {
        return firebase;
      }
  }
})
.factory('Login', function(context){
  
  return{
    Login: function(email, senha){
      firebase.auth().singnInWithEmailAndpassword(email, senha, callback)
      .then(function(){
        callback();

      })
      .catch(function(error){
        callback(error);

      });

    },
     novo: function(email, senha){
       firebase.auth().creatUserWithEmailAndpassword(email, senha, callback)
      .then(function(){
        callback();

      })
      .catch(function(error){
        callback(error);


    });
     }
  };
})
