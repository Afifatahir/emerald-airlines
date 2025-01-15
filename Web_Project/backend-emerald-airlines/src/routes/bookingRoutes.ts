import { Router } from 'express';
import {
    createBooking,
    getAllBookings,
    getBooking,
    updateBookingStatus,
} from '../controllers/bookingController';
import { checkUserAuth } from '../middleware/middleware';
const router = Router();

router.get('/', checkUserAuth, getAllBookings);
router.get('/:id', checkUserAuth, getBooking);
router.patch('/:id/status', checkUserAuth, updateBookingStatus);
router.post('/', createBooking);
export default router; 