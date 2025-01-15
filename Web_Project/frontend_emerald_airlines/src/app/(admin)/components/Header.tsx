"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5555/api/logout", {
        method: "POST",
      });

      if (response.ok) {
        sessionStorage.removeItem("token");
        router.push("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <header className="bg-gray-800 shadow-md">
      <div className="max-w-full mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-emerald-400">
          Emerald Airlines
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
