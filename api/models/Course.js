const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  question: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  isAvailable: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Course", CourseSchema);
