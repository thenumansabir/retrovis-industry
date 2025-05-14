
const processSteps = [
  {
    id: 1,
    title: "Pattern Development",
    description: "Our skilled pattern makers create precise templates based on your designs or specifications. These patterns serve as the foundation for the entire manufacturing process.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    details: [
      "Digital pattern creation using CAD technology",
      "Pattern grading for different sizes",
      "Sample development and refinement",
      "Pattern optimization for efficient material usage"
    ]
  },
  {
    id: 2,
    title: "Fabric Layout & Cutting",
    description: "Fabrics are carefully spread on cutting tables and cut according to the patterns with precision. Our expert cutters ensure accurate cutting while minimizing material waste.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    details: [
      "Strategic fabric layout for optimal material usage",
      "Precision cutting using advanced equipment",
      "Quality inspection of cut pieces",
      "Sorting and bundling for efficient production flow"
    ]
  },
  {
    id: 3,
    title: "Embroidery",
    description: "Using state-of-the-art embroidery machines, we add logos, designs, and decorative elements to the garments. Our skilled technicians ensure crisp, durable embroidery work.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    details: [
      "Digitization of designs for embroidery",
      "Multi-color embroidery capabilities",
      "Specialized thread selection for durability",
      "Quality control after embroidery completion"
    ]
  },
  {
    id: 4,
    title: "Printing",
    description: "From screen printing to sublimation, we apply logos, graphics, and designs to your garments using advanced printing techniques that ensure vibrant, long-lasting results.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    details: [
      "Screen printing for logos and graphics",
      "Sublimation printing for all-over designs",
      "Heat transfer application",
      "Eco-friendly ink options available"
    ]
  },
  {
    id: 5,
    title: "Stitching",
    description: "Our skilled stitchers carefully assemble all components of the garment, paying close attention to seams, hems, and overall construction quality.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    details: [
      "Precision stitching with reinforced seams",
      "Quality control at each stitching stage",
      "Special techniques for different fabric types",
      "Ergonomic workstations for consistent quality"
    ]
  },
  {
    id: 6,
    title: "Steam Pressing",
    description: "Each garment undergoes professional steam pressing to remove wrinkles and give the product a clean, finished appearance before final inspection.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    details: [
      "Industrial steam pressing equipment",
      "Temperature control for different fabric types",
      "Shape retention techniques",
      "Final appearance enhancement"
    ]
  },
  {
    id: 7,
    title: "Labeling",
    description: "We attach brand labels, size tags, care instructions, and other required labels to complete the garment's branding and provide necessary information to end users.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    details: [
      "Brand label application",
      "Size and composition tags",
      "Care instruction labels",
      "Country of origin marking"
    ]
  },
  {
    id: 8,
    title: "Packaging",
    description: "Finished products are carefully inspected, folded, and packaged in polybags or custom packaging as per your requirements to protect them during shipping.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    details: [
      "Individual polybag packaging",
      "Custom packaging options available",
      "Bulk packaging for shipping",
      "Final quality inspection before packaging"
    ]
  },
  {
    id: 9,
    title: "Shipping",
    description: "The packaged products are loaded into our branded vehicles for delivery to shipping facilities or directly to customers, completing the manufacturing process.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    details: [
      "Secure loading procedures",
      "Shipping documentation preparation",
      "International shipping coordination",
      "Tracking information provision"
    ]
  }
];

const Process = () => {
  return (
    <main className="pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Production Process</h1>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              At Retrovis Industry, we follow a comprehensive manufacturing process to ensure high-quality results. From pattern development to shipping, every step is handled with precision and care.
            </p>
          </div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div 
                key={step.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 !== 0 ? 'order-1 lg:order-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                      {step.id}
                    </div>
                    <h2 className="text-3xl font-bold">{step.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {step.description}
                  </p>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Process Details:</h3>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`${index % 2 !== 0 ? 'order-2 lg:order-1' : ''}`}>
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Experience our detailed manufacturing process that ensures quality at every step. Contact us today to discuss your apparel manufacturing needs.
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

export default Process;
