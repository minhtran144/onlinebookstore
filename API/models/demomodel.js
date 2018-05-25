var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*var demomodelschema = new Schema({
name:{
 type:String,
 required:false
},
description:{
 type:String,
 required:false
}
});

*/

var BookSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    condition: String,
  });
  
  var demomodel = mongoose.model('demomodel', BookSchema,'bookstore18');

  
// The session about the inserting of the new data to the database, this is executed once from the first run.
// Check the database for the verification

//
  var book1 = [{ name: 'Introduction to Mongoose', price: 35, quantity: 25, condition: 'good' },
  
  { name: 'Introduction to Python', price: 10, quantity: 25, condition: 'good' },

  { name: 'Introduction to Mongoose javascript', price: 10, quantity: 50, condition: 'good' },

  { name: 'Introduction to Mongoose Nodejs', price: 20, quantity: 30, condition: 'used' },

  { name: 'Introduction to JSON', price: 40, quantity: 30, condition: 'good' },

  { name: 'Introduction to Golang', price: 20, quantity: 15, condition: 'fairly good' },

  { name: 'Javascript for Dummies', price: 20, quantity: 30, condition: 'exellent' },

  { name: 'Python in Action', price: 20, quantity: 30, condition: 'exellent' },

  { name: 'How much is the book Excel for talent?', price: 20, quantity: 30, condition: 'exellent' },

  { name: 'Introduction to Excel', price: 20, quantity: 30, condition: 'exellent' },

  ];
  
demomodel.collection.insert(book1, function (err, docs) {
  if (err){ 
      return console.error(err);
  } else {
    console.log("Multiple documents inserted to Collection");
  }
});

// End of last session

//

module.exports = demomodel;