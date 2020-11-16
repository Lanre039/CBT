const users = require("../data/user.json");
const User = require("../models/User");
// const Admin = require("../models/Admin");
// const RoleService = require("../services/RoleService");

module.exports = {
  seedDatabaseWithUsers: async () => {
    const promise = new Promise((resolve, reject) => {
      users.forEach(async (user, index) => {
        try {
          // const { code } = await RoleService.getRoleById(user.roleId);
          user.password = await User.hashUserPassword(user.password);
          const userToCreate = new User(user);

          const createdUser = await userToCreate.save();
          if (createdUser && users[users.length - 1].roleId === user.roleId) {
            console.log("Successfully added the user seeder");
            resolve(createdUser);
          }
        } catch (err) {
          reject(err);
        }
      });
    });
    try {
      return await promise;
    } catch (err) {
      console.log("An error occurred while seeding user" + err);
      return null;
    }
  },
};
