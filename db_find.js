var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.db("mydb").collection("Blogs").findOne({}, function(err, result) {
        if (err) throw err;
        //let author = result.author;
        console.log(result.author);
        db.close();
      });
});
function writeParagraph () {
    document.getElementById("name").innerHTML= result.author;
}
writeParagraph();