
const About = () => {
  return (
    <main className="pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Retrovis Industry</h1>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              We are a premier apparel manufacturer based in Sialkot, Pakistan, delivering high-quality custom garments to clients worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded with a passion for quality craftsmanship and innovative design, Retrovis Industry has grown into a trusted name in the apparel manufacturing industry. Based in the textile hub of Sialkot, we combine traditional expertise with modern manufacturing techniques.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey began with a simple mission: to provide premium quality apparel with excellent service at competitive prices. Today, we serve clients from around the globe, offering comprehensive manufacturing solutions from concept to delivery.
              </p>
              <p className="text-gray-600">
                As a certified Alibaba supplier, we maintain rigorous quality standards and ethical business practices, ensuring that every product that leaves our facility meets international standards.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Our Team" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Our Facility" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold mb-4">Our Facility</h2>
              <p className="text-gray-600 mb-4">
                Located at Korpur, Airport Road, Sialkot, our state-of-the-art manufacturing facility is equipped with advanced machinery and technology to handle every aspect of apparel production.
              </p>
              <p className="text-gray-600 mb-4">
                From cutting and sewing to embroidery and printing, our facility houses specialized departments staffed by skilled professionals who bring expertise and attention to detail to every project.
              </p>
              <p className="text-gray-600">
                We maintain a clean, organized, and efficient workspace that allows us to deliver consistent quality while meeting tight deadlines and accommodating orders of all sizes.
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Us</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Quality Commitment</h3>
                <p className="text-gray-600">We never compromise on quality, using premium materials and maintaining strict quality control at every production stage.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                <p className="text-gray-600">Every project is unique, and we tailor our services to meet your specific requirements and bring your vision to life.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">We offer excellent value without compromising quality, with flexibility for orders of all sizes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
                <p className="text-gray-600">We understand the importance of deadlines and are committed to delivering your orders on time, every time.</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a href="/contact" className="bg-primary text-white px-8 py-3 rounded inline-block hover:bg-opacity-90 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
