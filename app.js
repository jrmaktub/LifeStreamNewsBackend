//creating webserver
const express = require('express');
const app = express();

require('dotenv/config');

const api = process.env.API_URL;

//middleware
app.use(express.json())

app.get(`${api}/articles`, (req,res)=>{

    const article = {
        id: 1,
        name: 'sample article',
        image: 'some_url'
    }
    res.send(article);
})

app.post(`${api}/articles`, (req,res)=>{
    const newArticle = req.body
    console.log(newArticle)
    res.send(newArticle)
})

//callback will be exucted when the server is created succesfully
app.listen(3000,  ()=>{
    console.log(api)
    console.log('server is running at  http://localhost:3000 ');
})