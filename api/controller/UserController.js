const UserService = require("../services/UserService");

module.exports = {
  registerUserCourses: async (req, res, next) => {
    const { courseIds } = req.body;
    const {
      user: { _id },
    } = req;
    try {
      const user = await UserService.saveSelectedCourses(_id, courseIds);
      if (!user) {
        return res.status(404).send({ err: "Not found" });
      }

      return res.status(200).send({ user });
    } catch (err) {
      console.log(err);
      return res.status(404).send({ err: "User not found" });
    }
  },
  saveUserResult: async (req, res, next) => {
    const { _id } = req.user;
    const { data } = req.body; // data is an array of object { _id: String, courseId: string, option: Object }
    if (data.length <= 0) {
      return res.status(500).send({ err: "Invalid input" });
    }

    try {
      const result = await UserService.calcAndSaveUserScore(_id, data);
      if (!result) {
        return res
          .status(400)
          .send({ err: "User has already taken the exam." });
      }

      if (result && !result.score) {
        return res.status(500).send({ err: "Score not available" });
      }

      return res.status(201).send({ result });
      return res.status(201).send({ result });
    } catch (err) {
      console.log(err);
      return res.status(404).send({ err: "User not found" });
    }
  },
  fetchUserResult: async (req, res, next) => {
    const { _id } = req.user;
    const { courseId } = req.params;
    try {
      const result = await UserService.fetchUserResultByCourseId(_id, courseId);
      if (!result) {
        return res.status(404).send({ err: "Result NOT found" });
      }
      return res.status(200).send({ result });
    } catch (error) {
      console.log(err);
      return res.status(404).send({ err: "Result NOT found" });
    }
  },
};
