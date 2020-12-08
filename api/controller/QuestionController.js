const QuestionService = require("../services/QuestionService");
const RoleService = require("../services/RoleService");
const Logger = require("../services/logger/loggerService");
const loggerInstance = new Logger("question");

module.exports = {
  createQuestion: async (req, res, next) => {
    const { roleId, userName } = req.user;
    const { courseId, data } = req.body;

    try {
      const { code } = await RoleService.getRoleById(roleId);

      if (code !== "admin_user") {
        loggerInstance.error(
          `Unathorized to perform this action. User: ${userName}, Role: User`
        );
        return res
          .status(401)
          .send({ err: "Unathorized to perform this action" });
      }
      const formatData = await QuestionService.processFormData(courseId, data);
      const createQuestion = await QuestionService.createQuestion(formatData);

      loggerInstance.info(
        `Successully created question. User: ${userName}, Role: Admin`
      );
      return res.status(201).send({ questions: createQuestion });
    } catch (err) {
      loggerInstance.error("A server error occurred while creating questions.");
      res.status(500).send("A server error occurred while creating questions.");
    }
  },
  getQuestions: async (req, res, next) => {
    const { id } = req.body;
    try {
      const questions = await QuestionService.getQuestions(id);

      if (!questions.length) {
        loggerInstance.error("No question available at the moment.");
        return res
          .status(404)
          .send({ err: "No question available at the moment." });
      }

      loggerInstance.info(
        `Successfully fetched all questions. User: ${req.user.userName} Role: User/Admin`
      );
      return res.status(200).send({ questions });
    } catch (err) {
      loggerInstance.error("A server error occurred while fetching questions.");
      return res
        .status(500)
        .send({ err: "A server error occurred while fetching questions." });
    }
  },
};
