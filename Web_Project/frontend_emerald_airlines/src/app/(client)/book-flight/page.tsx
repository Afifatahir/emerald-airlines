"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Destination } from "@/app/types";


const bookingSchema = z.object({
  from: z.string().min(1, "Please select departure city"),
  to: z.string().min(1, "Please select destination"),
  classType: z.string().min(1, "Please select class"),
  travelDate: z.string().min(1, "Please select travel date"),
  passengerName: z.string().min(2, "Name must be at least 2 characters"),
  passengerEmail: z.string().email("Please enter a valid email"),
  passengerPhone: z.string().min(10, "Please enter a valid phone number"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookFlightPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [bookingFormData, setBookingFormData] = useState<any>(null);
  const [ticketPrice, setTicketPrice] = useState<any | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(
          "http://localhost:5555/api/destinations/",
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }
        const data = await response.json();
        setDestinations(data);
      } catch (err) {
        console.error("Error fetching destinations:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  // Watch for changes in from, to, and classType fields
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "from" || name === "to" || name === "classType") {
        setTicketPrice(null);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = async (data: BookingFormData) => {
    try {
      console.log("get ticket price ", data);

      const response = await fetch(
        `http://localhost:5555/api/ticket-prices/${data.from}/${data.to}/${data.classType}`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch ticket price");
      }
      const priceData = await response.json();
      setTicketPrice(priceData);
      setBookingFormData(data);
    } catch (error) {
      console.error("Error fetching ticket price:", error);
    }
  };

  const bookTicket = async () => {
    try {
      const bookingData = {
        passenger_name: bookingFormData.passengerName,
        passenger_email: bookingFormData.passengerEmail,
        passenger_phone: bookingFormData.passengerPhone,
        from_destination_id: bookingFormData.from,
        to_destination_id: bookingFormData.to,
        travel_date: bookingFormData.travelDate,
        ticket_price_id: ticketPrice?.id,
        status: "confirmed",
      };

      const response = await fetch(`http://localhost:5555/api/bookings/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error("Failed to book ticket");
      }

      setBookingSuccess(true);

      setTimeout(() => setBookingSuccess(false), 5000);

    } catch (error) {
      console.error("Error booking ticket:", error);
    }
  };

  const classTypes = ["economy", "business", "first"];

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto p-8 text-center text-white">
        Loading destinations...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 text-white text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Book Your Flight
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Travelling From
              </label>
              <select
                {...register("from")}
                className="w-full p-3 border  bg-gray-800 border-gray-700 rounded-lg text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select departure city</option>
                {destinations.map((destination) => (
                  <option key={destination.id} value={destination.id}>
                    {destination.city} ({destination.airport_code}) -{" "}
                    {destination.country}
                  </option>
                ))}
              </select>
              {errors.from && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.from.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Destination
              </label>
              <select
                {...register("to")}
                className="w-full p-3 border bg-gray-800 border-gray-700 rounded-lg text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select destination</option>
                {destinations.map((destination) => (
                  <option key={destination.id} value={destination.id}>
                    {destination.city} ({destination.airport_code}) -{" "}
                    {destination.country}
                  </option>
                ))}
              </select>
              {errors.to && (
                <p className="text-red-400 text-sm mt-2">{errors.to.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Class Type
              </label>
              <select
                {...register("classType")}
                className="w-full p-3 border bg-gray-800 border-gray-700 rounded-lg text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select class</option>
                {classTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.classType && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.classType.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Travel Date
              </label>
              <input
                type="date"
                {...register("travelDate")}
                min={new Date().toISOString().split("T")[0]}
                className="w-full p-3 border bg-gray-800 border-gray-700 rounded-lg text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {errors.travelDate && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.travelDate.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Passenger Name
              </label>
              <input
                type="text"
                {...register("passengerName")}
                className="w-full p-3 border bg-gray-800 border-gray-700 rounded-lg text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter passenger name"
              />
              {errors.passengerName && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.passengerName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Passenger Email
              </label>
              <input
                type="email"
                {...register("passengerEmail")}
                className="w-full p-3 border bg-gray-800 border-gray-700 rounded-lg text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter email address"
              />
              {errors.passengerEmail && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.passengerEmail.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Passenger Phone
              </label>
              <input
                type="tel"
                {...register("passengerPhone")}
                className="w-full p-3 border bg-gray-800 border-gray-700 rounded-lg text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter phone number"
              />
              {errors.passengerPhone && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.passengerPhone.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium text-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Get Ticket Price
            </button>

            {ticketPrice && (
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-xl border border-gray-700 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-gray-400 text-sm">Total Amount</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-white">
                        ${ticketPrice.price}
                      </span>
                      <span className="text-gray-400 text-sm ml-2">USD</span>
                    </div>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            <button
              type="button"
              disabled={!ticketPrice}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium text-lg focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700"
              onClick={bookTicket}
            >
              Book Ticket
            </button>
          </div>
        </form>

        {bookingSuccess && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
            Ticket booked successfully!
          </div>
        )}
      </div>
    </div>
  );
}
