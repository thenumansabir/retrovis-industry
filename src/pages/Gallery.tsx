
const galleryCategories = [
  {
    id: "hoodies",
    title: "Hoodies Collection",
    description: "Premium quality hoodies with custom designs and embroidery.",
    items: [
      {
        id: 1,
        title: "Premium Hoodie - Black",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 2,
        title: "Premium Hoodie - Gray",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 3,
        title: "Premium Hoodie - Navy",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 4,
        title: "Premium Hoodie - Red",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
    ]
  },
  {
    id: "tracksuits",
    title: "Tracksuits",
    description: "Complete tracksuit sets for sports and casual wear.",
    items: [
      {
        id: 1,
        title: "Sports Tracksuit - Blue",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 2,
        title: "Sports Tracksuit - Black",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 3,
        title: "Casual Tracksuit - Gray",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 4,
        title: "Premium Tracksuit - Red/Black",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
    ]
  },
  {
    id: "jeans",
    title: "Denim Collection",
    description: "Premium quality denim jeans with excellent finishing.",
    items: [
      {
        id: 1,
        title: "Classic Blue Jeans",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 2,
        title: "Black Denim Jeans",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 3,
        title: "Gray Denim Jeans",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 4,
        title: "Distressed Denim Jeans",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
    ]
  },
  {
    id: "shorts",
    title: "Shorts & Combos",
    description: "Stylish shorts and hoodie+shorts combinations.",
    items: [
      {
        id: 1,
        title: "Athletic Shorts - Black",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 2,
        title: "Hoodie & Shorts Combo - Gray",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 3,
        title: "Athletic Shorts - Navy",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 4,
        title: "Hoodie & Shorts Combo - Black",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
    ]
  },
  {
    id: "jackets",
    title: "Puffer Jackets",
    description: "Premium quality puffer jackets for all seasons.",
    items: [
      {
        id: 1,
        title: "Winter Puffer Jacket - Black",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 2,
        title: "Winter Puffer Jacket - Navy",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 3,
        title: "Lightweight Puffer Jacket - Gray",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
      {
        id: 4,
        title: "Premium Puffer Jacket - Red",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
      },
    ]
  },
];

const Gallery = () => {
  return (
    <main className="pt-24">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Product Gallery</h1>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600">
              Explore our range of high-quality apparel products manufactured with precision and care.
            </p>
          </div>
          
          {galleryCategories.map((category, index) => (
            <div key={category.id} className="mb-16 scroll-mt-24" id={category.id}>
              <div className="flex items-center mb-6">
                <h2 className="text-3xl font-bold">{category.title}</h2>
                <div className="h-1 w-16 bg-primary ml-4"></div>
              </div>
              <p className="text-gray-600 mb-8 max-w-3xl">
                {category.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="bg-gray-50 rounded-lg p-8 mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Custom Manufacturing Solutions</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Don't see exactly what you're looking for? We specialize in custom apparel manufacturing tailored to your specific requirements.
            </p>
            <a 
              href="/contact" 
              className="bg-primary text-white px-8 py-3 rounded inline-block hover:bg-opacity-90 transition-colors"
            >
              Request Custom Order
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
