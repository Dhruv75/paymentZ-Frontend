import { useState, useEffect } from "react";

const Stats = () => {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => (prev + 1) % 100);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-5xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors">
              ${counter + 50}B+
            </div>
            <div className="text-xl text-gray-300">Transaction Volume</div>
          </div>
          <div className="group">
            <div className="text-5xl font-black text-white mb-4 group-hover:text-pink-400 transition-colors">
              150M+
            </div>
            <div className="text-xl text-gray-300">Active Users</div>
          </div>
          <div className="group">
            <div className="text-5xl font-black text-white mb-4 group-hover:text-yellow-400 transition-colors">
              99.9%
            </div>
            <div className="text-xl text-gray-300">Uptime</div>
          </div>
          <div className="group">
            <div className="text-5xl font-black text-white mb-4 group-hover:text-green-400 transition-colors">
              &lt;0.1s
            </div>
            <div className="text-xl text-gray-300">Avg. Speed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;