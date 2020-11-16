const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  createCourse,
  getAllCourses,
  getCourseById,
} = require("../controller/CourseController");

router.post("/create-course", auth, createCourse);
router.get("/courses", getAllCourses);
router.get("/course/:id", getCourseById);

module.exports = router;
