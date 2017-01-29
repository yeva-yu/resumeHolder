var express = require('express');
var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyDYrTTwOuNfqADTpe5F5TnDN6hXeJForH0",
  authDomain: "resumeholder-c39c6.firebaseapp.com",
  databaseURL: "https://resumeholder-c39c6.firebaseio.com",
  storageBucket: "resumeholder-c39c6.appspot.com",
  messagingSenderId: "920964915462"
};
firebase.initializeApp(config);
var storage = firebase.storage();
