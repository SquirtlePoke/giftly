const express = require("express");
const router = express.Router();

const collectionController = require('../controllers/collectionController')

router.get('/', collectionController.getCollections, (req, res) => {
  return res.status(200).json(res.locals.collectionList);
})

router.post('/', collectionController.createCollections, (req, res) => {
  return res.status(200).json(res.locals.newCollection);
})

router.delete('/', collectionController.deleteCollection, (req, res) => {
  return res.status(200).json(res.locals.deletedCollection)
})

module.exports = router; 