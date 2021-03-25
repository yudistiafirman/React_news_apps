const express = require('express')
const cors= require('cors')
const morgan=require('morgan')
const MainRoute= require('./Route/Main')


const app = express()

const PORT=5000

app.use(express.json())
app.use(cors())
app.use(morgan('dev'),MainRoute)



app.listen(PORT,()=>{
    console.log(`app runnin in ${PORT}`)
})

