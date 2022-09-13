const mongoose = require('mongoose')

//after middleware and before api's
const articleSchema = mongoose.Schema({
    id: Number, 
    userId: Number, 
    title: String, 
    featuredImageUrl: String, 
    userName: String, 
    // dateWritten: { type: Date, default: Date.now }, 
    content: String, 
    categoryIds: Number , 
    description : String, 
    // meta: {
    //     likes: Number, 
    //     comments: String,
    //     positiveVotes: Number,
    //     negativeVotes: Number
    // }
    
})

exports.Article = mongoose.model('Article', articleSchema)
