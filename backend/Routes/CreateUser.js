const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = "abcdabcdabcdabcdabcdabcdabcdabcd";

router.post(
  "/createuser",
  [
    body("email", "Invalid email").isEmail(),
    // password must be at least 5 chars long
    body("name", "this field cannot be left empty").isLength({ min: 1 }),
    body("password", "minimum 5 characters required").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        location: req.body.location,
        password: secPassword,
        email: req.body.email,
      });
      res.json({ sucess: true });
    } catch (error) {
      console.log(error);
      res.json({ sucess: false });
    }
  }
);

// login route

router.post(
  "/loginuser",
  [
    body("email", "Invalid email").isEmail(),
    // password must be at least 5 chars long
    body("password", "minimum 5 characters required").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let email = req.body.email;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: "email doesnot exists" });
      }
      const pwdCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!pwdCompare) {
        return res.status(400).json({ errors: "enter correct password" });
      }
      const data = {
        user: {
          id: userData.id,
        },
      };
      const authtoken = jwt.sign(data, jwtSecret);
      res.json({ sucess: true, authtoken: authtoken });
    } catch (error) {
      console.log(error);
      res.json({ sucess: false });
    }
  }
);

module.exports = router;
