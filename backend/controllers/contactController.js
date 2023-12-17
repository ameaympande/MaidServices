const asyncHandler = require("express-async-handler");
const { logEvents } = require("../middleware/logger");

const contactUs = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    logEvents(
      "Invalid form submission: All fields are required.",
      "contactFormError.log"
    );
    return res.status(400).json({ message: "All fields are required." });
  }

  logEvents(
    `Contact form submitted: ${JSON.stringify(req.body)}`,
    "contactFormSubmissions.log"
  );

  res.status(200).json({ message: "Contact form submitted successfully!" });
});

module.exports = contactUs;
