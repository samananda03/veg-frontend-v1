const express = require('express')
require('dotenv').config();
const connectDB = require('./config/mongodbconfig')
const userRoutes = require('./routes/userRoutes')
connectDB();

const app= express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api/users', userRoutes)

app.get('/',(req,res)=>{
    res.status(200).send('API is working fine now')
})

const PORT = process.env.PORT || 2000

app.listen(PORT, ()=>{
    console.log(`your express is on port ${PORT}`);
})
