import express from 'express';
import { createUserController, deleteUserController, getUsersController, updateUserController } from '../controllers/usercontroller.js';

const router = express.Router();

router.post('/usuarios', createUserController);
router.get('/usuarios', getUsersController);
router.delete('/usuarios/:id', deleteUserController);
router.put('/usuarios/:id', updateUserController);

export default router;