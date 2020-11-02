const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require('./models/User');

// application/x-www-form-url
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yeah:qwer1234@boilerplate.amcxj.mongodb.net/<dbname>?retryWrites=true&w=majority',{
userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕')
})

app.post('/register', (req, res) => {
// 회원가입에 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 넣어준다.

const user = new User(req.body)
user.save((err, userInfo) =>{
  if(err) return res.json({ success: false, err})
return res.status(200).json({ 
    success: true
  })  
})

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})