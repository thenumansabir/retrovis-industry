
import { Shirt, Scissors, Box, BadgeAlert, Truck, Phone } from "lucide-react";

const services = [
  {
    icon: <Shirt className="h-10 w-10 text-primary" />,
    title: "Brands, Team Uniform & Apparel",
    description: "High-quality custom-designed apparel for brands and teams, with attention to detail and premium materials."
  },
  {
    icon: <Scissors className="h-10 w-10 text-primary" />,
    title: "Embroidery-Sublimation-Printing",
    description: "Advanced embroidery, sublimation printing, and screen printing services for all your customization needs."
  },
  {
    icon: <Scissors className="h-10 w-10 text-primary" />,
    title: "Custom Design / Cut & Sew",
    description: "Complete cut & sew service from pattern design to final product, bringing your vision to life."
  },
  {
    icon: <BadgeAlert className="h-10 w-10 text-primary" />,
    title: "Custom Logo, Label, and Tags",
    description: "Personalized branding elements including custom logos, labels, and tags to enhance your products."
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Certified Alibaba Supplier",
    description: "Trusted and certified supplier on Alibaba, ensuring reliable global service and quality standards."
  },
  {
    icon: <Box className="h-10 w-10 text-primary" />,
    title: "Low Quantity Orders Available",
    description: "Flexible production capabilities to accommodate smaller batch orders without compromising on quality."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Services</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We offer comprehensive manufacturing solutions for brands and businesses looking for high-quality apparel production.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
