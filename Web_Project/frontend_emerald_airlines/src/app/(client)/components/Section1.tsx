import Image from "next/image";

const Section1 = () => {
  return (
    <section className="container mx-auto px-4 py-32">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20 mx-8">
        <div className="space-y-6">
          <span className="text-yellow-600 font-medium">GET TO KNOW US</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-green-900 leading-tight">
            Our jetly save your time and give you comfort in flights
          </h1>
          <p className="text-gray-600">
            Our platform allows you to easily search, select, and reserve
            flights, offering a wide range of options to suit your travel needs.
            Begin your journey with us today and experience hassle-free travel
            planning!
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
              <span>There are many flight options available.</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-yellow-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
              <span>but most come with unique adjustments.</span>
            </li>
          </ul>
          <div className="flex items-center gap-6">
            <button className="bg-green-900 text-white px-6 py-3 rounded-md hover:bg-green-800 transition">
              BOOK NOW
            </button>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">CALL ANYTIME</span>
              <span className="font-semibold">+92( 8800 ) - 6780</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/section1/pilots.avif"
            alt="Flight attendants"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <div className="absolute bottom-0 right-0 bg-yellow-500 p-4 rounded-tl-lg">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-white">8800</span>
              <div className="text-white">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span>SATISFIED CLIENTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
        {/* Card 1 */}
        <div className="bg-yellow-600 p-8 rounded-lg text-white">
          <span className="text-sm">COLLECT MILES</span>
          <h3 className="text-2xl font-bold mt-4 mb-4">
            Get discount next flights with our card
          </h3>
          <p className="mb-6">
            Book your next flight with us and enjoy exclusive discounts!
          </p>
          <button className="bg-white text-yellow-600 px-6 py-2 rounded-md hover:bg-gray-100 transition">
            GET CARD
          </button>
        </div>

        {/* Card 2 */}
        <div className="relative group overflow-hidden rounded-lg h-[300px]">
          <Image
            src="/images/section1/offers.jpg"
            alt="Exclusive offers"
            width={400}
            height={300}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white">
                Exclusive new offers
              </h3>
            </div>
          </div>
          <button className="absolute top-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
            <svg
              className="w-5 h-5"
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
        </div>

        {/* Card 3 */}
        <div className="relative group overflow-hidden rounded-lg h-[300px]">
          <Image
            src="/images/section1/cabin-crew.jpg"
            alt="Join cabin crew"
            width={400}
            height={300}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white">
                Join our cabin crew
              </h3>
            </div>
          </div>
          <button className="absolute top-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
            <svg
              className="w-5 h-5"
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
        </div>
      </div>
    </section>
  );
};

export default Section1;
