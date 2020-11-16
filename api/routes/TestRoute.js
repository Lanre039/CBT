const express = require("express");
const router = express.Router();
const { test } = require("../controller/TestController");
const auth = require("../middleware/auth");

router.get("/test", auth, test);
// router.get("/tests", test);

module.exports = router;
