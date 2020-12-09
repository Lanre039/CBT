const Question = require("../models/Question");
const Course = require("../models/Course");

module.exports = {
  processFormData: async function (courseId, data) {
    const formatData = data.map((item) => ({
      courseId,
      question: item.question,
      answer: item.answer,
      options: [
        { a: item.optionA },
        { b: item.optionB },
        { c: item.optionC },
        { d: item.optionD },
      ],
    }));

    return await formatData;
  },
  createQuestion: async function (data) {
    try {
      let savedData = [];
      for (const item of data) {
        const course = await Course.findById(item.courseId);
        const question = await new Question({ ...item }).save();
        course.questions = [...course.questions, question._id];
        await course.save();
        savedData = [...savedData, question];
      }
      return await savedData;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  getQuestions: async function (courseId) {
    try {
      const questions = await Question.find({ courseId }).select("-answer");
      return questions;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
};
