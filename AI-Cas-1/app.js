const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path:`${__dirname}/config.env`})
const { handleChatRequest } = require('./handlers/aiContoler')

const app = express()


app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.post('/api/v1/api' ,handleChatRequest)
app.listen(process.env.PORT,(err) =>{
    if(err){
        return  console.log("serverstart")
    }
    console.log("Server started ")
})