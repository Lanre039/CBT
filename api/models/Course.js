const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  question: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
});

module.exports = mongoose.model("Course", CourseSchema);
