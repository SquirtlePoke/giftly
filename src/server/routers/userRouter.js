const express = require("express");

const cookieController = require("../controllers/cookieController");
const collectionController = require('../controllers/collectionController');
const userController = require("../controllers/userController");
const router = express.Router();

router.post(
  "/signup",
  userController.createUser,
  (req, res) => {
    if (res.locals.signupSuccess) {
      console.log("signup successful")
      return res.sendStatus(200)
    } else {
      return res.status(501).send("Error Signing up");
    }
  }
);

router.post(
  "/login",
  userController.validateUsername,
  userController.validatePassword,
  userController.matchCredentials,
  // cookieController.setCookie,
  (req, res) => {
    return res.locals.loginSuccess ? res.status(200).json(res.locals.user_id) : res.status(403).send("Incorrect username or password");
  }
);

module.exports = router;
