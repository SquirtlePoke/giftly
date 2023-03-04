const db = require("../models.js");

const collectionController = {};

collectionController.getCollections = async (req, res, next) => {
  const userID = req.query.user_id;
  const queryText =
    "SELECT name, collection_id FROM collections WHERE user_id = $1";
  const values = [userID];

  try {
    const collectionList = await db.query(queryText, values);
    res.locals.collectionList = collectionList.rows;
    return next();
  } catch (error) {
    return next({
      log: "An error occured in collectionController.getCollections",
      message: { err: "ERROR getting collection list" },
    });
  }
};

collectionController.createCollections = async (req, res, next) => {
  const userID = req.query.user_id;
  const { name } = req.body;
  const queryText = `INSERT INTO collections (name, user_id) VALUES ($1, $2)`;
  const values = [name, userID];

  try {
    await db.query(queryText, values).catch((err) => {
      console.log(err);
      return next({
        log: "An error occured in creating new collection on database",
        message: { err: "Error creating collection" },
      });
    });
    res.locals.newCollection = name;
    return next();
  } catch (err) {
    return next({
      log: "An error occured in collectionController.createCollections",
      message: { err: "Error creating collection" },
    });
  }
};

collectionController.deleteCollection = async (req, res, next) => {
  const collectionID = req.query.collection_id;
  const { name } = req.body;
  const queryText = `DELETE FROM collections WHERE name = $1 AND collection_id = $2`;
  const values = [name, collectionID];

  try {
    await db.query(queryText, values).catch((err) => {
      console.log(err);
      return next({
        log: "An error occured in creating new collection on database",
        message: { err: "Error deleting collection" },
      });
    });
    return next();
  } catch (err) {
    return next({
      log: "An error occured in collection Controller.deleteCollection",
      message: { err: "Error deleteing collection" },
    });
  }
};

module.exports = collectionController;
