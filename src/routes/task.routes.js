import { Router } from 'express';
import { getTasks } from '../controllers/task.controllers.js';
import { createTasks } from '../controllers/task.controllers.js'; 
import { getTask } from '../controllers/task.controllers.js';
import { updateTask } from '../controllers/task.controllers.js';
import { deleteTask } from '../controllers/task.controllers.js';

const router = Router();

router.get('/tasks', getTasks)
router.post('/tasks', createTasks)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)
router.get('/tasks/:id', getTask)

export default router;

