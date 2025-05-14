
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-black bg-opacity-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)"
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-primary">Retrovis</span>
            <span className="text-white">Industry</span>
          </h1>
        </div>
        <p className="text-white text-xl md:text-2xl mb-8">Where Craftsmanship Meets Custom Design</p>
        <Link to="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-colors">
          Get a Quote
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
