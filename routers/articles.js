//routers are responsible for creating API, storing API
const {Article} = require('../models/article')
const express = require('express')
const router = express.Router()

router.get(`/`, async (req,res)=>{

    const articleList = await Article.find();

    if(!articleList){
        res.status(500).json({success: false})
    }
    res.send(articleList);
    // const article = {
    //     id: 1,
    //     name: 'sample article',
    //     image: 'some_url'
    // }
    // res.send(article);
})


router.post(`/`, (req,res)=>{
    // const newArticle = req.body
    // console.log(newArticle)
    const article = new Article({
        id: req.body.id,
        userId: req.body.userId, 
        title: req.body.title, 
        featuredImageUrl: req.body.featuredImageUrl, 
        userName: req.body.userName, 
        // dateWritten: req.body.dateWritten, 
        content: req.body.content , 
        categoryIds: req.body.categoryIds, 
        description: req.body.description, 
        // likes: req.body.likes, 
        // comments: req.body.comments
    })
    //to save in DB
    article.save().then((createdArticle =>{
        res.status(201).json(createdArticle)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports = router;