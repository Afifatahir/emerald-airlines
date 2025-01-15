import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import destinationRoutes from './routes/destinationRoutes';
import ticketPriceRoutes from './routes/ticketPriceRoutes';
import bookingRoutes from './routes/bookingRoutes';
import loginRoutes from './routes/loginRoutes';
import verifyRoutes from './routes/verifyRoutes';
import logoutRoutes from './routes/logoutRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5555;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/destinations', destinationRoutes);
app.use('/api/ticket-prices', ticketPriceRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/logout', logoutRoutes);
app.use('/api/auth/verify', verifyRoutes);

// Health check endpoint
app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Error handling middleware
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});