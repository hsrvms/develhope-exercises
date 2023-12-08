import express, { Router } from 'express';
import userController from '../controllers/userController';
import authorize from '../authorize';
import '../passport';

const router: Router = express.Router();

router.get('/', userController.getAll);
router.post('/login', userController.logIn);
router.post('/signup', userController.signUp);
router.get('/logout', authorize, userController.logOut);

export default router;
