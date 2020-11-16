const mongoose = require("mongoose");
const { Schema } = mongoose;

const ResultSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Result", ResultSchema);
