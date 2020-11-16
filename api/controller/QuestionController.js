const QuestionService = require("../services/QuestionService");
const RoleService = require("../services/RoleService");

module.exports = {
  createQuestion: async (req, res, next) => {
    const { roleId } = req.user;
    const { courseId, question, options, answer } = req.body;

    if (!courseId || !question || !answer) {
      return res.status(400).send({ err: "One or more fields are empty" });
    }

    if (options.length < 2) {
      return res.status(400).send({ err: "One or more fields are empty" });
    }

    try {
      const { code } = await RoleService.getRoleById(roleId);

      if (code !== "admin_user") {
        return res
          .status(401)
          .send({ err: "Unathorized to perform this action" });
      }

      const createQuestion = await QuestionService.createQuestion({
        courseId,
        question: question.trim(),
        options,
        answer: answer.trim(),
      });

      return res.status(201).send({ question: createQuestion });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  getRandomQuestionsInBatches: async (req, res, next) => {
    const { id } = req.query;
    try {
      const questions = await QuestionService.getRandomQuestions(id);

      if (!questions.length) {
        return res
          .status(404)
          .send({ err: "No question available at the moment." });
      }
      return res.status(200).send({ questions });
    } catch (err) {
      console.log(err);
      return res
        .status(404)
        .send({ err: "No question available at the moment." });
    }
  },
};
