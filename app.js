console.log('ini app')

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('contoh aja nih')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})