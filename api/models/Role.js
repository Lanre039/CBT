const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});

RoleSchema.statics.getRoleById = async function (roleId) {
  return !!(await this.findOne({ _id: roleId }));
};

module.exports = mongoose.model("Role", RoleSchema);
