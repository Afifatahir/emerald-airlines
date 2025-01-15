import { Router } from 'express';
import { verifyAuth } from '../controllers/verifyAuthController';

const router = Router();

router.get('/', verifyAuth);

export default router; 