const roles = require("../data/roles.json");
const Role = require("../models/Role");
module.exports = {
  seedDatabaseWithRoles: async () => {
    roles.forEach(async (role, index) => {
      try {
        const roleToCreate = new Role(role).save();
        console.log(`Successfully added ${role.name} to db`);
      } catch (err) {
        console.log(err);
      }
    });
  },
};
