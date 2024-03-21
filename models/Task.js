const mongoose=require('mongoose');

const Schema={
        title: String,
        description: String,
        status: String,
        dueDate: String
}

const task= mongoose.model('task',Schema);

module.exports=task;


