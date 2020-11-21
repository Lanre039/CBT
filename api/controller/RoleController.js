const RoleService = require("../services/RoleService");

module.exports = {
  getRoles: async (req, res, next) => {
    try {
      const roles = await RoleService.getAllRoles();
      res.status(200).send({ roles });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
