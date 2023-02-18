const express = require("express");

const cookieController = require("../controllers/cookieController");
const userController = require("../controllers/userController");
const router = express.Router();

router.post(
  '/signup',
  userController.createUser,
  cookieController.setSIDCookie, // ! Needs testing
  (req, res) => {
    return res.locals.sigupSuccess
      ? res.sendStatus(200)
      : res.status(501).send('Error signing up');
  }
);

router.post(
  "/login",
  // cookieController.validateSIDCookie,
  userController.validateUsername,
  userController.validatePassword,
  userController.matchCredentials,
  cookieController.setSIDCookie,
  (req, res) => {
    return res.locals.loginSuccess
      ? res.status(200).json(res.locals.userId)
      : res.status(403).send('Incorrect username or password');
  }
);

module.exports = router;
