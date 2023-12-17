const express = require("express");
const router = express.Router();
const contactUsController = require("../controllers/contactController.js");

router.post("/", contactUsController);

module.exports = router;
