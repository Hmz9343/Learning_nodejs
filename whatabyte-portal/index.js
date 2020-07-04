// index.js

const express=require('express');
const path=require('path');

const app=express();
const port=process.env.PORT||"8000";

app.get('/',(req,res)=>{
    res.status(200).send("WhatAbout:: serving food for Devs.");
});


app.listen(port,()=>{
    console.log('http://localhost:8000');
});