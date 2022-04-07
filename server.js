const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/home', function (req, res) {
    res.send('Welcome home!')
  })

app.post('/home', function (req, res) {
    res.send('Created a home')
})


app.listen(5000)