const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const isValidEmail = require("../helper/isValidEmail");

const secretKey = process.env.SECRET_KEY;

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Email or password is required." });

    const user = await User.findOne({ email });

    if (!user) return res.status(401).json({ message: "Invalid credentials." });

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch)
      return res.status(401).json({ message: "Invalid credentials." });

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      secretKey
    );

    return res.status(200).json({ message: "Login success", Token: token });
  } catch (error) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const missingFields = [];
      if (!email) missingFields.push("Email");
      if (!password) missingFields.push("Password");

      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(", ")}.`,
      });
    }

    const isEmailVerify = isValidEmail(email);
    if (!isEmailVerify) {
      return res.status(400).json({ message: "Please enter a valid email." });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User is already exist." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
