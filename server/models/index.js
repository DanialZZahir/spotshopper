const db = require('../db')
const items = require('../models/items')

async function seed () {

await db.sync({ force: true })

await items.create({ ItemType:'Trainers', Name:'Nike Air Foce One', Price: ('£' + 400 + '.' + 00), Description:'Trainers'})
await items.create({ ItemType:'Trainers', Name:'Jordan 11 Retro', Price: ('£' + 500 + '.' + 00), Description:'Trainers'})
await items.create({ ItemType:'Trainers', Name:'Adidas Ultraboost', Price: ('£' + 600 + '.' + 00), Description:'Trainers'})

}

module.exports = { seed, items }