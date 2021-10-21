(function (window){
  'use strict';
  var App = window.App || {};

  var FirebaseConfig = {
    apiKey: "AIzaSyANHzVVMDs6CiCXORvEPcllofqkknjn5Bs",
    authDomain: "coffeerun-859a6.firebaseapp.com",
    projectId: "coffeerun-859a6",
    storageBucket: "coffeerun-859a6.appspot.com",
    messagingSenderId: "899243100623",
    appId: "1:899243100623:web:79a146b2892c33eb72aaba",
    measurementId: "G-3S1NQB7EKX"
  };

  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig);

  window.App = App;
}) (window);
