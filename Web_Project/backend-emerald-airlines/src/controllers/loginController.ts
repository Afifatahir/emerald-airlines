import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        console.log("loginUser: ", email, password);

        // Input validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required'
            });
        }

        // Authenticate user with Supabase
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return res.status(401).json({
                success: false,
                message: error.message
            });
        }

        // Return success response with user data and session
        return res.status(200).json({
            success: true,
            message: 'Login successful',
            user: data.user,
            session: data.session
        });

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};


