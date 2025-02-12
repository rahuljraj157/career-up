//Backend\models\posts.js
import mongoose from "mongoose";


const postSchema = mongoose.Schema({ 

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users',
    },

    company : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'companies'
    },

    description : {
        type : String,
        required : true
    },

    media : [{
        type : String
    }],

    createdAt : {
        type : Date,
        default : Date.now    
    },  

    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    }],

    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'comments'
    }],

    isDeleted : {  //soft-delete
        type : Boolean,
        default : false
    },

    reports : [{
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'users'
        },

        reason : {
            type : String
        }
    }]

} , {timestamps: true});


const postModel = mongoose.model('posts' , postSchema);

export default postModel;