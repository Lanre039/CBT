const express = require("express");
const router = express.Router();
const {
  registerUserCourses,
  saveUserResult,
  fetchUserResult,
  fetchUserRegisteredCourses,
} = require("../controller/UserController");
const auth = require("../middleware/auth");

router.post("/api/user/register-courses", auth, registerUserCourses);
router.post("/api/user/questions", auth, saveUserResult);
router.get("/api/user/:courseId/result", auth, fetchUserResult);
router.get("/api/user/courses", auth, fetchUserRegisteredCourses);

module.exports = router;
