
const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    title: "Hoodies Collection",
    description: "Premium hoodies in different colors with animated prints"
  },
  {
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    title: "Jean Pants",
    description: "Quality denim jeans with excellent finishing"
  },
  {
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    title: "Tracksuit Sets",
    description: "Complete tracksuit sets with custom embroidery"
  },
  {
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    title: "Hoodie and Shorts",
    description: "Niker style hoodie and shorts combination"
  },
  {
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    title: "Puffer Jackets",
    description: "Premium quality puffer jackets for all seasons"
  },
  {
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    title: "Custom Apparel",
    description: "Fully customized apparel for teams and brands"
  }
];

const GallerySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Gallery</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our premium quality products manufactured with precision and care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="/gallery"
            className="inline-block border-2 border-primary text-primary font-medium px-6 py-3 rounded hover:bg-primary hover:text-white transition-colors"
          >
            View Complete Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
