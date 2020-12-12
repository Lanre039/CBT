const UserService = require("../services/UserService");
const Logger = require("../services/logger/loggerService");
const RoleService = require("../services/RoleService");
const loggerInstance = new Logger("user");

module.exports = {
  registerUserCourses: async (req, res, next) => {
    const { courseIds } = req.body;
    const {
      user: { _id },
    } = req;
    try {
      const user = await UserService.saveSelectedCourses(_id, courseIds);
      if (!user) {
        loggerInstance.error("err: User NOT found");
        return res.status(404).send({ err: "Not found" });
      }

      loggerInstance.info(
        `Succesfully registered courses. User: ${req.user.userName}, Role: User`
      );
      return res.status(200).send({ user });
    } catch (err) {
      loggerInstance.error("err: User NOT found");
      return res.status(404).send({ err: "User not found" });
    }
  },
  saveUserResult: async (req, res, next) => {
    const { _id, userName } = req.user;
    const { data } = req.body; // data is an array of object { _id: String, courseId: string, option: Object }
    if (data.length <= 0) {
      loggerInstance.error("Invalid Input");
      return res.status(500).send({ err: "Invalid input" });
    }

    try {
      const result = await UserService.calcAndSaveUserScore(_id, data);
      if (!result) {
        loggerInstance.error("User has already taken the exam.");
        return res
          .status(400)
          .send({ err: "User has already taken the exam." });
      }

      if (result && !result.score) {
        loggerInstance.error("Score not available.");
        return res.status(500).send({ err: "Score not available" });
      }

      loggerInstance.info(
        `Succesfully saved user courses. User: ${userName}, Role: User`
      );
      return res.status(201).send({ result });
    } catch (err) {
      loggerInstance.error("User NOT found");
      return res.status(404).send({ err: "User not found" });
    }
  },
  fetchUserResult: async (req, res, next) => {
    const { _id } = req.user;
    const { courseId } = req.body;
    try {
      const result = await UserService.fetchUserResultByCourseId(_id, courseId);
      if (!result) {
        loggerInstance.error("Result NOT found");
        return res.status(404).send({ err: "Result NOT found" });
      }

      return res.status(200).send({ result });
    } catch (error) {
      loggerInstance.error("Result NOT found");
      return res.status(404).send({ err: "Result NOT found" });
    }
  },
  fetchUserRegisteredCourses: async (req, res, next) => {
    const { _id, userName } = req.user;
    try {
      const user = await UserService.findUserParams({ _id });
      if (!user) {
        loggerInstance.error("User NOT found");
        return res.status(404).send({ err: "User NOT found" });
      }

      const userCourses = await UserService.fetchUserCourses(user);

      loggerInstance.info(
        `Successully fetched user registered courses. User: ${userName}, Role: User`
      );
      return res.status(200).send({ userCourses });
    } catch (error) {
      loggerInstance.error(error);
      return res.status(404).send({ err: error });
    }
  },
  fetchAdminStudents: async function (req, res, next) {
    const { _id, roleId, userName } = req.user;
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

      const users = await UserService.fetchStudentsByCoursesOffered(
        _id,
        roleId
      );
      loggerInstance.info(
        `Successully fetched users. User: ${userName}, Role: Admin`
      );
      return res.status(200).send({ users });
    } catch (error) {
      loggerInstance.error(error);
      return res.status(404).send({ err: error });
    }
  },
};
