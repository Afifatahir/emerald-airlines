import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* Hero section with background image */}
      <div className="relative h-[60vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/services/hero.jpg')",
          }}
        />
        {/* Dark green overlay */}
        <div className="absolute inset-0 bg-green-900/80" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-8">Contact</h1>

          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full">
            <Link href="/" className="hover:text-green-300 transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-green-300">Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 px-4 bg-white">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 font-medium mb-4">CONTACT US</p>
          <h2 className="text-4xl md:text-5xl font-bold text-green-950 max-w-2xl mx-auto">
            Feel free to get in touch with the Emerald Airlines
          </h2>
        </div>

        {/* Contact Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Card */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-start mb-6">
              <p className="text-amber-600 font-medium">KNOW</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 22h14M5 2h14M12 2v20m-7-4l7-7 7 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-950 mb-4">About us</h3>
            <p className="text-gray-600">
              "We are dedicated to providing exceptional air travel experiences,
              combining comfort, reliability, and innovation for every journey."
            </p>
          </div>

          {/* Send Email Card */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-start mb-6">
              <p className="text-amber-600 font-medium">WRITE</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-950 mb-4">
              Send email
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600">contact@emeraldairlines.com</p>
              <p className="text-gray-600">info@emeraldairlines.com</p>
            </div>
          </div>

          {/* Call Now Card */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-start mb-6">
              <p className="text-amber-600 font-medium">BOOK</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-950 mb-4">Call now</h3>
            <div className="space-y-2">
              <p className="text-gray-600">+92 (300) 123-4567</p>
              <p className="text-gray-600">+92 (333) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
