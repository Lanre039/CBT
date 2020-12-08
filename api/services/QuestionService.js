const Question = require("../models/Question");

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
        savedData = [...savedData, await new Question({ ...item }).save()];
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
