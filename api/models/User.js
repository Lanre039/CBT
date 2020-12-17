const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Schema } = mongoose;
const ResultSchema = require("./Result");

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  roleId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Role",
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Courses",
    },
  ],
});

// To hide password in any user instance
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;

  return userObject;
};

// Salting and Hashing the user password with bcrypt
UserSchema.statics.hashUserPassword = async function (password) {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (err) {
    console.log("An error occurred while hashing user password" + err);
    throw err;
  }
};


// Generating and signing the user token                                   
UserSchema.methods.generateToken = async function () {
  try {
    const userPayload = {
      id: this._id,
      roleId: this.roleId,
    };
    const token = await jwt.sign(userPayload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return token;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = mongoose.model("User", UserSchema);
