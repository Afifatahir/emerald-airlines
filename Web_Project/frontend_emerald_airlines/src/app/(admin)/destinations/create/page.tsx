"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Destination {
  name: string;
  city: string;
  country: string;
  airport_code: string;
}

export default function CreateDestinationPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [destination, setDestination] = useState<Destination>({
    name: "",
    city: "",
    country: "",
    airport_code: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5555/api/destinations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify(destination),
      });

      if (!response.ok) {
        throw new Error("Failed to create destination");
      }

      router.push("/destinations");
    } catch (error) {
      setError("Failed to create destination");
      console.error("Error:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDestination((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-white">
          Create New Destination
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-200 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={destination.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Enter destination name"
            />
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-200 mb-1"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={destination.city}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Enter city name"
            />
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-200 mb-1"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={destination.country}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Enter country name"
            />
          </div>

          <div>
            <label
              htmlFor="airport_code"
              className="block text-sm font-medium text-gray-200 mb-1"
            >
              Airport Code
            </label>
            <input
              type="text"
              id="airport_code"
              name="airport_code"
              value={destination.airport_code}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              maxLength={3}
              pattern="[A-Z]{3}"
              placeholder="e.g. JFK"
              title="Airport code must be 3 uppercase letters"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/destinations")}
              className="border-gray-600 text-gray-200 hover:bg-gray-700"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Create Destination
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
