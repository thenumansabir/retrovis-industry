
import { Shirt, Scissors, Box, BadgeAlert, Truck, Phone } from "lucide-react";

const services = [
  {
    icon: <Shirt className="h-12 w-12 text-primary" />,
    title: "Brands, Team Uniform & Apparel",
    description: "We specialize in manufacturing high-quality custom-designed apparel for brands and teams. Our expert team ensures that every garment is crafted with precision and attention to detail. We use premium materials and advanced techniques to deliver products that meet international standards. Whether you need team uniforms, corporate apparel, or branded clothing lines, we have the expertise to bring your vision to life.",
    features: [
      "Custom brand uniforms and corporate wear",
      "Team sports uniforms and jerseys",
      "School and institutional uniforms",
      "Event-specific apparel",
      "Corporate gift items"
    ]
  },
  {
    icon: <Scissors className="h-12 w-12 text-primary" />,
    title: "Embroidery-Sublimation-Printing",
    description: "Our facility is equipped with state-of-the-art embroidery machines, sublimation printers, and screen printing equipment to handle all your customization needs. We offer high-quality embroidery with intricate designs, vibrant sublimation printing for all-over prints, and durable screen printing for logos and graphics. Our printing techniques ensure that your designs remain vibrant and intact even after multiple washes.",
    features: [
      "Precision computer-aided embroidery",
      "Full-color high-definition sublimation printing",
      "Screen printing with eco-friendly inks",
      "Heat transfer printing",
      "Custom labels and tags"
    ]
  },
  {
    icon: <Scissors className="h-12 w-12 text-primary" />,
    title: "Custom Design / Cut & Sew",
    description: "From concept to creation, our comprehensive cut and sew service covers every aspect of the production process. Our experienced pattern makers and designers can help develop your ideas into production-ready patterns. We handle fabric cutting with precision, ensuring minimal waste and maximum efficiency. Our skilled stitchers then transform these components into finished garments according to your specifications.",
    features: [
      "Custom pattern development and grading",
      "Sample development and prototyping",
      "Fabric and material sourcing",
      "Precision cutting and stitching",
      "Quality control and finishing"
    ]
  },
  {
    icon: <BadgeAlert className="h-12 w-12 text-primary" />,
    title: "Custom Logo, Label, and Tags",
    description: "We offer comprehensive branding solutions including custom logo designs, labels, and tags that enhance your product identity. Our branding elements are crafted with attention to detail, ensuring they complement your garments and reinforce your brand image. From woven labels to hang tags, we create branding components that add a professional touch to your products.",
    features: [
      "Custom woven and printed labels",
      "Hang tags and care instruction tags",
      "Size labels and content tags",
      "Brand logo application",
      "Custom packaging solutions"
    ]
  },
  {
    icon: <Truck className="h-12 w-12 text-primary" />,
    title: "Certified Alibaba Supplier",
    description: "As a certified Alibaba supplier, we adhere to strict quality standards and business practices that ensure reliability and trustworthiness. This certification reflects our commitment to excellence and our ability to serve international clients effectively. Our presence on Alibaba's global platform allows us to connect with businesses worldwide and showcase our manufacturing capabilities.",
    features: [
      "Verified business credentials",
      "Quality assurance guarantees",
      "Transparent business operations",
      "International shipping capabilities",
      "Secure payment processing"
    ]
  },
  {
    icon: <Box className="h-12 w-12 text-primary" />,
    title: "Low Quantity Orders Available",
    description: "Unlike many manufacturers who require large minimum orders, we offer flexibility with low quantity production runs. This makes us an ideal partner for startups, small businesses, and special projects that don't require bulk manufacturing. Despite the smaller quantities, we maintain the same level of quality and attention to detail that we apply to larger orders.",
    features: [
      "No excessive minimum order requirements",
      "Cost-effective small batch production",
      "Quick turnaround times",
      "Same quality standards as large orders",
      "Scalable production options as your brand grows"
    ]
  }
];

const Services = () => {
  return (
    <main className="pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              Retrovis Industry offers comprehensive apparel manufacturing solutions from design to delivery. Explore our range of services designed to meet your specific needs.
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 !== 0 ? 'order-1 lg:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h2 className="text-3xl font-bold ml-4">{service.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Key Features:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`bg-gray-100 h-64 rounded-lg flex items-center justify-center ${index % 2 !== 0 ? 'order-2 lg:order-1' : ''}`}>
                  <div className="text-center">
                    <div className="text-6xl text-primary mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you have a specific design in mind or need assistance developing your concept, our team is here to help bring your vision to life.
            </p>
            <a 
              href="/contact" 
              className="bg-primary text-white px-8 py-3 rounded inline-block hover:bg-opacity-90 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
