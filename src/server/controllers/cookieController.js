const { v4: uuidv4 } = require("uuid");
const db = require("../models.js");

const cookieController = {};

cookieController.setCookie = async (req, res, next) => {
  const ssidString = uuidv4();
  if (res.locals.validPassword && res.locals.validUsername) {
    const maxAge = 1000 * 60 * 30; // 30 minutes
    return res.cookie("ssid", ssidString, { maxAge, httpOnly: true });
  }
  const { username } = req.body;
  let queryText = "";
  let params = [username];
  let dbResponse = await db.query(queryText, params);
  const user_id = dbResponse.rows[0]._id;
  queryText = "";
  params = [ssidString, user_id];
  await db.query(queryText, params);
  if (res.locals.prevSSID) {
    queryText = "";
    params = [res.locals.prevSSID];
    await db.query(queryText, params);
  }
  return next();
};

cookieController.validateCookie = async (req, res, next) => {
  return next();
};

module.exports = cookieController;
