import express from 'express';
import { registerStudentForEvent, getEventRegistrations } from '../controllers/RegistrationController.js';

const router = express.Router();

router.post('/', registerStudentForEvent);
router.get('/:eventId', getEventRegistrations);

export default router; 