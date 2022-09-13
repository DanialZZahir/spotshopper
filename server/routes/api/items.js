const express = require('express');
const router = express.Router();
const items = require('./clientserver')

// Get all items
router.get('/', async (req, res) => {

    // get the data from the db
    const data = await items.findAll()
    res.send(data)
  })
  
  // Get items by id (route param)
  router.get('/', async (req, res) => {
  
    // try to find the items
    const data = await items.findByPk(req.params.id)
  items
    // if it can't be found, send a useful error
    if (!data) {
      res.status(404).send(`No items with id ${req.params.id}`)
      return
    }
  
    // otherwise, send the data!
    res.send(data)
  })

  module.exports = router;