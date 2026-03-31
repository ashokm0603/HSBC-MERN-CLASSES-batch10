const express = require("express");
const router = express.Router();
const prompt = require("../controller/aiAssistant");
router.post("/prompt", prompt);

module.exports = router;
