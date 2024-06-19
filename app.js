console.log('ini app')

const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/register', (req, res) => {
  try {
    res.send('register berhasil')
  } catch(err) {
    console.log(err)
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})