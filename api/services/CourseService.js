const Course = require("../models/Course");

module.exports = {
  createCourse: async function (data) {
    try {
      const saveCourse = await new Course({ ...data }).save();
      return saveCourse;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  getAllCourses: async function () {
    try {
      const courseFromDb = await Course.find({});
      return courseFromDb;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  getCourseById: async function (id) {
    try {
      const courseFromDb = await Course.findOne({ _id: id });
      return courseFromDb;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
};
