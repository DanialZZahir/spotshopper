const express = require('express');
const { seed, ITEMS, items } = require('./models')
const { logTable } = require('sequelize-logger')

const app = express();
app.use(express.urlencoded({ extended : false }))


app.use(express.json());

// Delete a item by id

app.delete('/items/:id', async (req, res) => {
  const deleted = await items.destroy({
    where: { id: req.params.id }
  })

  if (!deleted) {
    res.status(404).send(`No items with id ${req.params.id}`)
    return
  }

  await logTable(items)
  res.status(202).send(`items with id ${req.params.id} was deleted.`)
})

// create a new item
app.post('/items', async (req, res) => {
  // the user's data is in req.body
  // we use that data to make a new item in the db:
  try {
    await items.create(req.body)
    res.sendStatus(201)
  } catch (error) {
    res.status(400).send(error.errors)
  }
  await logTable(items)
})

// update an item by id
app.put('/items/:id', async (req, res) => {
  const itemsToUpdate = await items.findByPk(req.params.id)

  if (!itemsToUpdate) {
    res.sendStatus(404)
    return
  }

  try {
    await itemsToUpdate.update(req.body)
    res.sendStatus(200)
  } catch (error) {
    res.status(400).send(error.errors)
  }

  logTable(items)

})

async function main() {

  // wait for the db to get filled with data
  await seed()

  //then start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => { console.log(`Listening on port ${PORT}.`) })
}

main()