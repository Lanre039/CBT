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
  getAllCourses: async function (owner) {
    try {
      const courseFromDb = await Course.find({ owner });
      return courseFromDb;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  getCourseById: async function (id) {
    try {
      const courseFromDb = await Course.findOne({ _id: id, isAvailable: true });
      return courseFromDb;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  changeCourseStatus: async function (id) {
    try {
      const courseFromDb = await Course.findOne({ _id: id });
      courseFromDb.isAvailable = !courseFromDb.isAvailable;
      return await courseFromDb.save();
    } catch (err) {
      console.log(err);
      return null;
    }
  },
};
