
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <img src="/lovable-uploads/15a5e3b3-e2a9-4fe6-9075-bed8439e9748.png" alt="Retrovis Industry Logo" className="h-10 w-auto mr-2" />
              <div className="flex items-baseline">
                <span className="text-primary font-bold text-xl">Retrovis</span>
                <span className="text-white font-bold text-xl">Industry</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Retrovis Industry — Where Fabric Meets Identity
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.23a10 10 0 0 1 7.8 16.22 10 10 0 0 1-7.8 3.55 10 10 0 0 1-7.8-3.55A10 10 0 0 1 12 2.23Zm-.92 14.93v-6.63H8.38v6.63h2.7Zm-1.35-7.54a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7Zm9.17 7.54v-3.8c0-2.26-1.34-3.3-2.85-3.3a2.6 2.6 0 0 0-2.36 1.27h-.04v-1.08H11.1v6.91h2.7v-3.43c0-1.14.72-1.88 1.67-1.88s1.48.72 1.48 1.85v3.46h2.85Z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About</Link>
              <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link>
              <Link to="/process" className="text-gray-300 hover:text-primary transition-colors">Process</Link>
              <Link to="/gallery" className="text-gray-300 hover:text-primary transition-colors">Gallery</Link>
              <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-2 text-gray-300">
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Korpur, Airport Road, Sialkot, Punjab 51310</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+92 306 8423522</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@retrovisindustry.com</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {currentYear} Retrovis Industry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
