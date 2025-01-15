import Link from "next/link";

export default function AboutUsPage() {
  return (
    <div className="relative">
      {/* Hero section with background image */}
      <div className="relative h-[60vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/about-us/hero.jpg')",
          }}
        />
        {/* Dark green overlay */}
        <div className="absolute inset-0 bg-green-900/80" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-8">About us</h1>

          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full">
            <Link href="/" className="hover:text-green-300 transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-green-300">About Us</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image section */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img
                src="/images/about-us/about-four-img-1.jpg"
                alt="Pilot in uniform"
                className="w-full rounded-lg"
              />
            </div>
            {/* Decorative background */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-[#B8860B] -z-10" />
          </div>

          {/* Content section */}
          <div className="lg:w-1/2">
            <h3 className="text-[#B8860B] font-medium mb-4">ABOUT COMPANY</h3>
            <h2 className="text-4xl font-bold text-[#0B4619] mb-6">
              The best private jet charters
            </h2>
            <p className="text-[#B8860B] font-medium mb-4">
              There are numerous variations of available services, but most
              offer unique enhancements
            </p>
            <p className="text-gray-600 mb-8">
              We specialize in premium travel solutions, ensuring comfort and
              style. Whether for business or leisure, our services are tailored
              to meet your needs.
            </p>
            <button className="bg-[#0B4619] text-white px-8 py-3 rounded-full hover:bg-[#0B4619]/90 transition-colors">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h4 className="text-amber-600 font-medium mb-2">AIRCRAFT CREW</h4>
            <h2 className="text-[2.5rem] font-bold text-[#004733] leading-tight">
              Meet the professional
              <br />
              private jet crew
            </h2>
          </div>

          {/* Crew Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Crew Member 1 */}
            <div className="text-center">
              <div className="mb-6">
                <img
                  src="/images/about-us/team-1-1.jpg"
                  alt="Senior Pilot"
                  className="w-full rounded-lg"
                />
              </div>
              <h3 className="text-[#004733] text-2xl font-bold mb-1">
                Jing Park
              </h3>
              <p className="text-gray-600 uppercase text-sm mb-4">
                SENIOR PILOT
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-[#004733] hover:text-amber-600">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-[#004733] hover:text-amber-600">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-[#004733] hover:text-amber-600">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#" className="text-[#004733] hover:text-amber-600">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Crew Member 2 */}
            <div className="text-center">
              <div className="mb-6">
                <img
                  src="/images/about-us/team-1-2.jpg"
                  alt="Service Manager"
                  className="w-full rounded-lg"
                />
              </div>
              <h3 className="text-[#004733] text-2xl font-bold mb-1">
                Mike hardson
              </h3>
              <p className="text-gray-600 uppercase text-sm mb-4">
                SERVICE MANAGER
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-[#004733] hover:text-amber-600">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-[#004733] hover:text-amber-600">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-[#004733] hover:text-amber-600">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#" className="text-[#004733] hover:text-amber-600">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Crew Member 3 */}
            <div className="text-center">
              <div className="mb-6">
                <img
                  src="/images/about-us/team-1-3.jpg"
                  alt="Flight Attendant"
                  className="w-full rounded-lg"
                />
              </div>
              <h3 className="text-[#004733] text-2xl font-bold mb-1">
                Jennifer Christ
              </h3>
              <p className="text-gray-600 uppercase text-sm mb-4">
                FLIGHT ATTENDANT
              </p>
              <div className="flex justify-center gap-4">
                <a href="#" className="text-[#004733] hover:text-amber-600">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-[#004733] hover:text-amber-600">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-[#004733] hover:text-amber-600">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#" className="text-[#004733] hover:text-amber-600">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
