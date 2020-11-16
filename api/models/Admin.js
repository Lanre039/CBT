const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const { Schema } = mongoose;

const AdminSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  roleId: {
    type: Schema.Types.ObjectId,
    ref: "Role",
    required: true,
  },
});

module.exports = mongoose.model("Admin", AdminSchema);
