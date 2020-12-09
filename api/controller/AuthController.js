const UserService = require("../services/UserService");
const Logger = require("../services/logger/loggerService");
const loggerInstance = new Logger("auth");

const AuthController = {
  login: async (req, res, next) => {
    const { userName, password } = req.body;
    try {
      const user = await UserService.findUserParams({
        userName: userName.trim(),
      });
      if (!user) {
        loggerInstance.error("Invalid login details");
        return res.status(400).send({ err: "Invalid login details" });
      }
      const isMatch = await UserService.doesPasswordMatch(
        password,
        user.password
      );

      if (!isMatch) {
        loggerInstance.error("Invalid login details");
        return res.status(400).send({ err: "Invalid login details" });
      }

      const token = await user.generateToken();

      loggerInstance.info(
        `Successfully logged in user. User: ${userName}, Role: User/Admin`
      );
      res.status(200).send({ user, token });
    } catch (err) {
      loggerInstance.error(
        "A server error occurred while trying to login user."
      );
      return res
        .status(500)
        .send({ err: "A server error occurred while trying to login user." });
    }
  },
};

module.exports = AuthController;
