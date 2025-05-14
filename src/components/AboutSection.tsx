
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">About Retrovis Industry</h2>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            <p className="text-gray-600 mb-4">
              Retrovis Industry is a certified Sialkot-based manufacturer specializing in high-quality apparel for brands and teams worldwide. With years of expertise, we've built a reputation for excellence in the textile industry.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>High-quality apparel for brands and teams</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Custom embroidery, sublimation, and printing</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Low quantity orders with premium finishing</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Complete cut & sew service from pattern to packing</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Global client servicing via Alibaba</span>
              </li>
            </ul>
            <p className="text-gray-600 mb-6">
              Located at Korpur, Airport Road, Sialkot, Punjab 51310, we combine traditional craftsmanship with modern manufacturing techniques to deliver products that exceed expectations.
            </p>
            <Link to="/about" className="bg-primary text-white px-6 py-3 rounded inline-block hover:bg-opacity-90 transition-colors">
              Learn More
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Retrovis Industry Team" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
