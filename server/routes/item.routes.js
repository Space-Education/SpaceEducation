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
router.get("/user/:id", itemController.selectProfile);// for profile

// for post
router.get("/homePosts", itemController.selectAllPosts);
router.get("/homePosts/:id_type", itemController.selectAllPostsByIdType);
router.get("/profilPosts/:id", itemController.selectAllPostsUser);// for profile
router.post("/posts", itemController.insertPost);



module.exports = router;
