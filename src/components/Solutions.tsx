import React, { useState, useEffect } from 'react';
import { Warehouse, Snowflake, DoorOpen, Droplets, Wind, Thermometer, IceCream, Package, SlidersHorizontal } from 'lucide-react';

interface EquipmentDetails {
  brief: string;
  benefits: string[];
  specs: string[];
  applications: string[];
}

interface EquipmentItem {
  title: string;
  image: string;
  description: string;
  features: string[];
  details: EquipmentDetails;
}

const equipment: EquipmentItem[] = [
  {
    title: 'Cold Room',
    image: '/coldroom.webp',
    description: 'Modular cold rooms for storage of perishable goods with precise temperature and humidity control.',
    features: [
      'Customizable sizes',
      'Temperature range: -40°C to +10°C',
      'PUF insulated panels',
      'Energy efficient',
    ],
    details: {
      brief: 'Cold rooms are insulated modular storage units designed to maintain low temperatures for preserving perishable items like food, medicine, and chemicals with precise humidity and temperature control.',
      benefits: [
        'Customizable sizing for various capacities',
        'High energy efficiency with low running costs',
        'PUF insulated panels for superior insulation',
        'Reliable temperature consistency from -40°C to +10°C',
      ],
      specs: [
        'Temperature Range: -40°C to +10°C',
        'Insulation: Polyurethane Foam (PUF)',
        'Panel Thickness: 60mm–150mm',
        'Types: Modular walk-in or custom-built',
      ],
      applications: [
        'Food processing & storage industries',
        'Pharmaceutical warehouses',
        'Floral storage',
        'Research labs',
      ],
    },
  },
  {
    title: 'Glass Door Chiller',
    image: '/glassdoor.webp',
    description: 'Display chillers with glass doors for beverages, dairy, and retail products.',
    features: [
      'Double/triple glass doors',
      'LED lighting',
      'Temperature range: 0°C to +8°C',
      'Attractive display',
    ],
    details: {
      brief: 'Glass door chillers are refrigeration units with transparent doors used for showcasing chilled products in commercial environments, maintaining visual appeal and freshness.',
      benefits: [
        'Enhanced product visibility for customers',
        'Energy-saving LED lighting',
        'Reduced cooling loss with triple glass doors',
        'Elegant and modern retail appearance',
      ],
      specs: [
        'Temperature Range: 0°C to +8°C',
        'Lighting: Internal LED',
        'Glass: Double/Triple-glazed insulated',
        'Door Types: Swing or sliding',
      ],
      applications: [
        'Supermarkets & retail stores',
        'Beverage & dairy product display',
        'Convenience stores',
        'Cafeterias',
      ],
    },
  },
  {
    title: 'Cold Room Doors',
    image: '/coldroomdoor.jpg',
    description: 'Durable and insulated doors for cold rooms, available in sliding and hinged types.',
    features: [
      'PUF insulated',
      'Heated frames (optional)',
      'Custom sizes',
      'Easy operation',
    ],
    details: {
      brief: 'Cold room doors are specially engineered, insulated doors available in sliding or hinged styles, designed to maintain thermal efficiency and prevent air leakage.',
      benefits: [
        'Enhanced insulation with PUF-filled doors',
        'Optional heating to prevent freezing',
        'Custom sizing for any cold room',
        'Smooth and easy operation',
      ],
      specs: [
        'Door Types: Sliding / Hinged',
        'Insulation: PUF Core',
        'Heating Option: Yes (frame heaters)',
        'Finishing: Galvanized / Stainless Steel',
      ],
      applications: [
        'Industrial cold storage',
        'Food and pharma manufacturing units',
        'Warehousing & logistics centers',
        'Retail cold chambers',
      ],
    },
  },
  {
    title: 'Condensing Units (Air & Water Cooled)',
    image: '/watercooled.avif',
    description: 'Efficient air-cooled and water-cooled condensing units for various refrigeration needs.',
    features: [
      'High efficiency fans',
      'Low noise operation',
      'Weatherproof/Corrosion resistant',
      'Easy installation & maintenance',
      'Available in air-cooled and water-cooled options',
    ],
    details: {
      brief: 'Condensing units serve as the heart of the refrigeration system, responsible for compressing refrigerant and maintaining the cold room temperature. They come in air-cooled and water-cooled variants.',
      benefits: [
        'High-efficiency operation with low energy consumption',
        'Weatherproof and corrosion-resistant',
        'Quiet and low-vibration systems',
        'Compatible with multiple refrigerants',
      ],
      specs: [
        'Types: Air-cooled / Water-cooled',
        'Cooling Capacity: Customized as per requirement',
        'Compressor Types: Scroll, Reciprocating, Screw',
        'Coating: Anti-corrosive',
      ],
      applications: [
        'Cold rooms and chillers',
        'Food and beverage industries',
        'Dairy and fisheries',
        'Pharmaceuticals',
      ],
    },
  },
  {
    title: 'Control Panel for Cold Room',
    image: '/controlpannel.webp',
    description: 'Advanced control panels for cold room automation and safety.',
    features: [
      'Digital temperature controller',
      'Alarm systems',
      'User-friendly interface',
      'Customizable settings',
    ],
    details: {
      brief: 'Cold room control panels provide automated control, monitoring, and safety for refrigeration systems through digital interfaces and alarms.',
      benefits: [
        'Easy monitoring and temperature control',
        'Safety alarms for critical events',
        'Intuitive and user-friendly operation',
        'Fully customizable settings',
      ],
      specs: [
        'Controller: Digital with display',
        'Alarms: High/Low Temp, Power Failure, Door Open',
        'Inputs: Temperature sensors, door switch',
        'Output: Compressor, light, heater control',
      ],
      applications: [
        'All types of cold storage systems',
        'Commercial refrigeration plants',
        'Food & pharma cold chains',
        'HVAC and industrial cooling',
      ],
    },
  },
  {
    title: 'Evaporator Unit',
    image: '/evaporator.webp',
    description: 'High performance evaporator units for cold storage and refrigeration.',
    features: [
      'Efficient heat exchange',
      'Anti-corrosive coating',
      'Low maintenance',
      'Multiple capacities',
    ],
    details: {
      brief: 'Evaporator units are installed inside cold rooms to remove heat from the storage area, ensuring the desired temperature is maintained efficiently.',
      benefits: [
        'Optimal heat exchange and fast cooling',
        'Anti-corrosive materials for durability',
        'Easy to clean and maintain',
        'Wide range of capacities for all cold room sizes',
      ],
      specs: [
        'Fin Spacing: 4mm–8mm',
        'Coil Material: Aluminum/Copper',
        'Fan Diameter: 300mm–500mm',
        'Temperature Application: Medium & Low Temp',
      ],
      applications: [
        'Walk-in freezers and chillers',
        'Meat and seafood storage',
        'Vegetable and fruit preservation',
        'Industrial refrigeration systems',
      ],
    },
  },
  {
    title: 'Ripening Chamber',
    image: '/reipeningchamber.webp',
    description: 'Specialized chambers for controlled ripening of fruits like bananas and mangoes, ensuring uniform color and quality.',
    features: [
      'Precise temperature & humidity control',
      'Ethylene gas injection system',
      'Energy efficient operation',
      'Uniform ripening',
      'Customizable sizes',
    ],
    details: {
      brief: 'Fruit ripening chambers are controlled atmospheric systems designed to artificially ripen fruits like bananas, mangoes, and papayas in a safe and uniform manner using regulated temperature, humidity, and ethylene gas.',
      benefits: [
        'Uniform and natural-looking ripening',
        'Reduced spoilage and increased shelf life',
        'Automated temperature and humidity control',
        'Safe use of ethylene gas (non-toxic and residue-free)',
        'Energy-efficient operation with minimal manual intervention',
      ],
      specs: [
        'Temperature Range: 15°C to 30°C',
        'Humidity Control: 85% to 95% RH',
        'Gas Control: Ethylene dosing system (100-150 ppm)',
        'Insulation: PUF Panels with 60mm–100mm thickness',
        'Chamber Capacity: Customizable from 1MT to 30MT and above',
      ],
      applications: [
        'Banana ripening',
        'Mango ripening',
        'Papaya and other climacteric fruits',
        'Agricultural produce storage facilities',
        'Fruit exporters and processing units',
      ],
    },
  },
  {
    title: 'Bitzer Compressor Rack System',
    image: '/bitzer.png',
    description: 'High-performance compressor rack systems designed for industrial refrigeration applications.',
    features: [
      'Energy-efficient operation',
      'Modular design for easy maintenance',
      'Advanced control systems',
      'Suitable for large-scale refrigeration',
    ],
    details: {
      brief: 'Bitzer Compressor Rack Systems are engineered for industrial refrigeration, offering high efficiency, reliability, and scalability for large-scale cooling applications.',
      benefits: [
        'Energy-efficient operation with low power consumption',
        'Modular design for easy maintenance and scalability',
        'Advanced control systems for precise temperature management',
        'Durable and reliable for industrial use',
      ],
      specs: [
        'Compressor Type: Screw and Scroll',
        'Cooling Capacity: Customizable as per requirement',
        'Control System: Advanced digital control',
        'Installation: Modular rack system',
      ],
      applications: [
        'Industrial refrigeration plants',
        'Food processing and storage',
        'Cold storage warehouses',
        'HVAC systems',
      ],
    },
  },
  {
    title: 'Bock Compressor',
    image: '/bock.jpg',
    description: 'Reliable and efficient compressors for various refrigeration and air conditioning applications.',
    features: [
      'High efficiency and reliability',
      'Low noise operation',
      'Wide range of capacities',
      'Easy installation and maintenance',
    ],
    details: {
      brief: 'Bock Compressors are known for their high efficiency, reliability, and low noise operation, making them ideal for various refrigeration and air conditioning applications.',
      benefits: [
        'High efficiency with low energy consumption',
        'Low noise and vibration levels',
        'Wide range of capacities for different applications',
        'Easy installation and maintenance',
      ],
      specs: [
        'Compressor Type: Reciprocating and Scroll',
        'Cooling Capacity: Customizable as per requirement',
        'Noise Level: Low',
        'Installation: Easy and flexible',
      ],
      applications: [
        'Refrigeration systems',
        'Air conditioning units',
        'Heat pumps',
        'Industrial cooling applications',
      ],
    },
  },
];

const Solutions = () => {
  const [selected, setSelected] = useState<EquipmentItem | null>(null);

  useEffect(() => {
    if (!selected) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelected(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected]);

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Our Equipment & Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            We provide a wide range of cold storage equipment and solutions to meet your business needs. Explore our product offerings below.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-700 group transform hover:scale-105 hover:-rotate-1 cursor-pointer flex flex-col" onClick={() => setSelected(item)}>
              <div className="relative h-40 flex items-center justify-center bg-gradient-to-t from-teal-50 to-white">
                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover object-center opacity-80" />
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                <ul className="space-y-2 mb-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-all duration-300 transform hover:translate-x-2">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto p-8 flex justify-center">
                <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full font-semibold text-sm animate-bounce shadow-sm cursor-pointer select-none">
                  Click to know more
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold" onClick={() => setSelected(null)}>&times;</button>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{selected.title}</h2>
              <img src={selected.image} alt={selected.title} className="w-full h-90 object-cover object-center rounded-lg mb-4" />
              <p className="text-gray-700 mb-4">{selected.details.brief}</p>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Key Benefits</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {selected.details.benefits.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Specifications</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {selected.details.specs.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Applications</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {selected.details.applications.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Solutions;