const CourseService = require("../services/CourseService");
const RoleService = require("../services/RoleService");

module.exports = {
  createCourse: async (req, res, next) => {
    const { roleId } = req.user;
    const { code: courseCode, title } = req.body;

    if (!courseCode || !title) {
      return res.status(400).send({ err: "One or more fields is empty" });
    }

    try {
      const { code } = await RoleService.getRoleById(roleId);

      if (code !== "admin_user") {
        return res
          .status(401)
          .send({ err: "Unathorized to perform this action" });
      }

      const createCourse = await CourseService.createCourse({
        code: courseCode.trim(),
        title: title.trim(),
        owner: roleId,
      });

      return res.status(201).send({ course: createCourse });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  getAllCourses: async (req, res, next) => {
    const { roleId } = req.user;
    try {
      const { code } = await RoleService.getRoleById(roleId);

      if (code !== "admin_user") {
        return res
          .status(401)
          .send({ err: "Unathorized to perform this action" });
      }

      const courses = await CourseService.getAllCourses(roleId);
      return res.status(200).send({ courses });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  getCourseById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const courses = await CourseService.getCourseById(id);
      return res.status(200).send(courses);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  changeCourseStatus: async (req, res, next) => {
    const { roleId } = req.user;
    const { id } = req.body;
    try {
      const { code } = await RoleService.getRoleById(roleId);

      if (code !== "admin_user") {
        return res
          .status(401)
          .send({ err: "Unathorized to perform this action" });
      }
      const courses = await CourseService.changeCourseStatus(id);
      return res.status(200).send("Status changed successfully!");
    } catch (error) {
      console.log(error);
      res.status(500).send(err);
    }
  },
};
