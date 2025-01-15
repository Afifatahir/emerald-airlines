"use client";

import { useEffect, useState } from "react";

interface Booking {
  id: string;
  passenger_name: string;
  passenger_email: string;
  passenger_phone: string;
  travel_date: string;
  status: "pending" | "confirmed" | "cancelled";
  from_destination: {
    name: string;
    city: string;
    country: string;
    airport_code: string;
  };
  to_destination: {
    name: string;
    city: string;
    country: string;
    airport_code: string;
  };
  ticket_price: {
    price: number;
    class_type: string;
  };
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5555/api/bookings/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }

        const data = await response.json();
        console.log("data: ", data);

        setBookings(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-100">
            Total Bookings
          </h2>
          <p className="text-3xl font-bold text-blue-400">
            {Array.isArray(bookings) ? bookings.length : 0}
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-100">Revenue</h2>
          <p className="text-3xl font-bold text-green-400">
            $
            {Array.isArray(bookings)
              ? bookings
                  .reduce((sum, booking) => sum + booking.ticket_price.price, 0)
                  .toLocaleString()
              : "0"}
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-100">
            Active Flights
          </h2>
          <p className="text-3xl font-bold text-purple-400">
            {Array.isArray(bookings)
              ? bookings.filter((b) => b.status === "confirmed").length
              : 0}
          </p>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
          {loading && <p className="text-gray-600">Loading bookings...</p>}
          {error && <p className="text-red-600">Error: {error}</p>}
          {!loading &&
            !error &&
            Array.isArray(bookings) &&
            bookings.length > 0 && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Passenger
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        From
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        To
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Travel Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Class
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bookings.map((booking) => (
                      <tr key={booking.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {booking.passenger_name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {booking.passenger_email}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {booking.from_destination.city}
                          </div>
                          <div className="text-sm text-gray-500">
                            {booking.from_destination.airport_code}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {booking.to_destination.city}
                          </div>
                          <div className="text-sm text-gray-500">
                            {booking.to_destination.airport_code}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {new Date(booking.travel_date).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {booking.ticket_price.class_type}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            ${booking.ticket_price.price}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${
                            booking.status === "confirmed"
                              ? "bg-green-100 text-green-800"
                              : booking.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                          >
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          {!loading &&
            !error &&
            Array.isArray(bookings) &&
            bookings.length === 0 && (
              <p className="text-gray-600">No bookings found.</p>
            )}
        </div>
      </div>
    </div>
  );
}
