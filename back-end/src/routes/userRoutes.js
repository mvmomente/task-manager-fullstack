import express from 'express';
import { userCreate, userDelete, userList, userUpdate } from '../controllers/usercontroller.js';

const router = express.Router();

router.post('/usuarios', userCreate);
router.get('/usuarios', userDelete);
router.delete('/usuarios/:id', userList);
router.put('/usuarios/:id', userUpdate);

export default router;