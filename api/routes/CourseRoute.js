const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  createCourse,
  getAllCourses,
  getCourseById,
} = require("../controller/CourseController");

router.post("/api/create-course", auth, createCourse);
router.get("/api/courses", getAllCourses);
router.get("/api/course/:id", getCourseById);

module.exports = router;
