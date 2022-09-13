//creating webserver
const express = require('express');
const app = express();
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv/config');

app.use(cors());
app.options('*', cors)

const api = process.env.API_URL;
const articlesRouter = require('./routers/articles')

//middleware
app.use(express.json()) 
app.use(morgan('tiny'))

//router
app.use(`${api}/articles`, articlesRouter )

const Article = require('./models/article')



mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'lifeStreamNewsDB'
})
.then(()=>{
    console.log('database connection is ready')
})
.catch((err)=>{
    console.log(err)
})

//callback will be exucted when the server is created succesfully
app.listen(3000,  ()=>{
    console.log(api)
    console.log('server is running at  http://localhost:3000 ');
})