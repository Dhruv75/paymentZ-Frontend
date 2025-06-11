import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart",
      content: "Revolutionary platform that transformed our payment processing. The speed is unmatched.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "CFO, Global Corp",
      content: "Security and reliability at its finest. Our customers love the seamless experience.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Founder, EcoCommerce",
      content: "Game-changing technology that scales with our business. Absolutely incredible.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Loved by <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Thousands</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600 hover:border-yellow-400 transform hover:scale-105 transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-lg mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="text-white font-semibold">{testimonial.name}</div>
                <div className="text-gray-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;