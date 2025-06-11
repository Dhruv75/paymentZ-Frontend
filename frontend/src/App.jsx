import Hero from './component/Hero';
import Features from './component/Features';
import Stats from './component/Stats';
import Testimonials from './component/Testimonials';
import CTA from './component/CTA';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default App;