const db = require("../models.js");

const collectionController = {};

collectionController.getCollections = async (req, res, next) => {
  const userID = req.query.user_id
  // const userID = res.locals.userID;
  console.log('userID', userID)
  const queryText = "SELECT name, collection_id FROM collections WHERE user_id = $1";
  const values = [userID]

  try {
    console.log('hello')
    const collectionList = await db.query(queryText, values);
    res.locals.collectionList = collectionList.rows;
    return next()
  } catch (error) {
    return next({
      log: 'An error occured in collectionController.getCollections',
      message: { err: 'ERROR getting collection list' }
    })
  }
}

collectionController.createCollections = async (req, res, next) => {
  const userID = req.query.user_id;
  const { name } = req.body;
  console.log('userID', userID);
  const queryText = ``;
  const values = [userID];
  try {
    await db.query(queryText, values);
    return next();
  } catch (error) {
    return next({
      log: "An error occured in collectionController.createCollections",
      message: {err: 'Error creating collection'},
    })
  }
}

module.exports = collectionController;
module.exports = collectionController;