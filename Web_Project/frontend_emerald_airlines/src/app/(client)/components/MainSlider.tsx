"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/images/hero/bg1.jpg",
    subtitle: "Save time and fly with comfort",
    title: "Luxury Jet Flights",
  },
  {
    id: 2,
    image: "/images/hero/bg2.jpg",
    subtitle: "Save time and fly with comfort",
    title: "Luxury Jet Flights",
  },
  {
    id: 3,
    image: "/images/hero/bg3.jpg",
    subtitle: "Save time and fly with comfort",
    title: "Luxury Jet Flights",
  },
];

export default function MainSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000); // Change slide every 2 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false); // Pause auto-play when manually navigating
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false); // Pause auto-play when manually navigating
  };

  return (
    <section className="relative h-[90vh]">
      {/* Slider */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-xl mb-4">{slide.subtitle}</p>
                <h2 className="text-6xl font-bold mb-8">{slide.title}</h2>
                <div className="space-x-8 pt-8">
                  <Link
                    href="/book-flight"
                    className="relative inline-flex items-center px-8 py-3 font-semibold text-white rounded-full overflow-hidden group bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 tracking-wide hover:scale-105 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-yellow-600 before:via-yellow-600 before:to-yellow-800 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 shadow-[0_0_15px_rgba(234,179,8,0.5)] hover:shadow-[0_0_30px_rgba(234,179,8,0.8)] backdrop-blur-sm border border-yellow-400/20"
                  >
                    <span className="relative flex items-center gap-2">
                      Book Now
                      <Image
                        src="/images/hero/book.svg"
                        alt="Book Icon"
                        width={20}
                        height={20}
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 p-2 rounded-full"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
}
