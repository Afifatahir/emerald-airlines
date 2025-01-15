import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

export const getAllBookings = async (_req: Request, res: Response) => {
    try {
        const { data, error } = await supabase
            .from('bookings')
            .select(`
        *,
        from_destination:destinations!from_destination_id(*),
        to_destination:destinations!to_destination_id(*),
        ticket_price:ticket_prices(*)
      `)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching bookings' });
    }
};

export const getBooking = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('bookings')
            .select(`
        *,
        from_destination:destinations!from_destination_id(*),
        to_destination:destinations!to_destination_id(*),
        ticket_price:ticket_prices(*)
      `)
            .eq('id', id)
            .single();

        if (error) throw error;
        if (!data) return res.status(404).json({ error: 'Booking not found' });

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching booking' });
    }
};

export const updateBookingStatus = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!['pending', 'confirmed', 'cancelled'].includes(status)) {
            return res.status(400).json({ error: 'Invalid status' });
        }

        const { data, error } = await supabase
            .from('bookings')
            .update({ status })
            .eq('id', id)
            .select(`
        *,
        from_destination:destinations!from_destination_id(*),
        to_destination:destinations!to_destination_id(*),
        ticket_price:ticket_prices(*)
      `)
            .single();

        if (error) throw error;
        if (!data) return res.status(404).json({ error: 'Booking not found' });

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Error updating booking status' });
    }
};

export const createBooking = async (req: Request, res: Response) => {
    try {
        console.log("Creating booking...", req.body);
        const { data, error } = await supabase.from('bookings').insert(req.body);
        if (error) throw error;
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error creating booking:", error);
        return res.status(500).json({ error: 'Error creating booking' });
    }
}