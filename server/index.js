const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const ctrl = require('./controller');
const cors = require('cors');
require('dotenv').config()


const app = express()
app.use(cors())

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(bodyParser.json())
massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
})

app.get('/api/houses', ctrl.getHouses)
app.post('/api/house', ctrl.addHouse)
app.delete('/api/house/:id', ctrl.deleteHouse)


app.listen(SERVER_PORT, () => {
  console.log('Never better', SERVER_PORT)
})