const db = require("../models.js");

const itemController = {};

itemController.getItems = async (req, res, next) => {
  const collectionID = req.query.collection_id;
  
  const queryText = 'SELECT * FROM items WHERE collection_id = $1'
  const values = [collectionID];

  try {
    const items = await db.query(queryText, values);
    res.locals.items = items.rows;
    return next();
  } catch(error) {
    return next({
      log: 'An error occured in itemController.getItems',
      message: {err: 'Error getting items'}
    })
  }
}

itemController.createItems = async (req, res, next) => {
  const { collection_id } = req.query;
  const { name, link, description, image_link, price } = req.body;
  const queryText = `INSERT INTO items (name, collection_id, link, description, image_link, price) VALUES ($1, $2, $3, $4, $5, $6)`;
  const values = [name, collection_id, link, description, image_link, price];
  try {
    const create = await db.query(queryText, values)
    console.log('createeee', create.rows)
    res.locals.newItem = create.rows[0];
    return next();
  } catch (err) {
    return next({
      log: "An error occured in itemController.createItems",
      message: {err: "Error creating itemsssss"},
    })
  }
}

itemController.deleteItems = async (req, res, next) => {
const itemID = req.query.item_id;
const { name } = req.body;
const queryText = 'DELETE FROM items WHERE name = $1 AND item_id = $2'
  const values = [name, itemID]
  
  try {
    await db.query(queryText, values).catch((err) => {
      console.log(err);
      return next({
        log: "An error occured in deleting new item on database",
        message: {err: "Error deleting item"},
      })
    })
    return next();
  } catch (err) {
    return next({
      log: "An error occured in deleting itemController.deleteitem",
      message: {err: "Error deleteing item"},
    })
  }
}

module.exports = itemController;