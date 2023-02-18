const db = require('../models.js');
const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcrypt");

const userController = {};

userController.createUser = async (req, res, next) => {
  const { username, first_name, last_name, password } = req.body;
  res.locals.username = username;
  const hash = await bcrypt.hash(password, SALT_WORK_FACTOR);
  const queryText = `INSERT INTO users (username, first_name, last_name, password)
  VALUES ($1, $2, $3, $4) RETURNING *`;
  const values = [username, first_name, last_name, hash];
  db.query(queryText, values)
    .then((data) => {
      res.locals.signupSuccess = true;
      return next();
    })
    .catch((error) => {
      console.error(error);
      return next({
        log: 'error occured in database from createuser middleware',
        message: { err: 'Error occured inserting user to database' }
      });
    });
};

userController.validateUsername = (req, res, next) => {
  const { username } = req.body;
  const queryText = `
    SELECT user_id, username, password 
    FROM users
    WHERE username='${username}';
  `;
  db.query(queryText)
    .then((dbResponse) => {
      if (dbResponse.rows.length !== 1) { // If no or multiple users are found with the given username
        return next({ // Return next with an error object
          log: "userController.validateUsername: Invalid username",
          status: 403,
          message: { err: "Incorrect username or password" },
        });
      }
      res.locals.userEntry = dbResponse.rows[0];
      res.locals.validUsername = dbResponse.rows.length === 1;
      return next();
    })
};

userController.validatePassword = (req, res, next) => {
  try {
    const plainPassword = req.body.password;
    const hashedPassword = res.locals.userEntry.password;
    const isMatch = bcrypt.compareSync(plainPassword, hashedPassword);
    if (!isMatch) {
      return next({
        log: "userController.validatePassword: Invalid password",
        status: 403,
        message: { err: "Incorrect username or password" },
      });
    }
    res.locals.validPassword = isMatch;
    return next();
  }
  catch (err) {
    return next({ 
      log: 'userController.validatePassword: Unknown error',
    })
  }
}

userController.matchCredentials = (req, res, next) => {
  try {
    res.locals.loginSuccess = res.locals.validUsername && res.locals.validPassword;
    res.locals.user_id = res.locals.userEntry.user_id
    return next();
  }
  catch (err) {
    return next({ 
      log: 'userController.matchCredentials: Unknown error',
    })
  }
}

module.exports = userController;
