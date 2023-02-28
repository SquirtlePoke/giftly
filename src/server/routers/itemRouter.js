const express = require("express");
const router = express.Router();


const itemController = require('../controllers/itemController')

router.get('/', itemController.getItems, (req, res) => {
  return res.status(200).json(res.locals.items)
})

router.post('/', itemController.createItems, (req, res) => {
  return res.status(200).json({
    newItem: res.locals.newItem,
  });
})

router.delete('/', itemController.deleteItems, (req, res) => {
  return res.status(200)
})

module.exports = router; 