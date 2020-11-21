const express = require("express");
const router = express.Router();
const { getRoles } = require("../controller/RoleController");

router.get("/api/roles", getRoles);

module.exports = router;
