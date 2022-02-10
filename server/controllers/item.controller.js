var db = require("../database-mysql");

var selectAll = function (req, res) {
  var sql =
    "SELECT p.*, t.label, t.image FROM (postLecture p inner join type t on t.id_type = p.id_type)";
  db.query(sql, (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var selectTypes = function (req, res) {
  db.query("SELECT * FROM type", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
var postLecture = function (req, res) {
  var lecture = "INSERT INTO postLecture SET ?";
  var params = {
    id_type: req.body.id_type,
    title: req.body.title,
    description: req.body.description,
  };
  db.query(lecture, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};
var postType = function (req, res) {
  var lecture = "INSERT INTO type SET ?";
  var params = { image: req.body.image, label: req.body.label };
  db.query(lecture, params, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
};

var postUpdate = (newData, callback) => {
  db.query(`UPDATE data SET`, (err, rez) => {
    if (err) callback(null);
    else callback(rez);
  });
};

module.exports = { selectAll, postLecture, selectTypes, postType, postUpdate };
