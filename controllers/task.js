
const task_model=require('../models/Task');

const getAll =async (req,res)=>{
        const all=await task_model.find();
        res.status(200).json(all) 
    
}
const getById=async (req,res)=>{
    try{
    const oneTask=await task_model.findOne({'_id':req.params.id});
    res.status(200).json(oneTask);
    }catch(err){
        res.status(404).json(`the id ${req.params.id} is not found`);
    }
    
    
}
const getByStatus=async (req,res)=>{
    

        /*getting task by status using body
        const oneTask=await task_model.find(req.body);*/


        //getting task by status using parameter
        const oneTask=await task_model.find({"status":req.params.status});
        if(oneTask.length===0)
            res.status(404).json("there is no status with name "+req.params.status)
        else
            res.status(200).json(oneTask);
    
}
const create=async (req,res)=>{
    const data=req.body;
    const newTask=new task_model(data);
    await newTask.save();

    res.status(201).json(newTask);
}
const update=async (req,res)=>{
    const newData=req.body;
    try{
    await task_model.findByIdAndUpdate(req.params.id,newData);
    res.status(200).json(newData);
    }catch(err){
        res.status(404).json(`the id ${req.params.id} is not found`);
    }

}
const remove=async (req,res)=>{
    try{
    await task_model.findByIdAndDelete(req.params.id);
    res.status(200).json(`task with id ${req.params.id} has been deleted`);
    }catch(err){
        res.status(404).json(`the id ${req.params.id} is not found`);
    }
}


module.exports={
    getAll,
    create,
    getById,
    update,
    remove,
    getByStatus
}