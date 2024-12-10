import express from 'express'
const app= express()
import 'dotenv/config'
app.get('/',(request,response)=>{
    response.status(200).send("Welcome to Home Page")
})
app.get('/google',(request,response)=>{
    response.status(200).send({"msg": "This is a google page"})
})
app.get('/twitter',(request,response)=>{
    response.status(200).send(`<h1>Welcome to Twitter</h1>`)
})
app.get('/amazon',(request,response)=>{
    response.status(200).send({"msg": "This is a amazon page"})
})
app.get('/err',(request,response)=>{
    response.status(200).send(`<p>This is erricson page</p>`)
})
const port_number= process.env.PORT || 3000

app.listen(port_number, ()=> {
    console.log(`App is running on ${port_number} ...`)
})