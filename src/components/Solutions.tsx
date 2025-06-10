import React, { useEffect, useRef, useState } from 'react';
import { Building2, Truck, Factory, Store, Wheat, Pill, IceCream, Fish, Wine, Snowflake, X } from 'lucide-react';

interface Industry {
  icon: JSX.Element;
  title: string;
  description: string;
  image: string;
  features: string[];
  detailedInfo: {
    overview: string;
    benefits: string[];
    specifications: string[];
    applications: string[];
  };
}

const Solutions = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries: Industry[] = [
    {
      icon: <Wheat className="w-12 h-12" />,
      title: "Agriculture & Food Processing",
      description: "Cold storage solutions for fruits, vegetables, dairy, and processed foods across India.",
      image: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Post-harvest storage", "Processing facilities", "Export quality maintenance", "Temperature monitoring"],
      detailedInfo: {
        overview: "Our comprehensive cold storage solutions for agriculture and food processing are designed to maintain optimal conditions for various agricultural products. We ensure the highest quality preservation while meeting international export standards.",
        benefits: [
          "Extended shelf life of produce",
          "Reduced post-harvest losses",
          "Maintained nutritional value",
          "Compliance with international standards"
        ],
        specifications: [
          "Temperature range: -2°C to 15°C",
          "Humidity control: 85-95%",
          "Automated monitoring systems",
          "Energy-efficient design"
        ],
        applications: [
          "Fruits and vegetables storage",
          "Dairy products preservation",
          "Processed food storage",
          "Export-oriented facilities"
        ]
      }
    },
    {
      icon: <Store className="w-12 h-12" />,
      title: "Retail & Supermarkets",
      description: "Walk-in coolers, display freezers, and cold rooms for retail chains and supermarkets.",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Display solutions", "Walk-in coolers", "Energy monitoring", "Inventory management"],
      detailedInfo: {
        overview: "Our retail cold storage solutions are designed to enhance customer experience while maintaining product quality. We provide integrated systems that combine efficient cooling with modern retail requirements.",
        benefits: [
          "Enhanced product visibility",
          "Improved customer experience",
          "Reduced energy consumption",
          "Better inventory management"
        ],
        specifications: [
          "Customizable display units",
          "Smart temperature control",
          "LED lighting integration",
          "Easy maintenance access"
        ],
        applications: [
          "Supermarket cold rooms",
          "Display freezers",
          "Walk-in coolers",
          "Back storage facilities"
        ]
      }
    },
    {
      icon: <Pill className="w-12 h-12" />,
      title: "Pharmaceuticals",
      description: "Temperature-controlled storage for medicines, vaccines, and pharmaceutical products.",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Vaccine storage", "Medicine preservation", "Compliance monitoring", "24/7 temperature control"],
      detailedInfo: {
        overview: "Our pharmaceutical cold storage solutions meet the strictest regulatory requirements while ensuring the integrity of temperature-sensitive medications and vaccines. We provide comprehensive monitoring and backup systems.",
        benefits: [
          "Regulatory compliance",
          "Real-time monitoring",
          "Backup power systems",
          "Data logging and reporting"
        ],
        specifications: [
          "Temperature range: 2°C to 8°C",
          "Alarm systems",
          "Remote monitoring",
          "Documentation systems"
        ],
        applications: [
          "Vaccine storage",
          "Medicine warehouses",
          "Clinical trial storage",
          "Distribution centers"
        ]
      }
    },
    {
      icon: <IceCream className="w-12 h-12" />,
      title: "Dairy & Ice Cream",
      description: "Specialized cold storage solutions for dairy products and ice cream manufacturing.",
      image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Bulk storage", "Production facilities", "Distribution centers", "Quality control"],
      detailedInfo: {
        overview: "Our dairy and ice cream storage solutions are designed to maintain optimal conditions for both production and storage, ensuring product quality and consistency throughout the supply chain.",
        benefits: [
          "Consistent product quality",
          "Efficient production flow",
          "Reduced energy costs",
          "Improved shelf life"
        ],
        specifications: [
          "Temperature range: -25°C to 4°C",
          "Hygienic design",
          "Easy cleaning systems",
          "Production integration"
        ],
        applications: [
          "Ice cream production",
          "Dairy product storage",
          "Processing facilities",
          "Distribution centers"
        ]
      }
    },
    {
      icon: <Fish className="w-12 h-12" />,
      title: "Seafood & Meat",
      description: "Temperature-controlled storage for seafood and meat processing industries.",
      image: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Processing units", "Storage facilities", "Export compliance", "Hygiene standards"],
      detailedInfo: {
        overview: "Our seafood and meat storage solutions are designed to maintain the highest standards of food safety while ensuring optimal product quality. We provide integrated systems for processing, storage, and distribution.",
        benefits: [
          "Enhanced food safety",
          "Extended shelf life",
          "Export compliance",
          "Efficient processing"
        ],
        specifications: [
          "Temperature range: -40°C to 4°C",
          "HACCP compliance",
          "Sanitary design",
          "Processing integration"
        ],
        applications: [
          "Seafood processing",
          "Meat storage",
          "Processing facilities",
          "Export facilities"
        ]
      }
    },
    {
      icon: <Wine className="w-12 h-12" />,
      title: "Beverages & Wines",
      description: "Climate-controlled storage solutions for beverages and wine cellars.",
      image: "https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Wine cellars", "Beverage storage", "Temperature control", "Humidity management"],
      detailedInfo: {
        overview: "Our beverage and wine storage solutions provide precise climate control to maintain the perfect conditions for aging and storing wines and other beverages. We ensure optimal preservation of taste and quality.",
        benefits: [
          "Perfect aging conditions",
          "Consistent quality",
          "Energy efficiency",
          "Easy monitoring"
        ],
        specifications: [
          "Temperature range: 10°C to 18°C",
          "Humidity control: 50-70%",
          "UV protection",
          "Vibration control"
        ],
        applications: [
          "Wine cellars",
          "Beverage storage",
          "Distribution centers",
          "Retail storage"
        ]
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.solution-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const Modal = ({ industry, onClose }: { industry: Industry; onClose: () => void }) => {
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }, [onClose]);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <div className="h-64 relative">
              <img 
                src={industry.image} 
                alt={industry.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                {industry.icon}
              </div>
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{industry.title}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Overview</h4>
                  <p className="text-gray-600">{industry.detailedInfo.overview}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Key Benefits</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {industry.detailedInfo.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Technical Specifications</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {industry.detailedInfo.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Applications</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {industry.detailedInfo.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3"></div>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Industry Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Specialized cold storage solutions for diverse Indian industries. Each solution is designed 
            to meet specific requirements and regulatory standards across different sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              data-index={index}
              className={`solution-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-700 group transform hover:scale-105 hover:-rotate-1 ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {industry.icon}
                </div>
                
                <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold transform group-hover:scale-110 transition-transform duration-300">
                  India Focused
                </div>
              </div>
              
              <div className="p-8 relative">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                
                <div className="space-y-2 mb-6">
                  {industry.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-all duration-300 transform hover:translate-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => setSelectedIndustry(industry)}
                  className="text-teal-600 font-semibold hover:text-teal-700 transition-all duration-300 group flex items-center space-x-2"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Learn More</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedIndustry && (
        <Modal 
          industry={selectedIndustry} 
          onClose={() => setSelectedIndustry(null)} 
        />
      )}
    </section>
  );
};

export default Solutions;