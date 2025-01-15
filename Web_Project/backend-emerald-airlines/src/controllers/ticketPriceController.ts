import { Request, Response } from 'express';
import { supabase } from '../config/supabase';
import { TicketPrice } from '../types';

// 
// *, from_destination:destinations!from_destination_id(*), to_destination:destinations!to_destination_id(*)
// 
// This query is performing a join operation with the following components:

// * - Selects all columns from the main ticket_prices table

// from_destination:destinations!from_destination_id(*) means:

// from_destination is the alias for the joined data
// destinations is the table being joined
// !from_destination_id indicates a foreign key relationship
// (*) means select all columns from the joined destinations table

// to_destination:destinations!to_destination_id(*) is similar but for the destination airport:

// to_destination is another alias
// Joins with the same destinations table again
// Uses to_destination_id as the foreign key
// (*) selects all columns from this joined table

export const getAllTicketPrices = async (_req: Request, res: Response) => {
    try {
        const { data, error } = await supabase
            .from('ticket_prices')
            .select(`
        *,
        from_destination:destinations!from_destination_id(*),
        to_destination:destinations!to_destination_id(*)
      `)
            .order('created_at', { ascending: false });

        if (error) throw error;
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching ticket prices' });
    }
};

export const getTicketPrice = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('ticket_prices')
            .select(`
        *,
        from_destination:destinations!from_destination_id(*),
        to_destination:destinations!to_destination_id(*)
      `)
            .eq('id', id)
            .single();

        if (error) throw error;
        if (!data) return res.status(404).json({ error: 'Ticket price not found' });

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching ticket price' });
    }
};

export const createTicketPrice = async (req: Request, res: Response) => {
    try {
        const ticketPrice: Omit<TicketPrice, 'id' | 'created_at' | 'updated_at'> = req.body;
        const { data, error } = await supabase
            .from('ticket_prices')
            .insert([ticketPrice])
            .select(`
        *,
        from_destination:destinations!from_destination_id(*),
        to_destination:destinations!to_destination_id(*)
      `)
            .single();

        if (error) throw error;
        return res.status(201).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Error creating ticket price' });
    }
};

export const updateTicketPrice = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updates: Partial<TicketPrice> = req.body;

        const { data, error } = await supabase
            .from('ticket_prices')
            .update(updates)
            .eq('id', id)
            .select(`
        *,
        from_destination:destinations!from_destination_id(*),
        to_destination:destinations!to_destination_id(*)
      `)
            .single();

        if (error) throw error;
        if (!data) return res.status(404).json({ error: 'Ticket price not found' });

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Error updating ticket price' });
    }
};

export const deleteTicketPrice = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { error } = await supabase
            .from('ticket_prices')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return res.status(200).json({ message: 'Ticket price deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Error deleting ticket price' });
    }
};

export const getTicketPriceByRoute = async (req: Request, res: Response) => {
    try {
        console.log(req.params);
        const { from_destination_id, to_destination_id, class_type } = req.params;

        const { data, error } = await supabase
            .from('ticket_prices')
            .select(`
                *,
                from_destination:destinations!from_destination_id(*),
                to_destination:destinations!to_destination_id(*)
            `)
            .eq('from_destination_id', from_destination_id)
            .eq('to_destination_id', to_destination_id)
            .eq('class_type', class_type)
            ;

        if (error) throw error;
        if (!data) return res.status(404).json({
            error: 'No ticket price found for the specified route and class'
        });

        return res.status(200).json(data[0]);
    } catch (error) {
        return res.status(500).json({
            error: 'Error fetching ticket price for the specified route'
        });
    }
}; 