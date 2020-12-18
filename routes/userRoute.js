const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();
const brcrpt = require("bcrypt");

router.post("/register", async (req, res) => {
  const user = new userModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const newUser = await user.save();

  if (newUser) {
    res.send({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      isCoach: newUser.isCoach,
    });
  } else {
    res.status(401).send({ msg: "Invalid user data." });
  }
});
module.exports = router;
