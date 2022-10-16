const express = require('express')
const app = express()
const port = 3000

app.get('/heap', (req, res) => {
  const N = 100000;
  global.helloList = []
  for (var i = 0; i < N; i++) {
    global.helloList.push(`Hello-${i}`)
  }
  res.send('Heap Added!')
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})