const express = require("express");
const router = express.Router();
const { login } = require("../controller/AuthController");

router.post("/api/login", login);

module.exports = router;
