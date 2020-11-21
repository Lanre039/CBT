const Role = require("../models/Role");

module.exports = {
  getRoleById: async function (id) {
    try {
      const roleFromDb = await Role.findOne({ _id: id });
      return roleFromDb;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  getAllRoles: async function () {
    try {
      const roleFromDb = await Role.find();
      return roleFromDb;
    } catch (err) {
      console.log(err);
      return null;
    }
  },
};
