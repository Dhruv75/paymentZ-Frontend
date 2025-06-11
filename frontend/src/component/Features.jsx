import { Shield, Zap, Globe, CreditCard, Smartphone, Lock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Speed",
      description: "Process transactions in milliseconds with our advanced infrastructure"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Fort Knox Security",
      description: "Multi-layer encryption and fraud detection keep your money safe"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Network",
      description: "Send money anywhere in the world, 24/7, 365 days a year"
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Smart Payments",
      description: "AI-powered payment routing for optimal speed and cost"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile First",
      description: "Seamless experience across all devices and platforms"
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: "Privacy Protected",
      description: "Your financial data remains private and encrypted"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Our Platform</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built for the future of finance with cutting-edge technology and user-centric design
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="text-purple-400 mb-6 group-hover:text-cyan-400 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;