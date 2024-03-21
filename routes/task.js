const express=require('express');

const router=express.Router();
const taskController=require('../controllers/task');
router.get('/',taskController.getAll);
router.post('/',taskController.create);
router.get('/:id',taskController.getById);
router.put('/:id',taskController.update);
router.delete('/:id',taskController.remove);
router.get('/status/:status',taskController.getByStatus);

module.exports=router;