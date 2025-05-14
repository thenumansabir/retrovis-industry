
const processSteps = [
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    title: "Pattern Cutting",
    description: "Cutting hoodie patterns on specialized cutting tables with precision"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    title: "Fabric Layout",
    description: "Laying and cutting fabric as per the designed patterns"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    title: "Embroidery",
    description: "Detailed embroidery work done on specialized machines"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    title: "Printing",
    description: "Printing logos and designs on apparel using advanced techniques"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    title: "Stitching",
    description: "Careful stitching process by skilled workers"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    title: "Steam Pressing",
    description: "Steam pressing of finished items for a professional finish"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    title: "Labeling",
    description: "Stitching neck labels showing Retrovis Industry branding and care instructions"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    title: "Packaging",
    description: "Carefully packing products in clear polybags for protection"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    title: "Shipping",
    description: "Loading finished items for delivery via our Retrovis Industry branded transport"
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Production Process</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From pattern to product, our comprehensive manufacturing process ensures quality at every step.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
