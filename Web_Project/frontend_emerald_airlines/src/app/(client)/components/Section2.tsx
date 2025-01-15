import Image from "next/image";

const services = [
  {
    title: "Business charter",
    description:
      "Elevate your business travel with our premium business charter services.",
    image: "/images/section2/business-charter.jpg",
    category: "FLIGHT FOR",
  },
  {
    title: "Private charter",
    description:
      "Experience luxury and flexibility with our exclusive private charter flights.",
    image: "/images/section2/private-charter.jpg",
    category: "FLIGHT FOR",
  },
  {
    title: "Jet rentals",
    description: "Rent a private jet for the ultimate convenience and comfort.",
    image: "/images/section2/rentals.jpeg",
    category: "FLIGHT FOR",
  },
  {
    title: "High profile people",
    description:
      "Tailored travel solutions for high-profile individuals seeking privacy and luxury.",
    image: "/images/section2/vip.webp",
    category: "FLIGHT FOR",
  },
];

const stats = [
  {
    number: "395",
    label: "Professional pilots",
    icon: "/images/section2/svgs/pilots.svg",
  },
  {
    number: "166",
    label: "Jet airplanes",
    icon: "/images/section2/svgs/airplane.svg",
  },
  {
    number: "138",
    label: "Directions",
    icon: "/images/section2/svgs/destination.svg",
  },
  {
    number: "280",
    label: "World airports",
    icon: "/images/section2/svgs/airports.svg",
  },
];

export default function Section2() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h3 className="text-[#B4925F] uppercase text-sm font-medium mb-4">
          WHAT WE'RE OFFERING
        </h3>
        <h2 className="text-[#1B3B36] text-4xl md:text-5xl font-semibold max-w-2xl mx-auto">
          Select the service according to your work
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl"
          >
            <div className="relative h-[400px] w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-white z-10">
              <p className="text-[#B4925F] text-sm font-medium mb-2">
                {service.category}
              </p>
              <h3 className="text-[#1B3B36] text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="bg-[#1B3B36] p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 rounded-3xl">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <Image
              src={stat.icon}
              alt={stat.label}
              width={48}
              height={48}
              className="mx-auto mb-4"
            />
            <div className="text-white text-4xl font-bold mb-2">
              {stat.number}
            </div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
