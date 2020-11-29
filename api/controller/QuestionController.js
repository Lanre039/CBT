const QuestionService = require("../services/QuestionService");
const RoleService = require("../services/RoleService");

module.exports = {
  createQuestion: async (req, res, next) => {
    const { roleId } = req.user;
    const { courseId, data } = req.body;

    try {
      const { code } = await RoleService.getRoleById(roleId);

      if (code !== "admin_user") {
        return res
          .status(401)
          .send({ err: "Unathorized to perform this action" });
      }
      const formatData = await QuestionService.processFormData(courseId, data);
      const createQuestion = await QuestionService.createQuestion(formatData);

      return res.status(201).send({ questions: createQuestion });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  getRandomQuestionsInBatches: async (req, res, next) => {
    const { id } = req.body;
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
