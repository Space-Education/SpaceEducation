const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/getdata", itemController.selectAll);
router.get("/type", itemController.selectTypes);
router.post("/type", itemController.postType);
router.post("/lecture", itemController.postLecture);


module.exports = router;
