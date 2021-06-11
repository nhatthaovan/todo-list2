//khởi tạo các framework và các hàm 

const express = require('express');
const homeRoute = require('./routes/home');
const list = require('./models/list');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();



//kiểm tra Kết nối với mongodb
mongoose.connect('mongodb://localhost:27017/todo2', { useNewUrlParser: true })
    .then(console.log("mongodb is connected successfully"))
    .catch(err => console.log("An error is occered to connect to db"));

app.set('view engine', 'ejs');
// sử dụng express
app.use(express.static('public'));
// sử dụng công cụ nhìn view
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
    // sử dụng các restful ở file home.js
app.use('/', homeRoute);

// tạo địa chỉ port 
const PORT = process.env.PORT || 8000;

// bắt đầu chạy server 
app.listen(PORT, () => {
    console.log('This app is rrunning on:', PORT);
})