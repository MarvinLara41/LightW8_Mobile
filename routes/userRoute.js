const express = require("express");
const userModel = require("../models/userModel");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  const user = new userModel({
    userName: req.body.userName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  const newUser = await user.save();
  if (newUser) {
    res.send({
      _id: newUser.id,
      userName: newUser.userName,
      email: newUser.email,
      isCoach: newUser.isCoach,
    });
  } else {
    res.status(401).send({ msg: "Invalid User data." });
  }
});

router.get("/signin", async (req, res) => {
  const signinUser = await userModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (signinUser) {
    res.send({
      _id: signinUser.id,
      userName: signinUser.userName,
      email: signinUser.email,
      isCoach: signinUser.isCoach,
    });
  } else {
    res.status(401).send({ msg: "INVALID EMAIL OR PASSWORD" });
  }
});

module.exports = router;
