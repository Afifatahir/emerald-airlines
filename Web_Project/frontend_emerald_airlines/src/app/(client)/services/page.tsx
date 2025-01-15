import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Business charter",
    image: "/images/services/services-1-1.jpg",
    description:
      "Elevate your business travel with our premium business charter services.",
    alt: "Business Charter",
  },
  {
    id: 2,
    title: "Private charter",
    image: "/images/services/services-1-2.jpg",
    description:
      "Experience luxury and flexibility with our exclusive private charter flights",
    alt: "Private Charter",
  },
  {
    id: 3,
    title: "Jet rentals",
    image: "/images/services/services-1-3.jpg",
    description: "Rent a private jet for the ultimate convenience and comfort.",
    alt: "Jet Rentals",
  },
  {
    id: 4,
    title: "High profile people",
    image: "/images/services/services-1-4.jpg",
    description:
      "Tailored travel solutions for high-profile individuals seeking privacy and luxury.",
    alt: "High Profile",
  },
  {
    id: 5,
    title: "Music tours",
    image: "/images/services/services-1-5.jpg",
    description: "Seamless travel for unforgettable music tours.",
    alt: "Music Tours",
  },
  {
    id: 6,
    title: "Sports teams",
    image: "/images/services/services-1-6.jpg",
    description: "Effortless travel for sports teams and events.",
    alt: "Sports Teams",
  },
];

export default function ServicesPage() {
  return (
    <div className="relative">
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
          <h1 className="text-5xl font-bold mb-8">Our services</h1>

          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full">
            <Link href="/" className="hover:text-green-300 transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-green-300">SERVICES</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto py-16 px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-amber-600 font-medium mb-4">
            WHAT WE'RE OFFERING
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-green-900">
            Select the service
            <br />
            according to your work
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="p-6">
                <p className="text-amber-600 font-medium mb-2">FIGHT FOR</p>
                <h4 className="text-2xl font-bold text-green-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <button className="absolute top-6 right-6 bg-amber-600 p-3 rounded-full text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
