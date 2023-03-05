//  File: /models/book.js
//  Name: Wai Lim Leung
//  ID  : 301276989
//  Date: Mar 1, 2023

let mongoose = require('mongoose');

// create a model class
//let Book = mongoose.Schema({
    //Title: String,
    //Description: String,
    //Price: Number,
    //Author: String,
    //Genre: String
//},

let Book = mongoose.Schema({
  name: String,
  author: String,
  published: String,
  description: String,
  price: Number
},

{
  collection: "books"
});

module.exports = mongoose.model('book', Book);
