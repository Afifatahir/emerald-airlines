import { NextFunction, Request, Response } from 'express';
import { supabase } from '../config/supabase';



export const verifyAuth = async (req: Request, res: Response, next: NextFunction) => {


    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'No authorization header' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const { data: { user }, error } = await supabase.auth.getUser(token);

        if (error || !user) {
            console.log('verifyAuth controller error ', error);
            return res.status(401).json({ error: 'Invalid token' });
        }

        // Add user to request object
        (req as any).user = user;

        return res.status(200).json({ message: 'Token is valid' });

    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};