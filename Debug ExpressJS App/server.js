const express = require('express')
const app = express()
const port = 3000

app.get('/get-book-info/:title', (req, res) => {
  const title = req.params.title;
  const db = [
    {
      title: 'javsscript',
      description: 'This is sample description of javascript book'
    },
    {
      title: 'nodejs',
      description: 'This is sample description of node book'
    }
  ]

  const info = db.find((bookItem) => bookItem.title === title);
  const desc = info.description;
  res.send(desc);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})