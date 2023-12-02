import express from 'express';
import { UserController } from './user.Controller';

const router = express.Router();

router.post('/', UserController.createUser);

router.get('/:id', UserController.getUserById);

router.patch('/:id', UserController.updateUserById);

router.delete('/:id', UserController.deleteUser);

router.get('/', UserController.getAllUser);

export const UserRoutes = router;
