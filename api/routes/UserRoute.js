const express = require("express");
const router = express.Router();
const {
  registerUserCourses,
  saveUserResult,
  fetchUserResult,
} = require("../controller/UserController");
const auth = require("../middleware/auth");

router.post("/user/register-courses", auth, registerUserCourses);
router.post("/user/questions", auth, saveUserResult);
router.get("/user/:courseId/result", auth, fetchUserResult);

module.exports = router;
