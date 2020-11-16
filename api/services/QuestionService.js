const Question = require("../models/Question");

module.exports = {
  createQuestion: async function (data) {
    try {
      const saveQuestion = await new Question({ ...data }).save();
      return saveQuestion;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  getRandomQuestions: async function (courseId) {
    const limit = 1;
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
        .limit(1)
        .skip(rand);
      return questions;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
};
