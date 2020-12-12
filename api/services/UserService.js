const bcrypt = require("bcrypt");
const User = require("../models/User");
const Result = require("../models/Result");
const { calculateScore } = require("../utils/calculateScore");
const CourseService = require("../services/CourseService");
const Question = require("../models/Question");

module.exports = {
  doesPasswordMatch: async function (userPassword, passwordFromDb) {
    try {
      return await bcrypt.compare(userPassword, passwordFromDb);
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  findUserParams: async function (params) {
    try {
      const user = await User.findOne(params);
      return user;
    } catch (err) {
      console.log(err);
    }
  },
  saveSelectedCourses: async function (userId, courseIds) {
    try {
      const user = await User.findOne({ _id: userId });
      if (!user) {
        return null;
      }

      user.courses = [...courseIds];
      const data = await user.save();
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  calcAndSaveUserScore: async function (userId, data) {
    const result = {};
    result.userId = userId;
    result.courseId = data[0].courseId;

    try {
      const totalQuestions = await Question.find({
        courseId: result.courseId,
      }).countDocuments();

      const user = await Result.findOne({ userId, courseId: result.courseId });
      if (user) {
        return null;
      }

      const { score } = await calculateScore(data);
      const calcScore = (score / totalQuestions) * 100;
      result.score = calcScore.toFixed(2);

      const savedResult = await new Result(result).save();
      return savedResult;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  fetchUserResultByCourseId: async function (userId, courseId) {
    try {
      const result = await Result.findOne({ userId, courseId }).populate(
        "courseId"
      );

      if (!result) {
        return null;
      }

      return result;
    } catch (error) {
      console.log(error);
    }
  },
  fetchUserCourses: async function (user) {
    let allCourses = [];
    const { courses } = user;
    for (const courseId of courses) {
      const course = await CourseService.getCourseById(courseId);
      if (course) {
        allCourses = [...allCourses, course];
      }
    }
    return allCourses;
  },
  fetchStudentsByCoursesOffered: async function (adminId, roleId) {
    try {
      const courses = await CourseService.getAllCourses(adminId, roleId);
      const courseIds = courses.map(({ _id }) => _id);
      const users = await User.find({ courses: { $in: courseIds } });
      return users;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
