const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  createCourse,
  getAllCourses,
  getCourseById,
  changeCourseStatus,
} = require("../controller/CourseController");

router.post("/api/create-course", auth, createCourse);
router.get("/api/courses", auth, getAllCourses);
router.get("/api/course/:id", getCourseById);
router.post("/api/course/status", auth, changeCourseStatus);

module.exports = router;
