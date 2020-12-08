const express = require("express");
const router = express.Router();
const {
  createQuestion,
  getQuestions,
} = require("../controller/QuestionController");
const auth = require("../middleware/auth");

router.post("/api/create-question", auth, createQuestion);
router.post("/api/questions", auth, getQuestions);

module.exports = router;
