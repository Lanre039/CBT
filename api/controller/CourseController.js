const CourseService = require("../services/CourseService");
const RoleService = require("../services/RoleService");
const Logger = require("../services/logger/loggerService");
const loggerInstance = new Logger("course");

module.exports = {
  createCourse: async (req, res, next) => {
    const { roleId, userName } = req.user;
    const { code: courseCode, title } = req.body;

    if (!courseCode || !title) {
      loggerInstance.error("One or more fields is empty");
      return res.status(400).send({ err: "One or more fields is empty" });
    }

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

      const createCourse = await CourseService.createCourse({
        code: courseCode.trim(),
        title: title.trim(),
        owner: roleId,
      });

      loggerInstance.info(
        `Successully created courses. User: ${userName}, Role: Admin`
      );
      return res.status(201).send({ course: createCourse });
    } catch (err) {
      loggerInstance.error("A server error occurred while creating courses.");
      res.status(400).send(err);
    }
  },
  getAllCourses: async (req, res, next) => {
    const { roleId, userName } = req.user;
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

      loggerInstance.info(
        `Successfully fetched all courses User: ${userName}, Role: User/Admin`
      );
      const courses = await CourseService.getAllCourses(roleId);
      return res.status(200).send({ courses });
    } catch (err) {
      loggerInstance.error("A server error occurred while fetching courses.");
      res.status(500).send(err);
    }
  },
  getCourseById: async (req, res, next) => {
    const { userName } = req.user;
    const id = req.params.id;

    try {
      const courses = await CourseService.getCourseById(id);
      loggerInstance.info(
        `Successfully fetched all courses User: ${userName}, Role: User/Admin`
      );
      return res.status(200).send(courses);
    } catch (err) {
      loggerInstance.error("A server error occurred while fetching a course");
      res.status(500).send(err);
    }
  },
  changeCourseStatus: async (req, res, next) => {
    const { roleId, userName } = req.user;
    const { id } = req.body;
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
      const courses = await CourseService.changeCourseStatus(id);

      loggerInstance.info(
        `Status changed successfully User: ${userName}, Role: Admin`
      );
      return res.status(200).send("Status changed successfully!");
    } catch (error) {
      loggerInstance.error(
        "A server error occurred while changing course status"
      );
      res.status(500).send(err);
    }
  },
};
