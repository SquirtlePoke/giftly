const express = require("express");
const router = express.Router();

const collectionController = require('../controllers/collectionController')

router.get('/', collectionController.getCollections, (req, res, next) => {
  return res.status(200).json(res.locals.collectionList);
})




module.exports = router;