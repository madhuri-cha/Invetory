import express from 'express';
import { addUser, getUser, deleteUser } from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/add',authMiddleware, addUser);
router.get('/', authMiddleware, getUser);
router.delete('/:id', authMiddleware, deleteUser);      


export default router;


