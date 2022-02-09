var db = require("../database-mysql");

var selectAll = function (req, res) {
  db.query("SELECT * FROM items", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var postLecture=function(req, res){
  var lecture="INSERT INTO postLecture SET ?"
  var params={image:req.body.image, title:req.body.title,description:req.body.description}
  db.query(lecture,params,(err,results)=>{
    if(err) {
      console.log(err)
    }else{
      res.send(results)
    }
  })
}


module.exports = { selectAll,postLecture };