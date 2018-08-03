module.exports = {
  getHouses: (req, res) => {
    const db = req.app.get('db')
    db.get_houses()
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send('Something done brokeded')
      })
  },

  addHouse: (req, res) => {
    let db = req.app.get('db')
    let { name, address, city, state, zip } = req.body
    console.log(req.body)
    db.add_house([name, address, city, state, zip])
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send('Something done brokeded')
      })
  },

  deleteHouse: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.delete_house([id])
      .then(results => {
        res.status(200).send(results)
    })
      .catch(err => {
        res.status(500).send('Something done brokeded')
      })
  }
}