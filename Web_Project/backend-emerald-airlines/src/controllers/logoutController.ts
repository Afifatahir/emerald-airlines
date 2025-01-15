import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

export const handleLogout = async (req: Request, res: Response) => {
    try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
        return res.status(200).json({ success: true })
    } catch (error) {
        console.error('Error logging out:', error)
        return res.status(500).json({ success: false, error })
    }
}
