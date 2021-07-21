require('dotenv').config()
const express = require('express')
const app = express()
const {PORT} = process.env
app.use(express.json())
app.use(express.static("public"))
// app.get('/',(req,res)=>{
//     // res.send(`/index.html`)
// })
app.get('/bwip',(req,res)=>{
    res.sendFile(path.join(__dirname, '/node_modules/bwip-js/dist/bwip-js-min.js'))
})
app.listen(PORT ,()=>{
    console.log(`Port open on ${PORT}`)
})