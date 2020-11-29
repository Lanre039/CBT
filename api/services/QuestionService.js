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
  getRandomQuestions: async function (courseId) {
    const limit = 2;
    try {
      const totalQuestions = await Question.find({ courseId }).countDocuments();
      const randomNumber = Math.ceil(
        Math.random() * (totalQuestions - limit) + 1
      );
      const rand =
        randomNumber > totalQuestions - limit
          ? randomNumber - limit
          : randomNumber;

      const questions = await Question.find({ courseId })
        .select("-answer")
        .limit(limit)
        .skip(rand);
      return questions;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
};
