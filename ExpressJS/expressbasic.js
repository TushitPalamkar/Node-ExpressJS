const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.status(200).send('home page')
})
app.get('/about',(req,res)=>{
    res.status(200).send('About Page');
})
app.all('*',(req,res)=>{
    res.status(404).send('Resource not Found')
})
app.listen(5000);