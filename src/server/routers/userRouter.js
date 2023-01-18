const express = require("express");

const cookieController = require("../controllers/cookieController");
const collectionController = require('../controllers/collectionController');
const userController = require("../controllers/userController");
const router = express.Router();

router.post(
  "/signup",
  // userController.validateUsername,
  userController.createUser,
  (req, res) => {
    if (res.locals.user === true) {
      return res.sendStatus(200)
    } else {
      return res.status(501).send("Error Signing up");
    }
    // return res.sendStatus(200);
  }
);

router.post(
  "/login",
  // userController.validateUsername,
  userController.validatePassword,
  // cookieController.setCookie,
  (req, res) => {
    // if (res.locals.validPassword && res.locals.validUsername) {
    //   return res.status(200).json({
    //     username: res.locals.username,
    //   });
    // } else {
    //   res.status(501).send("Error logging in, wrong username or password");
    // }
    return res.sendStatus(200)
  }
);

module.exports = router;
