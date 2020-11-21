const express = require("express");
const router = express.Router();
const {
  registerUserCourses,
  saveUserResult,
  fetchUserResult,
} = require("../controller/UserController");
const auth = require("../middleware/auth");

router.post("/api/user/register-courses", auth, registerUserCourses);
router.post("/api/user/questions", auth, saveUserResult);
router.get("/api/user/:courseId/result", auth, fetchUserResult);

module.exports = router;
