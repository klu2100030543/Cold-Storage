import React, { useEffect, useRef, useState } from 'react';
import { Apple, Fish, Milk, Wheat, Beef, Grape } from 'lucide-react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const foodTypes = [
    {
      icon: <Apple className="w-8 h-8" />,
      title: "Fruits & Vegetables",
      description: "Store fresh produce like apples, oranges, potatoes, onions, and leafy vegetables with optimal temperature and humidity control.",
      features: ["Apples, Oranges, Grapes", "Potatoes, Onions, Carrots", "Leafy vegetables & herbs"]
    },
    {
      icon: <Milk className="w-8 h-8" />,
      title: "Dairy Products",
      description: "Preserve milk, cheese, butter, yogurt, and other dairy products with precise temperature maintenance.",
      features: ["Fresh milk & cream", "Cheese & butter", "Yogurt & ice cream"]
    },
    {
      icon: <Fish className="w-8 h-8" />,
      title: "Seafood & Fish",
      description: "Keep fish, prawns, crabs, and other seafood fresh with specialized freezing and chilling systems.",
      features: ["Fresh fish varieties", "Prawns & crabs", "Frozen seafood products"]
    },
    {
      icon: <Beef className="w-8 h-8" />,
      title: "Meat & Poultry",
      description: "Store chicken, mutton, beef, and processed meat products safely with controlled freezing temperatures.",
      features: ["Chicken & poultry", "Mutton & beef", "Processed meat products"]
    },
    {
      icon: <Wheat className="w-8 h-8" />,
      title: "Grains & Pulses",
      description: "Preserve rice, wheat, lentils, and other grains in controlled environments to prevent spoilage and pest damage.",
      features: ["Rice & wheat", "Lentils & pulses", "Processed grain products"]
    },
    {
      icon: <Grape className="w-8 h-8" />,
      title: "Beverages & Juices",
      description: "Store fruit juices, soft drinks, beer, and other beverages at optimal temperatures for freshness.",
      features: ["Fresh fruit juices", "Soft drinks & sodas", "Beer & beverages"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">What You Can Store</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Our cold storage facilities are designed to preserve a wide variety of food products, 
            maintaining their freshness, quality, and nutritional value for extended periods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodTypes.map((food, index) => (
            <div 
              key={index}
              data-index={index}
              className={`service-card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 group transform hover:-translate-y-3 hover:rotate-1 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
              }}
            >
              <div className="text-teal-600 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 transform">
                {food.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                {food.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{food.description}</p>
              <ul className="space-y-2">
                {food.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border border-teal-100 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Temperature Ranges for Different Foods</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-semibold text-teal-700 mb-2">Chilled Storage</h4>
                <p className="text-gray-600 text-sm mb-2">0°C to 4°C</p>
                <p className="text-gray-500 text-xs">Dairy, vegetables, fruits</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-semibold text-teal-700 mb-2">Frozen Storage</h4>
                <p className="text-gray-600 text-sm mb-2">-18°C to -25°C</p>
                <p className="text-gray-500 text-xs">Meat, seafood, ice cream</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-semibold text-teal-700 mb-2">Deep Freeze</h4>
                <p className="text-gray-600 text-sm mb-2">-25°C to -40°C</p>
                <p className="text-gray-500 text-xs">Long-term storage, exports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;