import { faker } from '@faker-js/faker';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Array of real airport codes and cities for more realistic data
const airports = [
    { code: 'JFK', city: 'New York', country: 'United States' },
    { code: 'LHR', city: 'Lahore', country: 'Pakistan' },
    { code: 'DXB', city: 'Dubai', country: 'United Arab Emirates' },
    { code: 'SIN', city: 'Singapore', country: 'Singapore' },
    { code: 'HND', city: 'Tokyo', country: 'Japan' },
    { code: 'CDG', city: 'Paris', country: 'France' },
    { code: 'FRA', city: 'Frankfurt', country: 'Germany' },
    { code: 'IST', city: 'Istanbul', country: 'Turkey' },
    { code: 'AMS', city: 'Amsterdam', country: 'Netherlands' },
    { code: 'SYD', city: 'Sydney', country: 'Australia' }
];

async function seedDestinations() {
    console.log('Seeding destinations...');

    const destinations = airports.map((airport) => ({
        name: `${airport.city} International Airport`,
        city: airport.city,
        country: airport.country,
        airport_code: airport.code,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }));

    const { data, error } = await supabase
        .from('destinations')
        .upsert(destinations, { onConflict: 'airport_code' })
        .select();

    if (error) {
        console.error('Error seeding destinations:', error);
        return [];
    }

    console.log('Destinations seeded successfully');
    return data;
}

async function seedTicketPrices(destinations: any[]) {
    console.log('Seeding ticket prices...');

    const ticketPrices = [];
    const classTypes = ['economy', 'business', 'first'];

    // Create ticket prices between all destination pairs
    for (let from of destinations) {
        for (let to of destinations) {
            if (from.id === to.id) continue; // Skip same destination pairs

            // Create a price for each class type
            for (const classType of classTypes) {
                // Base price depends on class type
                let basePrice = classType === 'economy' ? 200 : classType === 'business' ? 500 : 1000;

                ticketPrices.push({
                    from_destination_id: from.id,
                    to_destination_id: to.id,
                    price: faker.number.int({ min: basePrice, max: basePrice * 2 }),
                    class_type: classType,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                });
            }
        }
    }

    const { data, error } = await supabase
        .from('ticket_prices')
        .insert(ticketPrices)
        .select();

    if (error) {
        console.error('Error seeding ticket prices:', error);
        return [];
    }

    console.log('Ticket prices seeded successfully');
    return data;
}

async function seedBookings(ticketPrices: any[]) {
    console.log('Seeding bookings...');

    const bookings = [];
    const statuses = ['pending', 'confirmed', 'cancelled'];

    // Create 50 random bookings
    for (let i = 0; i < 50; i++) {
        const randomTicketPrice = faker.helpers.arrayElement(ticketPrices);

        bookings.push({
            passenger_name: faker.person.fullName(),
            passenger_email: faker.internet.email(),
            passenger_phone: faker.phone.number(),
            from_destination_id: randomTicketPrice.from_destination_id,
            to_destination_id: randomTicketPrice.to_destination_id,
            travel_date: faker.date.future().toISOString(),
            ticket_price_id: randomTicketPrice.id,
            status: faker.helpers.arrayElement(statuses),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        });
    }

    const { data, error } = await supabase
        .from('bookings')
        .insert(bookings)
        .select();

    if (error) {
        console.error('Error seeding bookings:', error);
        return;
    }

    console.log('Bookings seeded successfully');
}

async function main() {
    try {
        // Seed in sequence because of foreign key dependencies
        const destinations = await seedDestinations();
        const ticketPrices = await seedTicketPrices(destinations);
        // await seedBookings(ticketPrices);

        console.log('All data seeded successfully!');
    } catch (error) {
        console.error('Error in seeding:', error);
    }
}

main(); 