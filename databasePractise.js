var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  //creating the data to be stored in an object notation
  myObject = {author: "Steph", title: "My dog ate a cat", date : Date()};
  //storing the data in a collection(table) called Blogs which is in a db called mydb
  /*The first parameter of the insertOne() method is an object containing the name(s) 
  and value(s) of each field in the document you want to insert. It also takes a callback 
  function where you can work with any errors, or the result of the insertion */
  db.db("mydb").collection("Blogs").insertOne(myObject, function(err, res){
    if (err) throw err;
    console.log("i document inserted");
    db.close();
  });
});