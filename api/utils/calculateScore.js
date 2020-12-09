const Question = require("../models/Question");

module.exports = {
  calculateScore: async (optionsDetails) => {
    let count = 0;
    try {
      for (const data of optionsDetails) {
        const { answer } = await Question.findOne({ _id: data._id }).select(
          "answer"
        );

        const chosenAnswer = Object.keys(data.options)[0];

        if (answer.toLowerCase() === chosenAnswer.toLowerCase()) {
          count++;
        }
      }
      return { score: count };
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
