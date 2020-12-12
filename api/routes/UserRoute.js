const express = require("express");
const router = express.Router();
const {
  registerUserCourses,
  saveUserResult,
  fetchUserResult,
  fetchUserRegisteredCourses,
  fetchAdminStudents,
} = require("../controller/UserController");
const auth = require("../middleware/auth");

router.post("/api/user/register-courses", auth, registerUserCourses);
router.post("/api/user/questions", auth, saveUserResult);
router.post("/api/user/result", auth, fetchUserResult);
router.get("/api/user/courses", auth, fetchUserRegisteredCourses);
router.get("/api/user/students", auth, fetchAdminStudents);

module.exports = router;
