const db = require('../models.js');
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
  const hash = await bcrypt.hash(password, SALT_WORK_FACTOR);
  console.log(hash);
  const queryText = `INSERT INTO users (username, first_name, last_name, password)
  VALUES ($1, $2, $3, $4) RETURNING *`;
  const values = [username, first_name, last_name, hash];
  // console.log('values', values);
  await db.query(queryText, values)
      .then((data) => {
        res.locals.user = true;
        return next();
      })
    .catch((error) => {
        console.log(error);
        next({
          log: "error occured in database from createuser middleware",
          message: { err: "Error occured inserting user to database" },
        });
      });
};


userController.validatePassword = (req, res, next) => {
  // if (res.locals.validUsername === false) {
  //   return next({
  //     log: "an error occureed in validatePassword middleware",
  //     status: 500,
  //     message: { err: "Incorrect username or password" },
  //   });
  // }

  
  const { username, password } = req.body;

  // const hash = bcrypt.hash(password, SALT_WORK_FACTOR);
  const queryText = `SELECT password, user_id FROM users WHERE username = $1`;
  const values = [username];

  db.query(queryText, values)
    .then((data) => {
      if (data.rows === 0) {
        return next({
          log: "An error occured in validatePassword middleware database",
          status: 500,
          message: { err: "Incorrect username or password" },
        });
      }

      const isMatch = bcrypt.compareSync(password, data.rows[0].password);

      if (isMatch) {
        // res.locals.validPassword = isMatch ? true : false;
        res.locals.userID = data.rows[0].user_id;
        console.log(res.locals.userID)
        return next();
      }
      // console.log(data.rows[0]);
      // res.locals.userID = data.rows[0].user_id;
    }).catch((error) => {
      return next({
        log: "An error occured in validatePassword middleware database",
        status: 500,
        message: { err: "Incorrect username or password" },
      });
    })
}

module.exports = userController;
