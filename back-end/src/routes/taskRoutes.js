import express from 'express';
import { taskCreate, taskList, taskDelete, taskUpdate } from '../controllers/taskcontroller.js';

const router = express.Router();

router.post('/tarefas', taskCreate);
router.get('/tarefas', taskList);
router.delete('/tarefas/:id', taskDelete);
router.put('/tarefas/:id', taskUpdate);

export default router;