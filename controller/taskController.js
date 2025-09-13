const asynchandler = require('express-async-handler') 
const todo = require("../models/taskCollection")


const getapp = asynchandler(async(req,res)=>{
    const tasks = await todo.find({})
    res.render('index',{tasks:tasks})
})

const addtask = asynchandler(async(req,res)=>{
   const task = req.body.text
   if(task.length==0){
    res.send({message:alert("plase enter the task..!")})
   }
   const newtask = todo({task})
   await newtask.save()
   res.redirect('/')
})

const clear = asynchandler (async(req,res)=>{
    await todo.deleteMany({})
    res.redirect('/')
    alert("all tasks are removed for the list..!")

})

const toggle = asynchandler(async(req,res)=>{
    const taskId = req.params.id 
    await todo.findByIdAndUpdate(taskId,{done:true})
    res.redirect('/')
})

const deleteTask = asynchandler(async(req,res)=>{
    const taskId = req.params.id
    await todo.findByIdAndDelete(taskId)
    res.redirect('/forgotPassword')
})

module.exports={
    getapp,
    addtask,
    clear,
    toggle,
    deleteTask
}