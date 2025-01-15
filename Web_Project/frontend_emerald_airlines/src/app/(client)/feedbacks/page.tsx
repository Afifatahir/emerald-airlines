import Link from "next/link";

export default function FeedbacksPage() {
  const testimonials = [
    {
      id: 1,
      name: "Bonnie talbet",
      role: "CUSTOMER",
      image: "/images/feedbacks/testimonial-1-2.jpg",
      content:
        "The design is modern and appealing, with a clean layout that enhances user experience..",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah albert",
      role: "CUSTOMER",
      image: "/images/feedbacks/testimonial-1-3.jpg",
      content:
        "The page loads quickly, making it accessible even on slower internet connections.",
      rating: 5,
    },
    {
      id: 3,
      name: "John Doe",
      role: "CUSTOMER",
      image: "/images/feedbacks/testimonial-1-4.jpg",
      content:
        "The color scheme is visually appealing and creates a pleasant atmosphere on the page.",
      rating: 5,
    },
    {
      id: 4,
      name: "Jimmy smith",
      role: "CUSTOMER",
      image: "/images/feedbacks/testimonial-1-5.jpg",
      content:
        "The booking form is user-friendly and straightforward to complete.",
      rating: 5,
    },
    {
      id: 5,
      name: "Aleesha brown",
      role: "CUSTOMER",
      image: "/images/feedbacks/testimonial-1-6.jpg",
      content:
        "The mobile layout is responsive and adapts well to different screen sizes.",
      rating: 5,
    },
  ];

  return (
    <>
      {/* Hero section with background image */}
      <div className="relative h-[60vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/feedbacks/hero.jpg')",
          }}
        />
        {/* Dark green overlay */}
        <div className="absolute inset-0 bg-green-900/80" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-8">Feedbacks</h1>

          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full">
            <Link href="/" className="hover:text-green-300 transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-green-300">Feedbacks</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h4 className="text-[#B8860B] font-medium mb-4">
              CUSTOMERS FEEDBACK
            </h4>
            <h2 className="text-4xl font-bold text-[#0B4619]">
              What they're talking about
              <br />
              our flight services
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-[#0B4619]">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                  <span className="text-4xl text-[#B8860B]">"</span>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
                <div className="flex text-[#B8860B] mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
