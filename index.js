const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yeah:qwer1234@boilerplate.amcxj.mongodb.net/<dbname>?retryWrites=true&w=majority',{
userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세용~~~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})