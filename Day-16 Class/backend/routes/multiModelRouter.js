const express = require("express");
const router = express.Router();
const multer = require("multer");
const multiModelPrompt = require("../controller/multiModel");

// Store uploaded files in an 'uploads/' temp folder
const upload = multer({ dest: "uploads/" });

// 'image' is the field name expected in the form-data request
router.post("/multi-modelprompt", upload.single("image"), multiModelPrompt);

module.exports = router;