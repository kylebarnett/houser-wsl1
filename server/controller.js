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
  }
}