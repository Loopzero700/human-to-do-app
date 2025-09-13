const mongoose = require('mongoose')
const {Schema} = mongoose

const ToDoSchema = new Schema({
    task:{
        type:String,
        required:true,
        trim:true      
    },
    done:{
        type:Boolean,
        default:false
    }
})

module.exports= mongoose.model('todo',ToDoSchema)


