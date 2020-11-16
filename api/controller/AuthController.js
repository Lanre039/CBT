const UserService = require("../services/UserService");

const AuthController = {
  login: async (req, res, next) => {
    const { userName, password } = req.body;
    try {
      const user = await UserService.findUserParams({
        userName: userName.trim(),
      });
      if (!user) {
        return res.status(400).send({ err: "Invalid login details" });
      }
      const isMatch = await UserService.doesPasswordMatch(
        password,
        user.password
      );

      if (!isMatch) {
        return res.status(400).send({ err: "Invalid login details" });
      }

      const token = await user.generateToken();
      res.status(200).send({ user, token });
    } catch (err) {
      console.log(err);
      return res.status(400).send({ err: "Invalid login details" });
    }
  },
};

module.exports = AuthController;
