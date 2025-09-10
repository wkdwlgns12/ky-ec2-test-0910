require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT
app.use(express.json())
app.get("/",(req,res)=>{
    res.send(`.env 테스트:${process.env.DATABASE_NAME}`)
})

app.listen(PORT,()=>{
    console.log(`Server is running! : ${PORT}`)
})