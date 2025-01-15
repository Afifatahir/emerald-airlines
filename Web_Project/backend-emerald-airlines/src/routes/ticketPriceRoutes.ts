import { Router } from 'express';
import {
    getAllTicketPrices,
    getTicketPriceByRoute,
    createTicketPrice,
    updateTicketPrice,
    deleteTicketPrice,
    getTicketPrice,
} from '../controllers/ticketPriceController';
import { checkUserAuth } from '../middleware/middleware';

const router = Router();

router.get('/', getAllTicketPrices);
router.get('/:from_destination_id/:to_destination_id/:class_type', getTicketPriceByRoute);
router.get('/:id', getTicketPrice);
router.post('/', checkUserAuth, createTicketPrice);
router.put('/:id', checkUserAuth, updateTicketPrice);
router.delete('/:id', checkUserAuth, deleteTicketPrice);

export default router; 