import express from 'express';


import authMiddleware from '../middleware/authMiddleware.js';
import { addOrder } from '../controllers/orderController.js';


const router = express.Router();

router.post('/add',authMiddleware, addOrder);
// router.get('/', getUser);
// router.delete('/:id', authMiddleware, deleteUser);      


export default router;


