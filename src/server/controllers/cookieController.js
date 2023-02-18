const { v4: uuid } = require("uuid");
const db = require("../models.js");

const cookieController = {};

cookieController.setSIDCookie = (req, res, next) => {
  try {
    const user_id = res.locals.userId || req.body.user_id;
    const sidString = uuid();
    let queryText = `
      INSERT INTO sessions(user_id, session_id, date_created)
      VALUES(${user_id}, '${sidString}', CURRENT_TIMESTAMP)
      ON CONFLICT(user_id)
      DO 
      UPDATE SET session_id='${sidString}', date_created=CURRENT_TIMESTAMP;
    `;
    db.query(queryText)
      .then(() => {
        if (! (res.locals.signupSuccess || res.locals.loginSuccess)) {
          return next({
            log: 'cookieController.setSIDCookie: Invalid login or signup'
          })
        }
        const maxAge = 1000 * 60 * 30; // 30 minutes
        res.cookie("sid", sidString, { 
          maxAge, 
          httpOnly: true 
        });
        return next();
      });
  }
  catch (err) {
    return next({
      log: 'cookieController.setCookie: Unknown error'
    })
  }
};

cookieController.validateSIDCookie = async (req, res, next) => {
  try {
    const sidString = req.cookies?.sid || null;
    if (sidString === null) {
      res.locals.validSession = false;
      res.redirect('/');
      return next();
    }
    let queryText = `
      SELECT COUNT(*)
      FROM sessions
      WHERE session_id='${sidString}';
    `;
    db.query(queryText)
      .then((dbResponse) => {
        if (dbResponse.rows[0].count != 1) {
          return next({
            log: 'cookieController.validateCookie: Invalid session',
            message: 'Invalid session'
          })
        }
        res.locals.validSession = dbResponse.rows[0].count == 1;
        return next();
      });
  }
  catch (err) {
    return next({
      log: 'cookieController.setCookie: Unknown error'
    })
  }
};

module.exports = cookieController;
