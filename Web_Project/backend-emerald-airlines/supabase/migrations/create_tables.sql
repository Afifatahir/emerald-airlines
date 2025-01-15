-- Create destinations table if it doesn't exist already
create table if not exists public.destinations (
    id uuid default gen_random_uuid() primary key,
    name text not null,
    city text not null,
    country text not null,
    airport_code text not null unique,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);

-- Create ticket_prices table
create table if not exists public.ticket_prices (
    id uuid default gen_random_uuid() primary key,
    from_destination_id uuid references public.destinations(id),
    to_destination_id uuid references public.destinations(id),
    price integer not null,
    class_type text not null,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);

-- Create bookings table
create table if not exists public.bookings (
    id uuid default gen_random_uuid() primary key,
    passenger_name text not null,
    passenger_email text not null,
    passenger_phone text not null,
    from_destination_id uuid references public.destinations(id),
    to_destination_id uuid references public.destinations(id),
    travel_date timestamp with time zone not null,
    ticket_price_id uuid references public.ticket_prices(id),
    status text not null,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
); 