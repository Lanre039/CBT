const express = require("express");
const router = express.Router();
const {
  createQuestion,
  getRandomQuestionsInBatches,
} = require("../controller/QuestionController");
const auth = require("../middleware/auth");

router.post("/create-question", auth, createQuestion);
router.get("/questions", auth, getRandomQuestionsInBatches);

module.exports = router;
