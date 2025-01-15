import { Request, Response } from 'express';
import { supabase } from '../config/supabase';
import { Destination } from '../types';

export const getAllDestinations = async (_req: Request, res: Response) => {
    try {
        const { data, error } = await supabase
            .from('destinations')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching destinations' });
    }
};

export const getDestination = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('destinations')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        if (!data) return res.status(404).json({ error: 'Destination not found' });

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching destination' });
    }
};

export const createDestination = async (req: Request, res: Response) => {
    try {
        const destination: Omit<Destination, 'id' | 'created_at' | 'updated_at'> = req.body;
        const { data, error } = await supabase
            .from('destinations')
            .insert([destination])
            .select()
            .single();

        if (error) throw error;
        return res.status(201).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Error creating destination' });
    }
};

export const updateDestination = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updates: Partial<Destination> = req.body;

        const { data, error } = await supabase
            .from('destinations')
            .update(updates)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        if (!data) return res.status(404).json({ error: 'Destination not found' });

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Error updating destination' });
    }
};

export const deleteDestination = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { error } = await supabase
            .from('destinations')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return res.status(200).json({ message: 'Destination deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Error deleting destination' });
    }
}; 