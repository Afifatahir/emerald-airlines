export interface Destination {
    id: number;
    name: string;
    country: string;
    city: string;
    airport_code: string;
    created_at?: string;
    updated_at?: string;
}

export interface TicketPrice {
    id: number;
    from_destination_id: number;
    to_destination_id: number;
    price: number;
    class_type: 'economy' | 'business' | 'first';
    created_at?: string;
    updated_at?: string;
}

export interface Booking {
    id: number;
    passenger_name: string;
    passenger_email: string;
    passenger_phone: string;
    from_destination_id: number;
    to_destination_id: number;
    travel_date: string;
    ticket_price_id: number;
    status: 'pending' | 'confirmed' | 'cancelled';
    created_at?: string;
    updated_at?: string;
} 