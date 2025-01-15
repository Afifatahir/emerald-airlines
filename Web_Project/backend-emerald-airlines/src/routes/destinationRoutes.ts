import express from 'express';
import {
    getAllDestinations,
    getDestination,
    createDestination,
    updateDestination,
    deleteDestination,
} from '../controllers/destinationController';
import { checkUserAuth } from '../middleware/middleware';

const router = express.Router();

router.get('/', getAllDestinations);
router.get('/:id', getDestination);
router.post('/', checkUserAuth, createDestination);
router.put('/:id', checkUserAuth, updateDestination);
router.delete('/:id', checkUserAuth, deleteDestination);

export default router; 