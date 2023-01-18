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

module.exports = collectionController;