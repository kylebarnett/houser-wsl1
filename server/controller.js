module.exports = {
  getHouses: (req, res) => {
    const db = req.app.get('db')
    db.get_houses()
      .then(results => {
        res.status(200).send(results)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send('Something done brokeded')
      })
  },

  addHouse: (req, res) => {
    const db = req.app.get('db')
    const { name, address, city, state, zipcode } = req.body
    db.add_house([])
      .then(results => {
        res.status(200).send(results)
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