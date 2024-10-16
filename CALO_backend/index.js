const express = require('express')
const app = express()

const dotenv = require('dotenv')
app.use(express.json())
dotenv.config()
var bodyParser = require("body-parser");

const postRouter = require('./router/postRouter')
const getPostRouter = require('./router/getPostRouter')
const getSinglePostRouter = require('./router/getSinglePostRouter')
let cors = require("cors");
app.use(cors());  
// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// // parse application/json
app.use(bodyParser.json())



app.use(postRouter)
app.use(getPostRouter)
app.use(getSinglePostRouter)



app.listen(process.env.PORT, () => {
  console.log('server is runing ...')
})
