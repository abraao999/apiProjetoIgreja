import { Router } from 'express';
import sendMailController from '../controllers/SendMailController';

const router = new Router();

router.post('/', sendMailController.sendMail);
export default router;
