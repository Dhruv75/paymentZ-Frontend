import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-purple-900 to-black">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-black text-white mb-8">
            Ready to <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Transform</span> Your Business?
          </h2>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            Join millions who trust us with their most important transactions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 rounded-full text-xl font-bold transform hover:scale-105 transition-all duration-200 shadow-2xl">
              Get Started Now
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 rounded-full text-xl font-bold transform hover:scale-105 transition-all duration-200">
              Schedule Demo
            </Button>
          </div>
          
          <div className="mt-12 text-gray-400">
            <p>No setup fees • No hidden costs • Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;