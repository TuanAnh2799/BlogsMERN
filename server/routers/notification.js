import express from "express";
import {sendNotification} from '../controllers/notification.js';

const router = express.Router();

router.get('/',sendNotification);

export default router;