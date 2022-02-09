const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/getdata", itemController.selectAll);
router.post("/lecture", itemController.postLecture);


module.exports = router;
