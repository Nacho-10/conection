import { Router } from 'express';
import { getProjects } from '../controllers/project.controllers.js';
import { createProject } from '../controllers/project.controllers.js';
import { updateProject } from '../controllers/project.controllers.js';
import { deleteProject } from '../controllers/project.controllers.js';
import { getProject } from '../controllers/project.controllers.js';
import { getProjectTasks } from '../controllers/project.controllers.js';

const router = Router();

router.get('/projects', getProjects);
router.post('/projects', createProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);
router.get('/projects/:id', getProject);
router.get('/projects/:id/tasks', getProjectTasks);


export default router