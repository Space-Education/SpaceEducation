var db = require("../database-mysql");
// select all posts for home page
var selectAllPosts = function (req, res) {
  var sql = "SELECT p.*, t.label_type, t.image_type, u.firstName ,u. lastName FROM (posts p inner join type t on t.id_type = p.id_type) inner join users u on u.id_user=p.id_user"
  db.query(sql, (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
//select all post of user for profil page
var selectAllPostsUser = function (req, res) {
  var params = req.params.id
  var sql = "SELECT p.*, t.label, t.image_type FROM (posts p inner join type t on t.id_type = p.id_type) where id_user=?"
  db.query(sql, [params], (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
// insert post 
var insertPost = function (req, res) {
  var lecture = "INSERT INTO posts SET ?"
  var params = {
    title: req.body.title,
    description: req.body.description,
    image_post:req.body.image_post,
    id_type: req.body.id_type,    
    id_user: req.body.id_user
  }
  db.query(lecture, params, (err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.send(results)
    }
  })
}
// select all types for post page
var selectTypes = function (req, res) {
  db.query("SELECT * FROM type", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
// insert type for the admin dashbord
var insertType = function (req, res) {
  var lecture = "INSERT INTO type SET ?"
  var params = { image_type: req.body.image_type, label_type: req.body.label_type }
  db.query(lecture, params, (err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.send(results)
    }
  })
}
// select all Categpry for post page
var selectCategory = function (req, res) {
  db.query("SELECT * FROM category", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
// insert category for the admin dashbord
var insertCategory = function (req, res) {
  var lecture = "INSERT INTO category SET ?"
  var params = { label_category: req.body.label_category }
  db.query(lecture, params, (err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.send(results)
    }
  })
}
//select data user for the login
var selectUser = function (req, res) {
  var password = req.body.password
  var email = req.body.email
  sql = "SELECT * FROM users WHERE email = ? and password=?"
  db.query(sql, [email, password], (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
//insert data user for the signup
var insertUser = function (req, res) {
  var sql = "INSERT INTO users SET ?"
  var params = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    dob: req.body.dob,
    id_category: req.body.id_category,
    image_user:req.body.image_user,
    active:false
  }
  db.query(sql, params, (err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.send(results)
    }
  });
};

module.exports = { selectCategory, selectAllPosts, insertPost, selectTypes, insertType, insertUser, selectUser, selectAllPostsUser, insertCategory };
