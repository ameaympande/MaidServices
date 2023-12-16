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
  const { name, email, password, location, gender, ph_number } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Name, email, and password are required" });
  }

  const duplicate = await User.findOne({ email }).lean().exec();

  if (duplicate) {
    return res.status(409).json({
      message: "Email already exists. Please log in or use another email.",
    });
  }

  const hashedPwd = await bcrypt.hash(password, 10);

  const userObject = {
    name,
    email,
    password: hashedPwd,
    location,
    gender,
    ph_number,
  };

  const user = await User.create(userObject);

  if (user) {
    res.status(201).json({ message: `New user ${user.name} created` });
  } else {
    res.status(400).json({ message: "Invalid user data received" });
  }
});

module.exports = router;
