"use client";

import { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = sessionStorage.getItem("token");

        if (!token) {
          router.push("/login");
          return;
        }

        const response = await fetch("http://localhost:5555/api/auth/verify/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("verify auth: ", response);

        if (!response.ok) {
          router.push("/login");
        }
      } catch (error) {
        console.log("error: ", error);
        router.push("/login");
      }
    };

    checkAuth();
  }, [router]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        <div className="min-h-screen bg-gray-900">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
