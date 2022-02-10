const router = require('express').Router();
const itemController = require("../controllers/item.controller");

// for type
router.get("/type", itemController.selectTypes);
router.post("/type", itemController.insertType);

// for category
router.post("/category", itemController.insertCategory);
router.get("/category", itemController.selectCategory);

// for user
router.post("/user", itemController.insertUser);
router.post("/userlogin", itemController.selectUser);

// for post
router.get("/homePosts", itemController.selectAllPosts);
router.get("/profilPosts/:id", itemController.selectAllPostsUser);
router.post("/posts", itemController.insertPost);



module.exports = router;
