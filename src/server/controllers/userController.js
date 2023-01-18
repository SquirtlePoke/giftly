const db = require("../models.js");
const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcrypt");

const userController = {};

userController.validateUsername = (req, res, next) => {
  const { username } = req.body;

  const queryText = "";
  db.query(queryText, []).then((dbResponse) => {
    res.locals.validUsername = dbResponse.rows.length > 0;
    return next();
  });
};

userController.createUser = async (req, res, next) => {
  const { username, first_name, last_name, password } = req.body;
  console.log(username, first_name, last_name, password)
  console.log("in createuser middleware");
  console.log("req.body");
  // if (res.locals.validUsername === true) {
  //   const err = {
  //     log: "error occured in createUser middleware",
  //     status: 500,
  //     message: {
  //       err: "could not create a user",
  //     },
  //   };
  //   res.locals.user = false;
  //   return next(err);
  // }
  res.locals.username = username;
  bcrypt.hash(password, SALT_WORK_FACTOR).then((hashedPass) => {
    const queryText = `INSERT INTO Users (username, first_name, last_name, email, password)
  VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const values = [username, first_name, last_name, hashedPass];
    db.query(queryText, values)
      .then((result) => {
        // res.locals.user = true;
        console.log(result);
        return next();
      })
      .catch((err) => {
        next({
          log: "error occured in database from createuser middleware",
          status: 500,
          message: { err: "Error occured inserting user to database" },
        });
      });
  });
};

userController.validatePassword = (req, res, next) => {
  if (res.locals.validUsername === false) {
    return next({
      log: "an error occureed in validatePassword middleware",
      status: 500,
      message: { err: "Incorrect username or password" },
    });
  }
  const { username, password } = req.body;
  const queryText = "";
  const params = [username];

  db.query(queryText, params).then((dbResponse) => {
    if (dbResponse.rows === 0) {
      return next({
        log: "An error occured in validatePassword middleware database",
        status: 500,
        message: { err: "Incorrect username or password" },
      });
    }
    bcrypt.compare(password, dbResponse.rows[0].password, (err, isMatch) => {
      if (err) {
        return next({
          log: "Bcrypt error occured in validatePassword middleware",
          status: 500,
          message: { err: "Incorrect username or password" },
        });
      }
      res.locals.validPassword = isMatch ? true : false;
      return next();
    });
  });
};

module.exports = userController;
