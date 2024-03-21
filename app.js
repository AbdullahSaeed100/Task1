const express=require('express');
const app=express();
const PORT=3100;

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/test2').then(()=>{
    app.listen(PORT,console.log(`listening on ${PORT}`))
})

app.use(express.json());
const routes = require('./routes/task');
app.use('/task',routes);


