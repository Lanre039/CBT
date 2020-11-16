const mongoose = require("mongoose");
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  courseId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Question", QuestionSchema);
