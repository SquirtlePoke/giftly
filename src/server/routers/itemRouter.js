const express = require("express");
const router = express.Router();


const itemController = require('../controllers/itemController')

router.get('/', itemController.getItems, (req, res) => {
  return res.status(200).json(res.locals.items)
})

router.post('/', itemController.createItems, (req, res) => {
  return res.status(200).json({ //should be 201
    newItem: res.locals.newItem,
  });
})

router.delete('/', itemController.deleteItems, (req, res) => {
  return res.status(200)
})

router.patch('/', itemController.updateItems, (req, res) => {
  return res.sendStatus(204)
})

module.exports = router; 