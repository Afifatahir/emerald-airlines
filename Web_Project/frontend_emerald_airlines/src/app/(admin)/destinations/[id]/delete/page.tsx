"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { use } from "react";

interface Destination {
  id: string;
  name: string;
  city: string;
  country: string;
  airport_code: string;
}

export default function DeleteDestinationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const resolvedParams = use(params);

  useEffect(() => {
    fetchDestination();
  }, []);

  const fetchDestination = async () => {
    try {
      const response = await fetch(
        `http://localhost:5555/api/destinations/${resolvedParams.id}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch destination");
      }
      const data = await response.json();
      setDestination(data);
    } catch (error) {
      setError("Failed to load destination");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5555/api/destinations/${resolvedParams.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete destination");
      }

      router.push("/destinations");
    } catch (error) {
      setError("Failed to delete destination");
      console.error("Error:", error);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="text-center text-white">Loading...</div>
      </div>
    );
  }

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
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
          <h1 className="text-2xl font-bold mb-6 text-white">
            Delete Destination
          </h1>

          <div className="mb-6">
            <p className="text-gray-200 mb-4">
              Are you sure you want to delete this destination?
            </p>
            <div className="bg-gray-700 p-4 rounded-md mb-6">
              <h2 className="text-lg font-semibold text-white mb-2">
                {destination?.name}
              </h2>
              <p className="text-gray-300">
                {destination?.city}, {destination?.country}
              </p>
              <p className="text-gray-300 font-mono">
                Airport Code: {destination?.airport_code}
              </p>
            </div>
            <p className="text-red-400 text-sm">
              This action cannot be undone.
            </p>
          </div>

          <div className="flex justify-end space-x-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/destinations")}
              className="border-gray-600 text-gray-200 hover:bg-gray-700"
            >
              Cancel
            </Button>
            <Button
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Delete Destination
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
